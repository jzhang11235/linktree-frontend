import { render, screen } from '../../testUtils';
import ClassicLink from './ClassicLink';

it('renders label from prop', () => {
  const label = 'Some label';
  render(<ClassicLink label={label} to="#" />);
  expect(screen.getByRole('link')).toHaveTextContent(label);
});

it('points to url from prop', () => {
  const url = 'https://example.com/';
  render(<ClassicLink label="label" to={url} />);
  expect(screen.getByRole('link')).toHaveAttribute('href', url);
});
