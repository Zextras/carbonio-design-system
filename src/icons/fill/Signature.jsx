/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as React from 'react';

function SvgSignature(props) {
	return (
		<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.975 14.11l-2.58 1.732a4.006 4.006 0 00-5.078 2.891h-.003l-.308 1.561a.984.984 0 01-1.93-.38l1.692-8.592.013-.054.032-.175c1.064-5.402 6.313-8.923 11.715-7.86a9.944 9.944 0 016.354 4.23l-5.006 3.359-.009-.014-1.402-2.09-.012-.018-.938-1.398a.984.984 0 00-1.634 1.096l1.402 2.09.013.018.938 1.398.01.014-1.67 1.119a.984.984 0 00-.093-.176l-.869-1.173a1.023 1.023 0 00-.034-.055L10.614 8.98a.984.984 0 00-1.634 1.096l.869 1.172c.01.02.022.038.035.056l1.964 2.652c.037.056.08.108.127.153zM21.963 20.09a.984.984 0 00-.983-.984H6.93a.984.984 0 000 1.967h14.05c.542 0 .983-.44.983-.983z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.98 19.106a.984.984 0 010 1.967H6.93a.984.984 0 010-1.967h14.05z"
			/>
		</svg>
	);
}

export default SvgSignature;
