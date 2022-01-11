/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as React from 'react';

function SvgDayViewOutline(props) {
	return (
		<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M14.561 21.979H5.994a3.011 3.011 0 01-2.997-2.997V6.992a3.011 3.011 0 012.997-2.997h1v-.999A1.004 1.004 0 018.043 2a.985.985 0 01.645.285c.19.186.302.446.302.713v1h5.994v-1c0-.548.451-.999 1-.999.547 0 .998.451.998 1v.998h1a3.011 3.011 0 012.997 2.997l.015 7.992a.998.998 0 01-.26.67l-5.434 5.994a1 1 0 01-.74.33zm-1.558-1.998v-3.147a2.8 2.8 0 012.707-2.848h3.271V6.993c0-.548-.45-.999-.999-.999h-.999v1c0 .547-.45.998-.999.998-.548 0-.999-.45-.999-.999v-.999H8.991v1c0 .547-.45.998-.999.998-.548 0-.999-.45-.999-.999v-.999h-.999c-.548 0-.999.451-.999 1v11.988c0 .112.02.224.057.33.102.286.336.517.623.616.103.035.21.052.32.052h7.008zm1.998-1l2.737-2.997H15.74a.792.792 0 00-.739.85v2.148z" />
		</svg>
	);
}

export default SvgDayViewOutline;
