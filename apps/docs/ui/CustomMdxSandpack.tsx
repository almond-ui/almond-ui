import * as React from 'react';

import { theme } from '@/lib/theme';
import {
	SandpackCodeViewer,
	SandpackLayout,
	SandpackProvider,
} from '@codesandbox/sandpack-react';

export const CustomMdxSandpack = (props: any) => {
	const { children } = props;

	return (
		<SandpackProvider
			theme={theme}
			files={{
				'/App.js': children?.props?.children?.trim(),
			}}
			template='react'
		>
			<SandpackLayout>
				<SandpackCodeViewer showLineNumbers={true} />
			</SandpackLayout>
		</SandpackProvider>
	);
};
