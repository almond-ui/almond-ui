import { Inter, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = Inter({
  display: 'swap',
  variable: '--font-sans',
  subsets: ['latin'],
});

export const fontMono = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

// circular,Helvetica Neue,Helvetica,Arial,sans-serif;
