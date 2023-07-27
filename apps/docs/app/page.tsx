import { config } from '@/lib/config';
import { CopyCommand } from '@/ui/CopyCommand';
import ExpandingArrow from '@/ui/ExpandingArrow';
import { Features } from '@/ui/Features';
import { Footer } from '@/ui/Footer';
import { Support } from '@/ui/Support';
import Link from 'next/link';
import * as React from 'react';

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
      <Link
        href='/introduction'
        className='group mt-20 flex space-x-1 rounded-full border border-blue-100 bg-white/30 px-10 py-2 text-sm font-medium text-gray-600 ring-0 transition-all hover:border-blue-800 hover:bg-blue-50 sm:mt-0'
      >
        <p>Get your boring components here</p>
        <ExpandingArrow />
      </Link>
      <h1 className='bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text pb-8 pt-4 text-center text-2xl font-medium text-transparent md:text-4xl'>
        Another boring component library
      </h1>

      <CopyCommand />
    </>
  );
};

export default LandingLayout;
