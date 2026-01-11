import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import type { ReactNode } from "react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

export function CommandDialog({ open, onOpenChange, children }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

        <div
          className="
            fixed left-1/2 top-[20%]
            -translate-x-1/2
            will-change-transform will-change-opacity
            data-[state=open]:animate-[spotlight-in_180ms_cubic-bezier(0.16,1,0.3,1)]
            data-[state=closed]:animate-[spotlight-out_120ms_ease-out]
          "
          data-state={open ? "open" : "closed"}
        >
          <Dialog.Content
            aria-describedby="command-palette-description"
            className="
              w-[520px] max-w-[90vw]
              rounded-xl
              border border-[rgb(var(--border))]
              bg-[rgb(var(--glass))]
              text-[rgb(var(--fg))]
              backdrop-blur-xl
              shadow-xl
            "
          >
            <VisuallyHidden.Root>
              <Dialog.Title>Command Palette</Dialog.Title>
              <Dialog.Description id="command-palette-description">
                Type to search and run commands
              </Dialog.Description>
            </VisuallyHidden.Root>

            {children}
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
