import * as React from 'react';

import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Card } from '.';

describe('Card', () => {
	it('should render', () => {
		render(
			<Card>
				<Card.Header>Header</Card.Header>
				<Card.Body>Body</Card.Body>
				<Card.Footer>Footer</Card.Footer>
			</Card>
		);
	});
});
