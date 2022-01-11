/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as React from 'react';

function SvgSearchFolder(props) {
	return (
		<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.492 20.5h-15c-1.4 0-2.5-1.099-2.5-2.4V5.902c0-1.4 1.1-2.4 2.5-2.4h4.6c.3 0 .6.1.8.4l2.6 3.2h7c1.4 0 2.5 1 2.5 2.4v8.6c0 1.3-1.1 2.4-2.5 2.4zm-6.676-4.725a3.001 3.001 0 01-4.317-2.696c0-1.656 1.344-3 3-3a3.001 3.001 0 012.706 4.296l.992.991a.987.987 0 01-1.395 1.395l-.986-.986zm-1.317-3.69a.995.995 0 11-.001 1.99.995.995 0 01.001-1.99z"
			/>
		</svg>
	);
}

export default SvgSearchFolder;
