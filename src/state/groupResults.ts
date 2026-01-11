import type { SearchResult } from "../engine/search";
import type { Command } from "../engine";

export type GroupedResults = {
  group: string;
  items: SearchResult<Command>[];
}[];

export function groupResults(results: SearchResult<Command>[]): GroupedResults {
  const map = new Map<string, SearchResult<Command>[]>();

  for (const result of results) {
    const group = result.item.group ?? "Other";

    if (!map.has(group)) {
      map.set(group, []);
    }

    map.get(group)!.push(result);
  }

  return Array.from(map.entries()).map(([group, items]) => ({
    group,
    items,
  }));
}
