import type { Command } from "../engine";

export type GlyphXProps = {
  commands: Command[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};
