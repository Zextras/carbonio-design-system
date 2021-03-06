/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useLayoutEffect, useEffect, useRef, useCallback, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { createPopper } from '@popperjs/core';
import Portal from '../utilities/Portal';
import { useCombinedRefs } from '../../hooks/useCombinedRefs';
import { useKeyboard } from '../../hooks/useKeyboard';
import { ThemeContext } from '../../theme/theme-context-provider';

function getAnchorEl(anchorEl) {
	return typeof anchorEl === 'function' ? anchorEl() : anchorEl.current;
}
const PopperContainer = styled.div`
	display: none;
	${({ open }) =>
		open &&
		css`
			display: block;
			z-index: 99;
		`};
`;
const PopperWrapper = styled.div`
	outline: 0;
`;

const Popper = React.forwardRef(function PopperFn(
	{
		open,
		anchorEl,
		virtualElement,
		disableRestoreFocus,
		placement,
		onClose,
		children,
		disablePortal,
		...rest
	},
	ref
) {
	const { windowObj } = useContext(ThemeContext);
	const innerRef = useRef(undefined);
	const popperRef = useCombinedRefs(ref, innerRef);
	const wrapperRef = useRef(undefined);

	const startSentinelRef = useRef(undefined);
	const endSentinelRef = useRef(undefined);

	const closePopper = useCallback(
		(e) => !(popperRef.current && popperRef.current.contains(e.target)) && onClose && onClose(),
		[onClose, popperRef]
	);
	const keyboardClosePopper = useCallback(() => {
		!disableRestoreFocus && getAnchorEl(anchorEl).focus();
		onClose && onClose();
	}, [anchorEl, disableRestoreFocus, onClose]);

	const onStartSentinelFocus = useCallback(() => {
		const nodeList = wrapperRef.current
			? wrapperRef.current.querySelectorAll(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			  )
			: [];
		nodeList.length > 0 && nodeList[nodeList.length - 1].focus();
	}, []);
	const onEndSentinelFocus = useCallback(() => {
		const node = wrapperRef.current
			? wrapperRef.current.querySelector(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			  )
			: [];
		node && node.focus();
	}, []);

	const escapeEvent = useMemo(
		() => [{ type: 'keydown', callback: keyboardClosePopper, keys: ['Escape'] }],
		[keyboardClosePopper]
	);
	useKeyboard(popperRef, escapeEvent);

	useLayoutEffect(() => {
		if (open) {
			const popperOptions = {
				placement,
				modifiers: [
					{
						name: 'offset',
						options: {
							offset: [0, 8]
						}
					}
				]
			};

			const _anchorEl = getAnchorEl(anchorEl);
			if (_anchorEl) {
				let _virtualElement;
				if (virtualElement) {
					_virtualElement = {
						getBoundingClientRect: () => ({
							width: 0,
							height: 0,
							top: virtualElement.y,
							right: virtualElement.x,
							bottom: virtualElement.y,
							left: virtualElement.x
						})
					};
				} else {
					popperOptions.modifiers.push({
						name: 'flip',
						options: {
							fallbackPlacements: ['bottom']
						}
					});
				}
				const popperInstance = createPopper(
					_virtualElement || _anchorEl,
					popperRef.current,
					popperOptions
				);
				return () => popperInstance.destroy();
			}
		}
		return () => undefined;
	}, [open, placement, anchorEl, virtualElement, popperRef]);

	useEffect(() => {
		if (open) {
			setTimeout(() => windowObj.document.addEventListener('click', closePopper), 1);
			return () => windowObj.document.removeEventListener('click', closePopper);
		}
		return () => undefined;
	}, [open, closePopper, windowObj.document]);

	useEffect(() => {
		if (open) {
			wrapperRef.current && wrapperRef.current.focus();
			startSentinelRef.current &&
				startSentinelRef.current.addEventListener('focus', onStartSentinelFocus);
			endSentinelRef.current &&
				endSentinelRef.current.addEventListener('focus', onEndSentinelFocus);
			const startSentinelRefSave = startSentinelRef.current;
			const endSentinelRefSave = endSentinelRef.current;

			return () => {
				startSentinelRefSave &&
					startSentinelRefSave.removeEventListener('focus', onStartSentinelFocus);
				endSentinelRefSave && endSentinelRefSave.removeEventListener('focus', onEndSentinelFocus);
			};
		}
		return () => undefined;
	}, [open, startSentinelRef, endSentinelRef, onStartSentinelFocus, onEndSentinelFocus]);

	return (
		<Portal show={open} disablePortal={disablePortal}>
			<PopperContainer ref={popperRef} open={open} data-testid="popper" {...rest}>
				<div tabIndex={0} ref={startSentinelRef} />
				<PopperWrapper ref={wrapperRef} tabIndex={-1}>
					{children}
				</PopperWrapper>
				<div tabIndex={0} ref={endSentinelRef} />
			</PopperContainer>
		</Portal>
	);
});

Popper.propTypes = {
	/** Whether the popper is open or not */
	open: PropTypes.bool,
	/** Ref to the DOM element triggering the popper */
	anchorEl: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.Element })])
		.isRequired,
	/** Optional parameter to anchor the popper to a virtual element, defined by his x, y coordinates (ex. {x: 2, y: 2}) */
	virtualElement: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
	/** Whether or not to disable the re-focus of Popper trigger */
	disableRestoreFocus: PropTypes.bool,
	/** Popper placement relative to the anchorEl */
	placement: PropTypes.oneOf([
		'auto',
		'auto-start',
		'auto-end',
		'top',
		'top-start',
		'top-end',
		'bottom',
		'bottom-start',
		'bottom-end',
		'right',
		'right-start',
		'right-end',
		'left',
		'left-start',
		'left-end'
	]),
	/** Callback for closed Popper */
	onClose: PropTypes.func.isRequired,
	/** Flag to disable the Portal implementation */
	disablePortal: PropTypes.bool
};

Popper.defaultProps = {
	open: false,
	disableRestoreFocus: false,
	placement: 'bottom-end',
	disablePortal: false,
	virtualElement: undefined
};

export default Popper;
