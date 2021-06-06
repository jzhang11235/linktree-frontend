import { render, screen } from '../../testUtils';
import EventsLink from './EventsLink';

it('renders label from prop', () => {
  const label = 'Some label';
  render(<EventsLink label={label} />);
  expect(screen.getByRole('button')).toHaveTextContent(label);
});
