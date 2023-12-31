import Link from 'next/link';

import * as React from 'react';

import { config } from '@/lib/config';
import { CopyCommand } from '@/ui/CopyCommand';
import ExpandingArrow from '@/ui/ExpandingArrow';
import { Features } from '@/ui/Features';
import { Footer } from '@/ui/Footer';
import { Support } from '@/ui/Support';

export const generateMetadata = ({ params }) => {
	const title = 'Almond-UI - Yet another react-tailwindcss component library';
	const description =
		'Almond-UI offers a range of accessible, highly customizable components that can be easily integrated into any react project.';

	return {
		title,
		description,
		openGraph: {
			locale: 'en_US',
			url: 'https://almond-ui.francismasha.com',
			title,
			description,
			siteName: config.metadata.title,
			images: [
				{
					url: config.metadata.ogImage,
					width: 1200,
					height: 630,
					alt: config.metadata.title,
				},
			],
		},
	};
};

const LandingLayout = async () => {
	return (
		<>
			<div
				aria-hidden
				className='pointer-events-none absolute left-1/2 top-0 z-10 h-[400px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-[0.15]'
				style={{ backgroundImage: 'radial-gradient(#A4A4A3, transparent 50%)' }}
			/>
			<svg
				className='pointer-events-none absolute inset-0 h-full w-full stroke-gray-200 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]'
				aria-hidden
			>
				<defs>
					<pattern
						id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
						width={200}
						height={200}
						x='50%'
						y={-1}
						patternUnits='userSpaceOnUse'
					>
						<path d='M100 200V.5M.5 .5H200' fill='none' />
					</pattern>
				</defs>
				<svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
					<path
						d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
						strokeWidth={0}
					/>
				</svg>
				<rect
					width='100%'
					height='100%'
					strokeWidth={0}
					fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
				/>
			</svg>
			<Link
				href='/introduction'
				className='group mt-20 flex space-x-1 rounded-full text-blue-900 hover:text-blue-950 border border-blue-500 bg-blue-50 px-10 py-2 text-sm font-medium ring-0 transition-all hover:border-blue-800 hover:bg-blue-100 sm:mt-0'
			>
				<p>Get your boring components here</p>
				<ExpandingArrow />
			</Link>
			<h1 className='bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text pb-8 pt-4 text-center text-2xl font-semibold text-transparent md:text-4xl'>
				Another component library
			</h1>

			<CopyCommand />
		</>
	);
};

export default LandingLayout;
