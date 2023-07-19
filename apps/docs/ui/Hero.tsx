'use client';

import Link from 'next/link';
import * as React from 'react';

export const Hero = () => {
  const [copying, setCopying] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install @almond-ui/core');
    setCopying(true);
    setTimeout(() => setCopying(false), 1500);
  };

  return (
    <section className='h-full space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
      <div className='container flex flex-col items-center gap-4 text-center'>
        <Link
          href='/'
          className='rounded-2xl bg-gray-200 px-4 py-1.5 text-sm font-medium'
          target='_blank'
        >
          Follow along on Twitter
        </Link>
        <h1 className='flex flex-col items-center text-3xl font-semibold text-slate-800 md:text-4xl lg:text-6xl'>
          <span>Yet another boring</span>
          <span>component library</span>
        </h1>

        <h2 className='text-center text-lg text-slate-600 md:text-xl'>
          It can be expressive with variant driven styling and configuration
        </h2>

        <div className='flex flex-col items-center gap-3'>
          <div className='mx-auto flex flex-wrap items-center justify-center gap-4 md:flex-row'>
            <Link
              href='/introduction'
              className='flex items-center space-x-2 rounded-lg border border-blue-600 bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-200/75 hover:from-blue-700 hover:to-blue-600'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='fill-white'
                height='1em'
                viewBox='0 0 512 512'
              >
                <path d='M223.7 391.9c-4-56-49.1-100.6-105.3-103.8c21.4-47.9 58.4-126.6 88.8-171.5C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-44.7 30.3-123.1 66.2-171.6 87.2zM424 128a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z' />
                <path
                  className='opacity-50'
                  d='M118.5 288H24c-8.7 0-16.7-4.7-20.9-12.2s-4.1-16.8 .4-24.2l52.8-86.9C69.3 143.2 92.6 130 117.8 130h80.8c-28.5 45.8-60.7 114.5-80.1 158zM382 313.4v80.8c0 25.2-13.1 48.5-34.6 61.5l-86.9 52.8c-7.4 4.5-16.7 4.7-24.2 .4s-12.2-12.2-12.2-20.9l0-96.2c43.9-19.1 112.4-50.3 158-78.4zM166.5 470C132.3 504.3 66 511 28.3 511.9c-16 .4-28.6-12.2-28.2-28.2C1 446 7.7 379.7 42 345.5c34.4-34.4 90.1-34.4 124.5 0s34.4 90.1 0 124.5zm-46.7-36.4c11.4-11.4 11.4-30 0-41.4s-30-11.4-41.4 0c-10.1 10.1-13 28.5-13.7 41.3c-.5 8 5.9 14.3 13.9 13.9c12.8-.7 31.2-3.7 41.3-13.7z'
                />
              </svg>
              <span>Get started</span>
            </Link>
          </div>

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
        </div>
      </div>
    </section>
  );
};
