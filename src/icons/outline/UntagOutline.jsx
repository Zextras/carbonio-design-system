/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as React from 'react';

function SvgUntagOutline(props) {
	return (
		<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M16.467 8.492a.983.983 0 100-1.966.983.983 0 000 1.966zM4.706 3.287a1.003 1.003 0 10-1.419 1.418L19.271 20.69a.999.999 0 001.419 0 1 1 0 000-1.419L4.706 3.287z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.067 9.889l1.391 1.39-3.184 3.185 4.238 4.238 3.184-3.184 1.391 1.391-3.35 3.35a1.733 1.733 0 01-2.45 0l-4.57-4.57a1.733 1.733 0 010-2.45l3.35-3.35zm2.83-2.83l3.325-3.324a1.725 1.725 0 011.18-.507 1.26 1.26 0 01.211-.018h4.898c.692 0 1.255.563 1.255 1.255v4.898c0 .072-.006.143-.018.212-.011.428-.18.853-.506 1.18l-3.324 3.323-1.391-1.39 3.26-3.261.004-.043.008-.064V5.177h-4.143l-.064.009-.043.002-3.26 3.261-1.391-1.39z"
			/>
		</svg>
	);
}

export default SvgUntagOutline;
