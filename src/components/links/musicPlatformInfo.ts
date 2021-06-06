import { MusicPlatform } from '../../types';
import spotifyLogo from '../../assets/music/spotify.svg';
import appleMusicLogo from '../../assets/music/apple-music.svg';
import soundcloudLogo from '../../assets/music/soundcloud.svg';
import youtubeMusicLogo from '../../assets/music/youtube-music.svg';
import deezerLogo from '../../assets/music/deezer.svg';
import tidalLogo from '../../assets/music/tidal.svg';
import bandcampLogo from '../../assets/music/bandcamp.svg';

type MusicPlatformInfo = {
  [key in MusicPlatform]: {
    displayName: string;
    iconUrl: string;
  };
};

const musicPlatformInfo: MusicPlatformInfo = {
  'spotify': { displayName: 'Spotify', iconUrl: spotifyLogo },
  'apple-music': { displayName: 'Apple Music', iconUrl: appleMusicLogo },
  'soundcloud': { displayName: 'Soundcloud', iconUrl: soundcloudLogo },
  'youtube-music': { displayName: 'YouTube Music', iconUrl: youtubeMusicLogo },
  'deezer': { displayName: 'Deezer', iconUrl: deezerLogo },
  'tidal': { displayName: 'Tidal', iconUrl: tidalLogo },
  'bandcamp': { displayName: 'Bandcamp', iconUrl: bandcampLogo },
};

export default musicPlatformInfo;
