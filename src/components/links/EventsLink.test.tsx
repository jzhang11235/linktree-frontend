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
    url: 'https://example.com/',
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

it('expands and collapses event list on click', () => {
  render(<EventsLink label="label" events={events} />);
  userEvent.click(screen.getByRole('button'));
  expect(screen.getByRole('list')).toBeInTheDocument();
  userEvent.click(screen.getByRole('button'));
  expect(screen.queryByRole('list')).not.toBeInTheDocument();
});

it('renders events from prop as list items', () => {
  render(<EventsLink label="label" events={events} />);
  userEvent.click(screen.getByRole('button'));
  expect(screen.getAllByRole('listitem').length).toBe(2);
});

it('renders event info', () => {
  render(<EventsLink label="label" events={events} />);
  userEvent.click(screen.getByRole('button'));
  const firstEvent = screen.getAllByRole('listitem')[0];
  expect(firstEvent).toHaveTextContent('Apr 01 2019');
  expect(firstEvent).toHaveTextContent('The Forum, Melbourne');
});

it('points to event url', () => {
  render(<EventsLink label="label" events={events} />);
  userEvent.click(screen.getByRole('button'));
  const firstLink = screen.getAllByRole('link')[0];
  expect(firstLink).toHaveAttribute('href', 'https://example.com/');
});
