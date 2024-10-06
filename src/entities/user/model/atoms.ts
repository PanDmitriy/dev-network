import { atom } from 'jotai';

export const userAtom = atom<{ name: string; email: string } | null>(null);
