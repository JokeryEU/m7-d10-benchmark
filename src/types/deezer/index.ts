export interface ISearch {
  coord: ICoord;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: IClouds;
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  message?: string;
}

export interface ICoord {
  lon: number;
  lat: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface IClouds {
  all: number;
}

export interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

// export interface IArtist {
//   id: number;
//   name: string;
//   link: string;
//   share: string;
//   picture: string;
//   picture_small: string;
//   picture_medium: string;
//   picture_big: string;
//   picture_xl: string;
//   radio: boolean;
//   tracklist: string;
//   type: string;
// }

// export interface IContributor {
//   id: number;
//   name: string;
//   link: string;
//   share: string;
//   picture: string;
//   picture_small: string;
//   picture_medium: string;
//   picture_big: string;
//   picture_xl: string;
//   radio: boolean;
//   tracklist: string;
//   type: string;
//   role: string;
// }

// export interface ITrack {
//   id: number;
//   readable: boolean;
//   title: string;
//   title_short: string;
//   title_version: string;
//   isrc: string;
//   link: string;
//   share: string;
//   duration: number;
//   track_position: number;
//   disk_number: number;
//   rank: number;
//   release_date: string;
//   explicit_lyrics: boolean;
//   explicit_content_lyrics: number;
//   explicit_content_cover: number;
//   preview: string;
//   bpm: number;
//   gain: number;
//   available_countries: string[];
//   contributors: IContributor[];
//   md5_image: string;
//   artist: IArtist;
//   album: IAlbum;
//   type: string;
// }

// export interface IAlbum {
//   id: number;
//   title: string;
//   link: string;
//   cover: string;
//   cover_small: string;
//   cover_medium: string;
//   cover_big: string;
//   cover_xl: string;
//   md5_image: string;
//   release_date: string;
//   tracklist: string;
//   type: string;
// }
