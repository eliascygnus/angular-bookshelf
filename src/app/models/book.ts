import { Author } from './author';

export interface Book {
  id: number;
  title: string;
  author: Author;
  genre: string;
  description: string;
}
