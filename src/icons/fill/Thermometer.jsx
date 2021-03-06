/*
 * SPDX-FileCopyrightText: 2021 2018 Akveo
 *
 * SPDX-License-Identifier: MIT
 */

import * as React from 'react';

function SvgThermometer(props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
			<g data-name="Layer 2">
				<path
					d="M12 22a5 5 0 01-3-9V5a3 3 0 013-3 3 3 0 013 3v8a5 5 0 01-3 9zm1-12.46V5a.93.93 0 00-.29-.69A1 1 0 0012 4a1 1 0 00-1 1v4.54z"
					data-name="thermometer"
				/>
			</g>
		</svg>
	);
}

export default SvgThermometer;
