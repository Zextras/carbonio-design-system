/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as React from 'react';

function SvgOptionalInvitee(props) {
	return (
		<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M9.99 10.99c2.192 0 3.996-1.805 3.996-3.997S12.182 2.997 9.99 2.997 5.994 4.801 5.994 6.993 7.798 10.99 9.99 10.99zM15.984 20.98c.548 0 1-.451 1-1 0-3.836-3.158-6.993-6.994-6.993s-6.993 3.157-6.993 6.993c0 .549.451 1 1 1M18.981 5.994a1 1 0 100-1.998 1 1 0 000 1.998zM18.981 6.993c-.548 0-.999.451-.999 1v4.994c0 .548.451 1 1 1 .547 0 .998-.452.998-1V7.992c0-.548-.45-.999-.999-.999z" />
		</svg>
	);
}

export default SvgOptionalInvitee;
