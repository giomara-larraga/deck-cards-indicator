import { writable } from 'svelte/store';
import type { BoardItem } from './types';
import { cards } from "$lib/constants";

const initialBoard: BoardItem[] = [
  { id: 1, name: "Rank 1", items: [] },
];

export const board = writable<BoardItem[]>(initialBoard);
export const items = writable([...cards]);