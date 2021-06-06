import { render, screen } from '../../testUtils';
import MusicLink from './MusicLink';
import { Song } from '../../types';

const song: Song = {
  title: 'Song Name',
  artist: 'Artist Name',
  album: 'Album Name',
  links: [
    { platform: 'spotify', embedUrl: '#', externalUrl: '#' },
    { platform: 'apple-music', embedUrl: '#', externalUrl: '#' },
  ],
};

it('renders label from prop', () => {
  const label = 'Some label';
  render(<MusicLink label={label} song={song} />);
  expect(screen.getByRole('button')).toHaveTextContent(label);
});
