/*
 * SPDX-FileCopyrightText: 2021 2018 Akveo
 *
 * SPDX-License-Identifier: MIT
 */

import * as React from 'react';

function SvgQuestionMark(props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
			<g data-name="Layer 2">
				<g data-name="menu-arrow">
					<path d="M17 9A5 5 0 007 9a1 1 0 002 0 3 3 0 113 3 1 1 0 00-1 1v2a1 1 0 002 0v-1.1A5 5 0 0017 9z" />
					<circle cx={12} cy={19} r={1} />
				</g>
			</g>
		</svg>
	);
}

export default SvgQuestionMark;
