/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as React from 'react';

function SvgInstance(props) {
	return (
		<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M14.988 3.996v-.999c0-.548.451-.999 1-.999.547 0 .998.451.998 1v.998h1a3.011 3.011 0 012.996 2.997v11.989a3.011 3.011 0 01-2.997 2.997H5.997A3.011 3.011 0 013 18.982V6.992a3.011 3.011 0 012.997-2.997h1v-.999A1.004 1.004 0 018.046 2a.985.985 0 01.645.285c.19.186.302.446.302.713v1h5.994z" />
		</svg>
	);
}

export default SvgInstance;
