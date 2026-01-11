import type { Command } from "./command";

export async function executeCommand(command: Command) {
  try {
    await command.run();
  } catch (error) {
    console.error(`[command-palette] Command failed: ${command.id}`, error);
  }
}
