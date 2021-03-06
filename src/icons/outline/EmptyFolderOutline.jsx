/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as React from 'react';

function SvgEmptyFolderOutline(props) {
	return (
		<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M12.694 11.867l-.706.706-.706-.706a1.004 1.004 0 00-1.413 0 1.004 1.004 0 000 1.413l.706.706-.706.707a1.004 1.004 0 000 1.413 1.004 1.004 0 001.413 0l.706-.707.706.707a1.004 1.004 0 001.413 0 1.004 1.004 0 000-1.413l-.706-.707.706-.706a1.004 1.004 0 000-1.413 1.004 1.004 0 00-1.413 0z" />
			<path d="M19.481 7.043h-6.993L9.86 3.866a1 1 0 00-.769-.37H4.496a2.48 2.48 0 00-2.498 2.428v12.128a2.48 2.48 0 002.498 2.428H19.48a2.48 2.48 0 002.497-2.428V9.471a2.48 2.48 0 00-2.497-2.428zm.5 10.99a.462.462 0 01-.5.429H4.496a.462.462 0 01-.5-.43V5.924a.461.461 0 01.5-.43h4.126l2.597 3.178a1 1 0 00.77.37h7.492a.461.461 0 01.5.43v8.56z" />
		</svg>
	);
}

export default SvgEmptyFolderOutline;
