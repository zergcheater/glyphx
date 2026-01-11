import { useRef } from "react";
import type { Command } from "../engine";
import { executeCommand } from "../engine";
import { usePaletteStore } from "../state/paletteStore";
import { useAutoScroll } from "../hooks/useAutoScroll";
import { highlightText } from "./highlight";

type Props = {
  command: Command;
  matchIndexes: readonly number[] | null;
  index: number;
};

export function CommandItem({ command, matchIndexes, index }: Props) {
  const close = usePaletteStore((s) => s.close);
  const selectedIndex = usePaletteStore((s) => s.selectedIndex);

  const isSelected = index === selectedIndex;

  const ref = useRef<HTMLButtonElement>(null);

  useAutoScroll(ref, isSelected);

  return (
    <li>
      <button
        ref={ref}
        onClick={async () => {
          await executeCommand(command);
          close();
        }}
        className={`
          flex w-full items-center justify-between
          rounded-md px-3 py-2 text-left text-sm
          ${
            isSelected
              ? "bg-zinc-800 text-white"
              : "text-zinc-100 hover:bg-zinc-800"
          }
        `}
      >
        <span>{highlightText(command.title, matchIndexes)}</span>

        {command.shortcut && (
          <span className="text-xs text-zinc-500">{command.shortcut}</span>
        )}
      </button>
    </li>
  );
}
