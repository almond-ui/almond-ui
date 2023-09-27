import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Button } from '.';

describe('Button', () => {
	it('should render', () => {
		render(<Button>Button</Button>);
	});
});
