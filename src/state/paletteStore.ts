import { create } from "zustand";
import type { Command } from "../engine";
import { normalizeCommands, searchCommands } from "../engine";
import type { SearchResult } from "../engine/search";

type PaletteState = {
  commands: Command[];
  normalized: ReturnType<typeof normalizeCommands>;
  results: SearchResult<Command>[];
  isOpen: boolean;
  query: string;
  selectedIndex: number;
  registerCommands: (commands: Command[]) => void;
  setQuery: (query: string) => void;
  selectNext: () => void;
  selectPrev: () => void;
  selectFirst: () => void;
  open: () => void;
  close: () => void;
};

export const usePaletteStore = create<PaletteState>((set, get) => ({
  commands: [],
  normalized: [],
  results: [],
  query: "",
  isOpen: false,
  selectedIndex: 0,

  registerCommands: (commands) => {
    const normalized = normalizeCommands(commands);

    set({
      commands,
      normalized,
      results: normalized.map((cmd) => ({
        item: cmd,
        indexes: null,
      })),
      selectedIndex: 0,
    });
  },

  setQuery: (query) => {
    const { normalized } = get();
    const results = searchCommands(normalized, query);

    set({
      query,
      results,
      selectedIndex: 0,
    });
  },

  selectNext: () => {
    const { selectedIndex, results } = get();
    set({
      selectedIndex:
        results.length === 0 ? 0 : (selectedIndex + 1) % results.length,
    });
  },

  selectPrev: () => {
    const { selectedIndex, results } = get();
    set({
      selectedIndex:
        results.length === 0
          ? 0
          : (selectedIndex - 1 + results.length) % results.length,
    });
  },

  selectFirst: () => set({ selectedIndex: 0 }),

  open: () => set({ isOpen: true }),
  close: () =>
    set({
      isOpen: false,
      query: "",
      selectedIndex: 0,
    }),
}));
