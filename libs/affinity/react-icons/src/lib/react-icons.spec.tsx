import { render } from '@testing-library/react';

import ReactIcons from './react-icons';

describe('ReactIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactIcons />);
    expect(baseElement).toBeTruthy();
  });
});
