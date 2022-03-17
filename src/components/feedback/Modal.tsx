/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { noop } from 'lodash';
import styled, { css, SimpleInterpolation } from 'styled-components';
import Button from '../basic/Button';
import Container from '../layout/Container';
import Divider from '../layout/Divider';
import IconButton from '../inputs/IconButton';
import Portal from '../utilities/Portal';
import Row from '../layout/Row';
import Text from '../basic/Text';
import Transition from '../utilities/Transition';
import { KeyboardPreset, useKeyboard } from '../../hooks/useKeyboard';
import { useCombinedRefs } from '../../hooks/useCombinedRefs';

const modalMinWidth = {
	extrasmall: '20%',
	small: '25%',
	medium: '35%',
	large: '50%'
};
const modalWidth = {
	extrasmall: '400px',
	small: '500px',
	medium: '650px',
	large: '800px'
};

function isBodyOverflowing(modalRef: React.RefObject<HTMLDivElement>): boolean {
	if (window.top) {
		return (
			window.top.document.body.scrollHeight > (modalRef.current as HTMLDivElement).clientHeight ||
			window.top.document.body.scrollWidth > window.top.document.body.clientWidth
		);
	}
	return false;
}

function getScrollbarSize(): number {
	const scrollDiv = window.top?.document.createElement('div');
	if (scrollDiv && window.top) {
		scrollDiv.style.width = '99px';
		scrollDiv.style.height = '99px';
		scrollDiv.style.position = 'absolute';
		scrollDiv.style.top = '-9999px';
		scrollDiv.style.overflow = 'scroll';
		window.top.document.body.appendChild(scrollDiv);
		const scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
		window.top.document.body.removeChild(scrollDiv);
		return scrollbarSize;
	}
	return 0;
}
function copyToClipboard(node: HTMLDivElement | null): void {
	const el = window.top?.document.createElement('textarea');
	if (el && node?.textContent) {
		el.value = node.textContent;
		window.top?.document.body.appendChild(el);
		el.select();
		window.top?.document.execCommand('copy');
		window.top?.document.body.removeChild(el);
	}
}

const ModalContainer = styled.div<{ mounted: boolean; open: boolean; zIndex: number }>`
	display: flex;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding: ${(props): string =>
		`${props.theme.sizes.padding.medium} ${props.theme.sizes.padding.medium} 0`};
	background-color: rgba(0, 0, 0, 0);
	opacity: 0;
	pointer-events: none;
	transition: 0.3s ease-out;
	z-index: -1;
	justify-content: center;
	align-items: center;

	${({ mounted, open, zIndex }): SimpleInterpolation =>
		(mounted || open) &&
		css`
			z-index: ${zIndex};
		`};
	${({ open }): SimpleInterpolation =>
		open &&
		css`
			background-color: rgba(0, 0, 0, 0.5);
			opacity: 1;
			pointer-events: auto;
		`};
`;
const ModalWrapper = styled.div`
	max-width: 100%;
	width: 100%;
	margin: auto;
	box-sizing: border-box;
	pointer-events: none;
`;

const ModalContent = styled(Container)<{
	size: 'extrasmall' | 'small' | 'medium' | 'large';
}>`
	position: relative;
	margin: 0 auto ${(props): string => props.theme.sizes.padding.medium};
	padding: 32px;
	max-width: 100%;
	min-width: ${({ size }): string =>
		modalMinWidth[size as 'extrasmall' | 'small' | 'medium' | 'large']};
	width: ${({ size }): string => modalWidth[size as 'extrasmall' | 'small' | 'medium' | 'large']};

	background-color: ${(props): string => props.theme.palette[props.background].regular};
	border-radius: 16px;
	box-shadow: 0px 0px 4px 0px rgba(166, 166, 166, 0.5);
	outline: none;
	pointer-events: auto;
`;
const ModalTitle = styled(Text)<{ centered: boolean }>`
	box-sizing: border-box;
	width: 100%;
	flex-grow: 1;
	flex-basis: 0;
	line-height: 1.5;
	padding: ${(props): string =>
		`${props.theme.sizes.padding.small} ${props.theme.sizes.padding.small} ${props.theme.sizes.padding.small} 0`};
	${({ centered }): SimpleInterpolation =>
		centered &&
		css`
			text-align: center;
		`};
`;
const ModalBody = styled.div<{ maxHeight: string; centered: boolean }>`
	overflow-y: auto;
	max-height: ${(props): string => props.maxHeight};
	max-width: 100%;
	box-sizing: border-box;
	width: 100%;
	padding-top: ${(props): string => props.theme.sizes.padding.large};
	padding-bottom: ${(props): string => props.theme.sizes.padding.large};
	${(props): SimpleInterpolation =>
		props.centered &&
		css`
			text-align: center;
		`};
`;
const OptionalFooterContainer = styled(Container)`
	min-width: 1px;
	flex-basis: auto;
	flex-grow: 1;
`;
const ButtonContainer = styled(Container)`
	min-width: 1px;
	flex-basis: auto;
	flex-grow: 1;
`;
const DismissButton = styled(Button)`
	margin-right: ${(props): string => props.theme.sizes.padding.large};
	flex-basis: auto;
	min-width: 100px;
	flex-shrink: 1;
`;
const ConfirmButton = styled(Button)`
	flex-basis: auto;
	min-width: 100px;
	flex-shrink: 1;
`;
// TODO use the right IconButton when available
const ModalCloseIcon = styled(IconButton)`
	padding: 5px;
`;

interface ModalProps {
	/** Modal background */
	background?: Container.propTypes.background;
	/** Modal type */
	type?: 'default' | 'error';
	/** Modal title */
	title?: string | React.ReactElement;
	/** Modal size */
	size?: 'extrasmall' | 'small' | 'medium' | 'large';
	/** Boolean to show the modal */
	open?: boolean;
	/** Centered Modal */
	centered?: boolean;
	/** Callback for main action */
	onConfirm?: (event: React.MouseEvent<HTMLDivElement>) => void;
	/** Label for the Main action Button */
	confirmLabel?: string;
	/** BackgroundColor for the Main action Button */
	confirmColor?: Button.propTypes.color;
	/** Callback for secondary action */
	onSecondaryAction?: (event: React.MouseEvent<HTMLDivElement>) => void;
	/** Label for the Secondary action Button */
	secondaryActionLabel?: string;
	/** Callback to close the Modal */
	onClose?: React.ReactEventHandler;
	/** Label for the Modal close Button */
	dismissLabel?: string;
	/** Label for copy button in the Error Modal */
	copyLabel?: string;
	/** Optional element to show in the footer of the Modal */
	optionalFooter?: React.ReactElement;
	/** Prop to override the default footer buttons */
	customFooter?: React.ReactElement;
	/** Hide the footer completely */
	hideFooter?: boolean;
	/** Show icon to close Modal */
	showCloseIcon?: boolean;
	/** Css property to handle the stack order of multiple modals */
	zIndex?: number;
	/** max height of the modal body */
	maxHeight?: string;
	/** Flag to disable the Portal implementation */
	disablePortal?: boolean;
}

const ModalFooter: React.VFC<
	Pick<
		ModalProps,
		| 'type'
		| 'centered'
		| 'onConfirm'
		| 'confirmLabel'
		| 'confirmColor'
		| 'onSecondaryAction'
		| 'secondaryActionLabel'
		| 'onClose'
		| 'dismissLabel'
		| 'copyLabel'
		| 'optionalFooter'
	> & { onCopyClipboard: () => void }
> = ({
	type,
	centered,
	onConfirm,
	confirmLabel,
	confirmColor,
	onSecondaryAction,
	secondaryActionLabel,
	onClose,
	dismissLabel,
	copyLabel,
	optionalFooter,
	onCopyClipboard
}) => {
	const secondaryButton = useMemo(() => {
		let button;
		if (type === 'error') {
			button = <DismissButton onClick={onCopyClipboard} color="secondary" label={copyLabel} />;
		} else {
			button =
				onSecondaryAction && secondaryActionLabel ? (
					<DismissButton
						color="primary"
						type="outlined"
						onClick={onSecondaryAction}
						label={secondaryActionLabel}
					/>
				) : dismissLabel ? (
					<DismissButton color="secondary" onClick={onClose} label={dismissLabel} />
				) : undefined;
		}
		return button;
	}, [
		type,
		onCopyClipboard,
		copyLabel,
		onSecondaryAction,
		secondaryActionLabel,
		dismissLabel,
		onClose
	]);

	return (
		<>
			{optionalFooter && (
				<OptionalFooterContainer
					padding={centered ? { bottom: 'large' } : { right: 'large' }}
					orientation="horizontal"
					mainAlignment="flex-start"
				>
					{optionalFooter}
				</OptionalFooterContainer>
			)}
			<ButtonContainer orientation="horizontal" mainAlignment={centered ? 'center' : 'flex-end'}>
				{secondaryButton}
				<ConfirmButton color={confirmColor} onClick={onConfirm || onClose} label={confirmLabel} />
			</ButtonContainer>
		</>
	);
};

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function ModalFn(
	{
		background = 'gray6',
		type = 'default',
		title: Title,
		size = 'small',
		open = false,
		centered = false,
		onConfirm,
		confirmLabel = 'OK',
		confirmColor = 'primary',
		onSecondaryAction,
		secondaryActionLabel,
		onClose = noop,
		dismissLabel,
		copyLabel = 'Copy',
		optionalFooter,
		customFooter,
		hideFooter = false,
		showCloseIcon = true,
		maxHeight = '60vh',
		children,
		disablePortal = false,
		zIndex = 999,
		...rest
	},
	ref
) {
	const [delayedOpen, setDelayedOpen] = useState(false);

	const innerRef = useRef<HTMLDivElement | null>(null);
	const modalRef = useCombinedRefs<HTMLDivElement>(ref, innerRef);
	const modalContentRef = useRef<HTMLDivElement>(null);
	const modalBodyRef = useRef<HTMLDivElement | null>(null);
	const startSentinelRef = useRef<HTMLDivElement | null>(null);
	const endSentinelRef = useRef<HTMLDivElement | null>(null);

	const onBackdropClick = useCallback(
		(e) => {
			if (e) {
				e.stopPropagation();
			}
			modalContentRef.current &&
				!e.isDefaultPrevented() &&
				!modalContentRef.current.contains(e.target) &&
				onClose &&
				onClose(e);
		},
		[onClose]
	);
	const onCopyClipboard = useCallback(() => copyToClipboard(modalBodyRef.current), []);

	const onStartSentinelFocus = useCallback(() => {
		if (modalContentRef.current) {
			const nodeList = modalContentRef.current.querySelectorAll<HTMLElement>('[tabindex]');
			nodeList[nodeList.length - 1].focus();
		}
	}, []);
	const onEndSentinelFocus = useCallback(() => {
		if (modalContentRef.current != null) {
			modalContentRef.current.querySelector<HTMLElement>('[tabindex]')?.focus();
		}
	}, []);

	const escapeEvent = useMemo<KeyboardPreset>(
		() => [{ type: 'keydown', callback: onClose || noop, keys: ['Escape'], modifier: false }],
		[onClose]
	);
	useKeyboard(modalRef, escapeEvent);

	useEffect(() => {
		if (open && window.top) {
			const defaultOverflowY = window.top.document.body.style.overflowY;
			const defaultPaddingRight = window.top.document.body.style.paddingRight;

			window.top.document.body.style.overflowY = 'hidden';
			modalRef.current != null &&
				isBodyOverflowing(modalRef) &&
				(window.top.document.body.style.paddingRight = `${getScrollbarSize()}px`);

			return (): void => {
				if (window.top) {
					window.top.document.body.style.overflowY = defaultOverflowY;
					window.top.document.body.style.paddingRight = defaultPaddingRight;
				}
			};
		}
		return (): void => undefined;
	}, [modalRef, open]);

	useEffect(() => {
		const focusedElement = window.top?.document.activeElement;

		if (open) {
			modalContentRef.current?.focus();
			startSentinelRef.current?.addEventListener('focus', onStartSentinelFocus);
			endSentinelRef.current?.addEventListener('focus', onEndSentinelFocus);
		}
		const startSentinelRefSave = startSentinelRef.current;
		const endSentinelRefSave = endSentinelRef.current;
		return (): void => {
			startSentinelRefSave &&
				startSentinelRefSave.removeEventListener('focus', onStartSentinelFocus);
			endSentinelRefSave && endSentinelRefSave.removeEventListener('focus', onEndSentinelFocus);
			open && (focusedElement as HTMLElement)?.focus();
		};
	}, [open, onStartSentinelFocus, onEndSentinelFocus]);

	useEffect(() => {
		setTimeout(() => setDelayedOpen(open), 1);
	}, [open]);

	return (
		<Portal show={open} disablePortal={disablePortal}>
			<ModalContainer
				ref={modalRef}
				open={delayedOpen}
				mounted={open}
				onClick={onBackdropClick}
				zIndex={zIndex}
				{...rest}
			>
				<div tabIndex={0} ref={startSentinelRef} />
				<Transition type="scale-in" apply={delayedOpen}>
					<ModalWrapper>
						<ModalContent
							ref={modalContentRef}
							background={background}
							tabIndex={-1}
							size={size}
							crossAlignment="flex-start"
							height="auto"
						>
							<Row width="100%" padding={{ bottom: 'small' }}>
								<ModalTitle
									centered={centered}
									color={type === 'error' ? 'error' : undefined}
									size="medium"
									weight="bold"
								>
									{Title}
								</ModalTitle>
								{showCloseIcon && <ModalCloseIcon icon="Close" size="small" onClick={onClose} />}
							</Row>
							<Divider />
							<ModalBody centered={centered} ref={modalBodyRef} maxHeight={maxHeight}>
								{children}
							</ModalBody>
							{!hideFooter && (
								<>
									<Divider />
									<Container
										orientation={centered ? 'vertical' : 'horizontal'}
										mainAlignment="flex-end"
										padding={{ top: 'large' }}
									>
										{customFooter || (
											<ModalFooter
												type={type}
												centered={centered}
												optionalFooter={optionalFooter}
												confirmLabel={confirmLabel}
												confirmColor={confirmColor}
												dismissLabel={dismissLabel}
												onConfirm={onConfirm}
												onClose={onClose}
												onSecondaryAction={onSecondaryAction}
												secondaryActionLabel={secondaryActionLabel}
												onCopyClipboard={onCopyClipboard}
												copyLabel={copyLabel}
											/>
										)}
									</Container>
								</>
							)}
						</ModalContent>
					</ModalWrapper>
				</Transition>
				<div tabIndex={0} ref={endSentinelRef} />
			</ModalContainer>
		</Portal>
	);
});

export { Modal, isBodyOverflowing, getScrollbarSize, ModalContainer, ModalWrapper, ModalContent };
