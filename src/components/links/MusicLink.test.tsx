import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testUtils';
import MusicLink from './MusicLink';
import { Song } from '../../types';

const song: Song = {
  title: 'Song Name',
  artist: 'Artist Name',
  album: 'Album Name',
  links: [
    { platform: 'spotify', embedUrl: '#', externalUrl: '#some-link' },
    { platform: 'apple-music', embedUrl: '#', externalUrl: '#' },
  ],
};

it('renders label from prop', () => {
  const label = 'Some label';
  render(<MusicLink label={label} song={song} />);
  expect(screen.getByRole('button')).toHaveTextContent(label);
});

it('renders platform links from prop as list items', () => {
  render(<MusicLink label="label" song={song} />);
  userEvent.click(screen.getByRole('button'));
  expect(screen.getAllByRole('listitem').length).toBe(2);
});

it('renders platform name in button', () => {
  render(<MusicLink label="label" song={song} />);
  userEvent.click(screen.getByRole('button'));
  expect(screen.getByRole('button', { name: /spotify/i })).toBeInTheDocument();
});

it('renders link that points to external url', () => {
  render(<MusicLink label="label" song={song} />);
  userEvent.click(screen.getByRole('button'));
  const firstLink = screen.getAllByRole('link')[0];
  expect(firstLink).toHaveAttribute('href', '#some-link');
});
