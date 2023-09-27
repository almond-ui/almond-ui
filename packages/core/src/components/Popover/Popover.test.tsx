import * as React from 'react';

import { Button } from '@components/Button';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Popover } from '.';

describe('Popover', () => {
	it('should render', () => {
		render(
			<Popover>
				<Popover.Trigger>
					<Button>Trigger</Button>
				</Popover.Trigger>
				<Popover.Content>Content</Popover.Content>
			</Popover>
		);
	});
});
