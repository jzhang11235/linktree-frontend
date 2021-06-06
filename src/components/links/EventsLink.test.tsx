import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testUtils';
import EventsLink from './EventsLink';
import { SongkickEvent } from '../../types';

const events: SongkickEvent[] = [
  {
    id: 'a',
    date: 'Apr 01 2019',
    location: 'The Forum, Melbourne',
    soldOut: true,
    url: 'https://example.com/',
  },
  {
    id: 'b',
    date: 'Apr 02 2019',
    location: 'Venue Name, Canberra',
    soldOut: false,
    url: '#',
  },
];

it('renders label from prop', () => {
  const label = 'Some label';
  render(<EventsLink label={label} events={[]} />);
  expect(screen.getByRole('button')).toHaveTextContent(label);
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

it('renders "sold out" if event is sold out', () => {
  render(<EventsLink label="label" events={events} />);
  userEvent.click(screen.getByRole('button'));
  const firstEvent = screen.getAllByRole('listitem')[0];
  expect(firstEvent).toHaveTextContent('Sold out');
});
