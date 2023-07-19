'use client';

import { theme } from '@/lib/theme';
import {
  SandpackCodeViewer,
  SandpackLayout,
  SandpackProvider,
} from '@codesandbox/sandpack-react';

export const CustomSandpack = (props: any) => {
  const { children, showLineNumbers = true } = props;

  return (
    <SandpackProvider
      theme={theme}
      files={{
        '/App.js': children,
      }}
      template='react'
    >
      <SandpackLayout>
        <SandpackCodeViewer showLineNumbers={showLineNumbers} wrapContent />
      </SandpackLayout>
    </SandpackProvider>
  );
};
