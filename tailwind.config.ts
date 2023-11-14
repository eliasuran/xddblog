import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				xdd: '#E82A93',
				bg: '#131316',
				primary: '#22252F',
				secondary: '#343746',
				text: '#F8F8F1',

				bgLight: '#F5F0F4',
				primaryLight: '#FFFFFF',
				secondaryLight: '#F6EFF5',
				textLight: '#2B2E3B'
			}
		}
	},
	plugins: [skeleton({})]
} satisfies Config;

export default config;
