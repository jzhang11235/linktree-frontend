import { Meta, Story } from '@storybook/react';
import MusicLink, { MusicLinkProps } from './MusicLink';

export default {
  title: 'Links/Music',
  component: MusicLink,
} as Meta;

const Template: Story<MusicLinkProps> = args => <MusicLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Music',
  song: {
    title: 'Song Name',
    artist: 'Artist Name',
    album: 'Album Name',
    links: [
      { platform: 'spotify', embedUrl: '#', externalUrl: '#' },
      { platform: 'apple-music', embedUrl: '#', externalUrl: '#' },
      { platform: 'soundcloud', embedUrl: '#', externalUrl: '#' },
      { platform: 'youtube-music', embedUrl: '#', externalUrl: '#' },
      { platform: 'deezer', embedUrl: '#', externalUrl: '#' },
      { platform: 'tidal', embedUrl: '#', externalUrl: '#' },
      { platform: 'bandcamp', embedUrl: '#', externalUrl: '#' },
    ],
  },
};
