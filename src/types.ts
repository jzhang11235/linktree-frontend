export type SongkickEvent = {
  id: string;
  date: string;
  location: string;
  soldOut: boolean;
  url: string;
};

export type Song = {
  title: string;
  artist: string;
  album: string;
  links: SongLink[];
};

export type SongLink = {
  platform: MusicPlatform;
  embedUrl: string;
  externalUrl: string;
};

export type MusicPlatform =
  | 'spotify'
  | 'apple-music'
  | 'soundcloud'
  | 'youtube-music'
  | 'deezer'
  | 'tidal'
  | 'bandcamp';
