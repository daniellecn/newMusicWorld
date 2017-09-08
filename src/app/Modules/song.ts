import { Artist } from './../Modules/artist';

export class Song{
  id: number;
  name: string;
  artist: Artist;
  album?: string;
  publisher: string;
  publicationYear: number;
  genere: string;
  views?: number;
  words: string;
}