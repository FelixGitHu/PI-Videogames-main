import { render, screen } from '@testing-library/react';

import LandingPage from '../src/components/LandingPAge/LandingPage';
import { Test } from '../src/components/nuevo/nuevo';
describe('LandingPage', () => {
    test('renders the landing page', () => {
        render(<Test />);
      });
})
