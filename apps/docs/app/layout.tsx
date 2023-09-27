import * as React from 'react';
import { ReactNode } from 'react';

import { config } from '@/lib/config';
import { fontMono, fontSans } from '@/lib/fonts';
import '@/styles/globals.css';
import { Header } from '@/ui/Header';
import { cn } from '@/utils/misc';
import Heimdall from '@heimdall-logs/tracker/react';

export const metadata = {
	title: {
		default: config.metadata.title,
		template: 'Almond-UI - %s',
	},
	description: config.metadata.description,
	generator: 'Next.js',
	applicationName: 'Almond-UI - Documentation',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'Next.js',
		'React',
		'Tailwind CSS',
		'UI',
		'React component library',
	],
	authors: [{ name: 'Francis Masha' }],
	colorScheme: 'light',
	creator: 'Francis Masha',
	publisher: 'Francis Masha',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: {
			default: config.metadata.title,
			template: 'Almond-UI - %s',
		},
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	metadataBase: new URL('https://francismasha.com'),
	twitter: {
		card: 'summary_large_image',
		title: config.metadata.title,
		description: config.metadata.description,
		images: [config.metadata.ogImage],
		creator: '@mashafrancis',
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang='en'
			className={cn(
				'min-h-screen bg-white font-sans text-black',
				fontSans.variable,
				fontMono.variable
			)}
		>
			<body className='antialiased'>
				<main className='relative flex min-h-screen flex-col items-center justify-center'>
					<Header />
					{children}
					<Heimdall
						config={{
							id: 'ui_francismasha',
							consent: 'granted',
							host: '/api/heimdall',
							collector: '/api/trace',
							autoTrack: true,
						}}
					/>
				</main>
			</body>
		</html>
	);
}
