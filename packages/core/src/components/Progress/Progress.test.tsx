import { render } from '@testing-library/react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { Progress } from '.';

describe('Progress', () => {
  it('should render', () => {
    render(<Progress value={50} />);
  });
});
