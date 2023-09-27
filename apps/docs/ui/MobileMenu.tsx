import Link from 'next/link';

import { useEffect, useState } from 'react';

import styles from '@/styles/mobile-menu.module.css';
import { cn } from '@/utils/misc';
import useDelayedRender from 'use-delayed-render';

export default function MobileMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
		isMenuOpen,
		{
			enterDelay: 20,
			exitDelay: 300,
		}
	);

	function toggleMenu() {
		if (isMenuOpen) {
			setIsMenuOpen(false);
			document.body.style.overflow = '';
		} else {
			setIsMenuOpen(true);
			document.body.style.overflow = 'hidden';
		}
	}

	useEffect(() => {
		return function cleanup() {
			document.body.style.overflow = '';
		};
	}, []);

	return (
		<>
			<button
				className={cn(styles.burger, 'visible md:hidden')}
				aria-label='Toggle menu'
				type='button'
				onClick={toggleMenu}
			>
				<MenuIcon data-hide={isMenuOpen} />
				<CrossIcon data-hide={!isMenuOpen} />
			</button>
			{isMenuMounted && (
				<ul
					className={cn(
						styles.menu,
						'absolute flex flex-col bg-white antialiased transition duration-500 dark:bg-gray-900',
						isMenuRendered && styles.menuRendered
					)}
				>
					<li
						onClick={toggleMenu}
						className='border-b border-gray-300 px-8 text-lg font-medium text-gray-900 dark:border-gray-700 dark:text-gray-100'
						style={{ transitionDelay: '150ms' }}
					>
						<Link href='/' className='flex w-auto pb-4'>
							Home
						</Link>
					</li>
					<li
						onClick={toggleMenu}
						className='border-b border-gray-300 px-8 text-lg font-medium text-gray-900 dark:border-gray-700 dark:text-gray-100'
						style={{ transitionDelay: '175ms' }}
					>
						<Link href='/ask' className='flex w-auto pb-4'>
							Ask a question
						</Link>
					</li>
					<li
						onClick={toggleMenu}
						className='border-b border-gray-300 px-8 text-lg font-medium text-gray-900 dark:border-gray-700 dark:text-gray-100'
						style={{ transitionDelay: '200ms' }}
					>
						<Link href='/studio' className='flex w-auto pb-4'>
							Write an article
						</Link>
					</li>
					<li
						className='border-b border-gray-300 px-8 text-lg font-medium text-gray-900 dark:border-gray-700 dark:text-gray-100'
						style={{ transitionDelay: '250ms' }}
					>
						<Link href='/about' className='flex w-auto pb-4'>
							About us
						</Link>
					</li>
					<li
						onClick={toggleMenu}
						className='border-b border-gray-300 px-8 text-lg font-medium text-gray-900 dark:border-gray-700 dark:text-gray-100'
						style={{ transitionDelay: '300ms' }}
					>
						<Link href='/new-subscriber' className='flex w-auto pb-4'>
							Newsletter subscription
						</Link>
					</li>
				</ul>
			)}
		</>
	);
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
	return (
		<svg
			className='absolute h-7 w-7 text-gray-900 dark:text-gray-100'
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			{...props}
		>
			<path
				d='M2.5 7.5H17.5'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.5 12.5H17.5'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
	return (
		<svg
			className='absolute h-7 w-7 text-gray-900 dark:text-gray-100'
			viewBox='0 0 24 24'
			width='24'
			height='24'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			fill='none'
			shapeRendering='geometricPrecision'
			{...props}
		>
			<path d='M18 6L6 18' />
			<path d='M6 6l12 12' />
		</svg>
	);
}
