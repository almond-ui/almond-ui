import { config } from '@/lib/config';
import { Features } from '@/ui/Features';
import { Footer } from '@/ui/Footer';
import { Hero } from '@/ui/Hero';
import { Support } from '@/ui/Support';
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

const LandingLayout = async ({ params }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg-gradient-to-tr to-slate-100 from-transparent'>
        <div className='container max-w-8xl mx-auto'>
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default LandingLayout;
