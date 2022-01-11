/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as React from 'react';

function SvgFilePdf(props) {
	return (
		<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.72 7.323c.167.183.26.422.26.67V19.48a2.54 2.54 0 01-2.527 2.498H6.523a2.54 2.54 0 01-2.527-2.498V4.496a2.54 2.54 0 012.528-2.498h8.022a1 1 0 01.74.33l4.435 4.995zm-8.686 6.68c-.283-.514-.455-1.022-.455-1.456 0-.606.147-1.026.4-1.24a.98.98 0 01.658-.224c.311 0 .52.104.672.25.138.133.239.318.284.566.03.17.035.39.035.648 0 .15-.12.646-.322 1.295l.083.121c.305.44.663.864.978 1.211a5.49 5.49 0 011.124-.009c.916.107 1.448.563 1.448 1.301 0 .379-.145.625-.335.788-.239.204-.613.288-1.037.199a2.915 2.915 0 01-1.316-.708 22.964 22.964 0 01-.336-.342c-.625.095-1.261.247-1.757.385-.115.233-.232.455-.352.66-.274.469-.562.848-.835 1.08-.282.24-.57.348-.834.348-.533 0-.806-.216-.94-.43-.151-.24-.184-.575-.007-.95.267-.566 1.134-1.332 1.831-1.581a7.66 7.66 0 01.303-.1c.271-.601.517-1.245.71-1.811zm.775 1.27l-.065.168.26-.055-.162-.2-.033.087zm2.177-11.277l3.737 3.996h-2.997a.792.792 0 01-.74-.849V3.996z"
			/>
		</svg>
	);
}

export default SvgFilePdf;
