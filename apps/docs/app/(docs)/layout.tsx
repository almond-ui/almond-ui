import '@/styles/globals.css';
import { config } from '@/lib/config';
import { Aside } from '@/ui/Aside';
import { Footer } from '@/ui/Footer';
import { ReactNode } from 'react';

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
  twitter: {
    card: 'summary_large_image',
    title: config.metadata.title,
    description: config.metadata.description,
    images: [config.metadata.ogImage],
    creator: '@mashafrancis',
  },
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='container mx-auto flex h-full items-center'>
        <div className='flex w-full'>
          <div className='hidden border-r border-r-gray-100 2xl:block 2xl:w-1/6'>
            <Aside />
          </div>

          <div className='mb-4 min-h-[85vh] w-full 2xl:block 2xl:w-5/6'>
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
