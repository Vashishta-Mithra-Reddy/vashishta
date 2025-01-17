export interface Song {
    isPlaying: boolean;
    title: string;
    artist: string;
    album: string;
    albumImageUrl: string;
    songUrl: string;
  }
export interface FavoriteSong {
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

export interface SpotifyTokenResponse {
    access_token: string;
    error?: string;
  }
  
export interface SpotifyCurrentSong {
    item: {
      name: string;
      artists: { name: string }[];
      album: {
        name: string;
        images: { url: string }[];
      };
      external_urls: {
        spotify: string;
      };
    };
  }

export interface TopTrack {
  name: string;
  artists: { name: string }[];
  album: {
    name: string;
    images: { url: string }[];
  };
  external_urls: { spotify: string };
}

export interface TopTracksResponse {
  items: TopTrack[];
}