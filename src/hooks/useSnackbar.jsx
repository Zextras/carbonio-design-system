/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { useContext } from 'react';
import { SnackbarManagerContext } from '../components/utilities/SnackbarManager';

export function useSnackbar() {
	return useContext(SnackbarManagerContext);
}
