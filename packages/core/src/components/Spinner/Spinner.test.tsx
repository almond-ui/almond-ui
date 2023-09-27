import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Spinner } from '.';

describe('Spinner', () => {
	it('should render', () => {
		render(<Spinner />);
	});
});
