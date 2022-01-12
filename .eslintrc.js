/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
module.exports = {
	extends: ['./node_modules/@zextras/carbonio-ui-configs/rules/eslint.js'],
	rules: {
		'no-nested-ternary': 'warn',
		'@typescript-eslint/explicit-module-boundary-types': 'off'
	}
};
