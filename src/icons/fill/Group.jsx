/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as React from 'react';

function SvgGroup(props) {
	return (
		<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M11.992 22c-5.486 0-10-4.513-10-9.999 0-5.486 4.514-10 10-10s10 4.514 10 10-4.514 10-10 10zm4.842-5.687a.54.54 0 00.538-.538 2.703 2.703 0 00-2.69-2.688c-.596 0-1.175.198-1.646.563a3.767 3.767 0 00-2.658-1.098 3.784 3.784 0 00-3.766 3.76.54.54 0 00.538.539h6.456a.54.54 0 00.538-.538h2.69zm-2.152-3.766c.886 0 1.614-.729 1.614-1.614 0-.886-.728-1.614-1.614-1.614-.885 0-1.614.728-1.614 1.614 0 .885.729 1.614 1.614 1.614zm-4.304-1.076c1.18 0 2.152-.972 2.152-2.152 0-1.18-.971-2.152-2.152-2.152-1.18 0-2.152.971-2.152 2.152 0 1.18.972 2.152 2.152 2.152z" />
		</svg>
	);
}

export default SvgGroup;
