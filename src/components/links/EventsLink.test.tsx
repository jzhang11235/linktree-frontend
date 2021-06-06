import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testUtils';
import EventsLink from './EventsLink';
import { SongkickEvent } from '../../types';

const events: SongkickEvent[] = [
  {
    id: 'a',
    date: 'Apr 01 2019',
    location: 'The Forum, Melbourne',
    available: true,
    url: '#',
  },
  {
    id: 'b',
    date: 'Apr 02 2019',
    location: 'Venue Name, Canberra',
    available: false,
    url: '#',
  },
];

it('renders label from prop', () => {
  const label = 'Some label';
  render(<EventsLink label={label} events={[]} />);
  expect(screen.getByRole('button')).toHaveTextContent(label);
});

it('expands event list on click', () => {
  render(<EventsLink label="label" events={events} />);
  userEvent.click(screen.getByRole('button'));
  expect(screen.getByRole('list')).toBeInTheDocument();
});
