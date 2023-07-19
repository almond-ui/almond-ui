import { render } from '@testing-library/react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { Select } from '.';

describe('Select', () => {
  it('should render', () => {
    render(
      <Select>
        <option>One</option>
        <option>Two</option>
      </Select>
    );
  });
});
