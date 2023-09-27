'use client';

import { Menu } from './Menu';

export const Aside = () => {
	return (
		<aside className='fixed h-[calc(100%-3rem)] w-[16rem] overflow-auto py-8'>
			<Menu />
		</aside>
	);
};
