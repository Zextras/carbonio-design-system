/*
 * SPDX-FileCopyrightText: 2021 2018 Akveo
 *
 * SPDX-License-Identifier: MIT
 */

import * as React from 'react';

function SvgImageOutline(props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
			<g data-name="Layer 2">
				<g data-name="image">
					<path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zM6 5h12a1 1 0 011 1v8.36l-3.2-2.73a2.77 2.77 0 00-3.52 0L5 17.7V6a1 1 0 011-1zm12 14H6.56l7-5.84a.78.78 0 01.93 0L19 17v1a1 1 0 01-1 1z" />
					<circle cx={8} cy={8.5} r={1.5} />
				</g>
			</g>
		</svg>
	);
}

export default SvgImageOutline;
