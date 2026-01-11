import { usePaletteStore } from "../state/paletteStore";
import { groupResults } from "../state/groupResults";
import { CommandItem } from "./CommandItem";

export function CommandList() {
  const results = usePaletteStore((s) => s.results);

  if (results.length === 0) {
    return (
      <div className="px-3 py-8 text-center text-sm text-[rgb(var(--muted))]">
        <p>No matching commands</p>
        <p className="mt-1 text-xs">Try a different keyword</p>
      </div>
    );
  }

  const grouped = groupResults(results);

  let globalIndex = 0;

  return (
    <div
      className="max-h-64 overflow-y-auto transition-opacity
    duration-150
    opacity-100
    data-[empty=true]:opacity-60"
    >
      {grouped.map(({ group, items }) => (
        <div key={group}>
          <div className="px-3 py-2 text-xs font-semibold text-zinc-500">
            {group}
          </div>
          <ul>
            {items.map((result) => {
              const index = globalIndex++;

              return (
                <CommandItem
                  key={result.item.id}
                  command={result.item}
                  matchIndexes={result.indexes}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
