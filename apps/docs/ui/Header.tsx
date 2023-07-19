'use client';

import { Menu } from '@/ui/Menu';
import MobileMenu from '@/ui/MobileMenu';
import { cn } from '@/utils/misc';
import { Drawer } from '@almond-ui/core';
import { List, ScribbleLoop, X } from '@phosphor-icons/react';
import { useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import logo from '../public/images/logo.svg';

const LINKS = [
  { name: 'User guide', href: '/ask' },
  { name: 'Changelog', href: '/write' },
];

function NavItem({ href, text }: { href: string; text: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-100'
            : 'font-normal text-gray-600 dark:text-gray-300',
          'underlined mx-3 hidden px-1 transition-all md:inline-block text-sm'
        )}
      >
        {text}
      </Link>
    </li>
  );
}

export const Header = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const control = useAnimation();

  const addShadowToNavbar = useCallback(async () => {
    if (window.pageYOffset > 10) {
      navRef.current?.classList.add(
        ...['shadow', 'backdrop-blur-xl', 'bg-white/70', 'dark:bg-gray-900']
      );

      await control.start('visible');
    } else {
      navRef.current?.classList.remove(
        ...['shadow', 'backdrop-blur-xl', 'bg-white/70', 'dark:bg-gray-900']
      );
      await control.start('hidden');
    }
  }, [control]);

  return (
    <header className='sticky top-0 z-40 bg-background'>
      <div className='flex h-12 items-center justify-between gap-6 border-b py-4 md:gap-10'>
        <nav
          ref={navRef}
          className='inset-x-0 top-0 z-10 w-full p-4 lg:fixed lg:p-2 lg:px-0'
        >
          <div className='mx-auto flex max-w-7xl justify-between'>
            <div className='hidden items-center justify-center gap-2 align-middle lg:flex'>
              <ScribbleLoop size={32} color='#141414' weight='duotone' />
              <Link
                href='/'
                aria-label='musings'
                className='text-primary underlined block whitespace-nowrap font-heading text-xl font-medium transition focus:outline-none'
              >
                almond-ui
              </Link>
            </div>

            <div className='ml-[-0.60rem] lg:flex lg:items-center lg:justify-center'>
              <ul className='hidden lg:flex'>
                {LINKS.map((link) => (
                  <NavItem key={link.href} href={link.href} text={link.name} />
                ))}
              </ul>
              <MobileMenu />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
