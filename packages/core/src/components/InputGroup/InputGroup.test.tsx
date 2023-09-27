import * as React from 'react';

import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { InputGroup } from '.';

describe('InputGroup', () => {
	it('should render', () => {
		render(
			<InputGroup>
				<InputGroup.Input placeholder='This is aan input...' />
			</InputGroup>
		);
	});
});
