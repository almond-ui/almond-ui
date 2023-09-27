import * as React from 'react';

import { Button } from '@components/Button';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Tooltip } from '.';

describe('Tooltip', () => {
	it('should render', () => {
		render(
			<Tooltip label='Tooltip'>
				<Button>Trigger</Button>
			</Tooltip>
		);
	});
});
