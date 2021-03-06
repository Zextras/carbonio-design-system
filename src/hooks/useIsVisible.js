/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { some } from 'lodash';
import { useState, useEffect, useRef, useMemo } from 'react';

export const useIsVisible = (listRef) => {
	const [vis, setVis] = useState(false);
	const ref = useRef();

	const observer = useMemo(
		() =>
			new IntersectionObserver(
				(entries) => {
					setVis(some(entries, (entry) => entry.isIntersecting));
				},
				{
					root: listRef.current
				}
			),
		[listRef]
	);
	useEffect(() => {
		const curr = ref.current;
		if (curr) {
			observer.observe(curr);
		}
		return () => {
			if (curr) {
				observer.unobserve(curr);
			}
		};
	}, [observer]);
	return [vis, ref];
};
