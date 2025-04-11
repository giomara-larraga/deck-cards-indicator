import { writable } from 'svelte/store';
import type { BoardItem } from './types';



const initialBoard: BoardItem[] = [
  { id: 1, name: "Rank 1", items: [] },
  { id: 2, name: "Rank 2", items: [] },
  { id: 3, name: "Rank 3", items: [] },
  { id: 4, name: "Rank 4", items: [] },
  { id: 5, name: "Rank 5", items: [] },
];

export const board = writable<BoardItem[]>(initialBoard);
