/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as React from 'react';

function SvgRugby(props) {
	return (
		<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.179 14.052l6.746 6.746c-.715.12-1.45.182-2.198.182-1.426 0-3.548 0-4.087-.644-.643-.768-.643-2.66-.643-4.086 0-.75.062-1.484.182-2.198zm8.65-10.298l8.394 8.394a13.301 13.301 0 01-8.087 8.08L3.749 11.84a13.302 13.302 0 018.08-8.087zm1.552 5.448l.67-.669a.986.986 0 011.393 1.393l-.67.67.512.511a.986.986 0 01-1.393 1.394l-.512-.512-1.364 1.364.512.512a.986.986 0 01-1.394 1.394l-.512-.512-.697.697a.986.986 0 01-1.393-1.394l.697-.697-.512-.512a.986.986 0 011.393-1.393l.512.512 1.365-1.364-.512-.512a.986.986 0 011.393-1.394l.512.512zm.656-6.02c.72-.122 1.46-.185 2.213-.185 1.425 0 3.504.098 4.086.643.65.608.644 2.661.644 4.087 0 .753-.064 1.492-.185 2.212l-6.758-6.758z"
			/>
		</svg>
	);
}

export default SvgRugby;
