import { atom } from 'jotai';

// Определим структуру поста
export type Post = {
  id: number;
  author: string;
  content: string;
  date: string;
};

// Создадим атом для хранения списка постов
export const postsAtom = atom<Post[]>([
  // Пример поста
  {
    id: 1,
    author: 'John Doe',
    content: 'This is my first post!',
    date: new Date().toLocaleDateString(),
  },
]);
