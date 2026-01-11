import fuzzysort from "fuzzysort";
import type { NormalizedCommand } from "./normalize";

export type SearchResult<T> = {
  item: T;
  indexes: readonly number[] | null;
};

export function searchCommands(
  commands: NormalizedCommand[],
  query: string
): SearchResult<NormalizedCommand>[] {
  if (!query.trim()) {
    return commands.map((cmd) => ({
      item: cmd,
      indexes: null,
    }));
  }

  const results = fuzzysort.go(query, commands, {
    key: "searchText",
    threshold: -1000,
  });

  return results.map((r) => ({
    item: r.obj,
    indexes: r.indexes,
  }));
}
