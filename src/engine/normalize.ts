import type { Command } from "./command";

export type NormalizedCommand = Command & {
  searchText: string;
};

export function normalizeCommands(commands: Command[]): NormalizedCommand[] {
  return commands.map((cmd) => {
    const parts = [cmd.title, cmd.subtitle, ...(cmd.keywords ?? [])];

    return {
      ...cmd,
      searchText: parts.join(" ").toLowerCase(),
    };
  });
}
