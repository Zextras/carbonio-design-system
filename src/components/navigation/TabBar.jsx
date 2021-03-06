/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Text from '../basic/Text';
import Row from '../layout/Row';
import { useKeyboard, getKeyboardPreset } from '../../hooks/useKeyboard';
import { useCombinedRefs } from '../../hooks/useCombinedRefs';
import { Theme } from '../../theme/theme';

const DefaultTabBarItemContainer = styled(Container)`
	outline: none;
	width: 100%;
	height: 100%;
	transition: 0.2s ease-out;
	border-bottom: ${({ theme, selected, underlineColor }) =>
		selected
			? `2px solid ${theme.palette[underlineColor || 'primary'].regular}`
			: '2px solid transparent'};
	cursor: pointer;
	user-select: none;

	&:hover {
		background: ${({ theme, background, disabled }) =>
			background
				? theme.palette[background][disabled ? 'disabled' : 'hover']
				: theme.palette.transparent[disabled ? 'regular' : 'hover']};
	}
	&:focus {
		background: ${({ theme, background, disabled }) =>
			background
				? theme.palette[background][disabled ? 'disabled' : 'focus']
				: theme.palette.transparent[disabled ? 'regular' : 'focus']};
	}
`;

const DefaultTabBarItem = React.forwardRef(function DefaultTabBarItemFn(
	{ item, selected, background, onClick, underlineColor, children, ...rest },
	ref
) {
	const activationCb = useCallback(
		(ev) => {
			if (!item.disabled) onClick(ev);
		},
		[item.disabled, onClick]
	);

	const innerRef = useRef();
	const combinedRef = useCombinedRefs(ref, innerRef);

	const keyEvents = useMemo(() => getKeyboardPreset('button', activationCb), [activationCb]);
	useKeyboard(combinedRef, keyEvents);

	return (
		<DefaultTabBarItemContainer
			onClick={activationCb}
			selected={selected}
			background={background}
			borderRadius="none"
			disabled={item.disabled}
			underlineColor={underlineColor}
			ref={combinedRef}
			{...rest}
		>
			{children || (
				<Row takeAvailableSpace>
					<Text
						overflow="ellipsis"
						size="large"
						color={selected ? 'text' : 'secondary'}
						disabled={item.disabled}
					>
						{item.label}
					</Text>
				</Row>
			)}
		</DefaultTabBarItemContainer>
	);
});

const TabBar = React.forwardRef(function TabBarFn(
	{ items, selected, defaultSelected, onChange, onItemClick, background, underlineColor, ...rest },
	ref
) {
	const [currentSelection, setCurrentSelection] = useState(defaultSelected);
	useEffect(() => {
		if (typeof selected !== 'undefined') {
			setCurrentSelection(selected);
			onChange(selected);
		}
	}, [selected, onChange]);
	const onItemClickCb = useCallback(
		(id) => (ev) => {
			setCurrentSelection(id);
			onChange(id);
			onItemClick({ ...ev, selectedItemId: id });
		},
		[onChange, onItemClick]
	);
	return (
		<Container
			ref={ref}
			orientation="horizontal"
			background={background}
			mainAlignment="flex-start"
			{...rest}
		>
			{map(items, (item, index) =>
				item.CustomComponent ? (
					<item.CustomComponent
						key={item.id}
						item={item}
						index={index}
						selected={item.id === currentSelection}
						onClick={onItemClickCb(item.id)}
						tabIndex={item.disabled ? null : 0}
						background={background}
						underlineColor={underlineColor}
					/>
				) : (
					<DefaultTabBarItem
						key={item.id}
						item={item}
						index={index}
						selected={item.id === currentSelection}
						background={background}
						onClick={onItemClickCb(item.id)}
						tabIndex={item.disabled ? null : 0}
						underlineColor={underlineColor}
					/>
				)
			)}
		</Container>
	);
});

TabBar.propTypes = {
	/** List of elements, can have extra attributes to pass down to the CustomComponent */
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]).isRequired,
			CustomComponent: PropTypes.elementType,
			disabled: PropTypes.bool
		})
	).isRequired,
	/** id of the selected item */
	selected: PropTypes.string,
	/** id of the default selected item */
	defaultSelected: PropTypes.string,
	/** change callback, is called with the new selected id */
	onChange: PropTypes.func,
	/** click (or also keyboard in the default component) event,
	 * the selectedItemId field is added to the event object */
	onItemClick: PropTypes.func,
	/** background color of the tabBar */
	background: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(Object.keys(Theme.palette))]),
	/** underline color of the selected tab */
	underlineColor: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.oneOf(Object.keys(Theme.palette))
	])
};

TabBar.defaultProps = {
	underlineColor: 'primary',
	selected: undefined,
	defaultSelected: undefined,
	onChange: undefined,
	onItemClick: undefined,
	background: undefined
};

export { TabBar, DefaultTabBarItem };
