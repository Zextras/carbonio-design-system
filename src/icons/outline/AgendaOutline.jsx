/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as React from 'react';

function SvgAgendaOutline(props) {
	return (
		<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M18.982 2.997a3.011 3.011 0 012.997 2.997v11.988a3.011 3.011 0 01-2.997 2.997H6.992a3.011 3.011 0 01-2.997-2.997v-.999h-.999c-.548 0-.999-.45-.999-.999 0-.548.451-.999 1-.999h.998V8.991h-.999c-.548 0-.999-.45-.999-.999 0-.548.451-.999 1-.999h.998v-.999a3.011 3.011 0 012.997-2.997h11.989zm0 1.998H6.992c-.548 0-.999.45-.999.999v1h1c.547 0 .998.45.998.998s-.45 1-.999 1h-.999v5.993h1c.547 0 .998.451.998 1 0 .547-.45.998-.999.998h-.999v1c0 .547.451.998 1 .998h11.988c.548 0 .998-.45.998-.999V5.994c0-.548-.45-.999-.998-.999z" />
			<path d="M16.23 8.382l-3.776 4.995-1.628-2.108a1.001 1.001 0 00-.79-.386c-.548 0-1 .452-1 1a1 1 0 00.211.615l2.428 3.107a1 1 0 001.578-.01L17.82 9.6a1.006 1.006 0 00-1.599-1.22h.01z" />
		</svg>
	);
}

export default SvgAgendaOutline;
