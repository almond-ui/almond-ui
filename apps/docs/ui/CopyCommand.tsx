'use client';

import { useState } from 'react';

export const CopyCommand = () => {
	const [copying, setCopying] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText('npm install @almond-ui/core');
		setCopying(true);
		setTimeout(() => setCopying(false), 1500);
	};

	return (
		<div
			onClick={handleCopy}
			className='group relative flex cursor-copy items-center'
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='mr-2 fill-slate-600'
				height='0.75em'
				viewBox='0 0 576 512'
			>
				<path d='M9.4 41.4C-3.1 53.9-3.1 74.1 9.4 86.6L178.7 256 9.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0z' />
				<path
					className='opacity-50'
					d='M224 448c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32z'
				/>
			</svg>
			<span className='text-slate-500 transition-colors group-hover:text-slate-600'>
				npm install @almond-ui/core
			</span>
			<span className='invisible absolute -right-6 ml-2 group-hover:visible'>
				{copying ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='fill-green-600'
						height='1em'
						viewBox='0 0 512 512'
					>
						<path d='M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z' />
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='fill-slate-600'
						height='1em'
						viewBox='0 0 512 512'
					>
						<path d='M448 352H288c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H396.1c4.2 0 8.3 1.7 11.3 4.7l67.9 67.9c3 3 4.7 7.1 4.7 11.3V320c0 17.7-14.3 32-32 32zM497.9 81.9L430.1 14.1c-9-9-21.2-14.1-33.9-14.1H288c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V416H256v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32H192V128H64z' />
					</svg>
				)}
			</span>
		</div>
	);
};
