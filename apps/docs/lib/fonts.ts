import { Inter, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';

// export const fontSans = Inter({
//   display: 'swap',
//   variable: '--font-sans',
//   subsets: ['latin'],
// });

export const fontSans = localFont({
  src: [
    {
      path: '../assets/fonts/InterSoft-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/InterSoft-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/InterSoft-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/InterSoft-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/InterSoft-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});

export const fontMono = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

// circular,Helvetica Neue,Helvetica,Arial,sans-serif;
