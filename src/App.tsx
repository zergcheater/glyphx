import { GlyphX } from "./palette/CommandPaletteProvider";
import type { Command } from "./engine";

export default function App() {
  const commands: Command[] = [
    {
      id: "example-1",
      title: "Example Action",
      group: "General",
      run: () => {
        console.log("Example action executed");
      },
    },
    {
      id: "example-2",
      title: "Another Command",
      group: "General",
      run: () => {
        alert("This is just a demo command");
      },
    },
  ];

  return (
    <>
      <main
        className="
          min-h-screen
          bg-[rgb(var(--bg))]
          text-[rgb(var(--fg))]
          flex
          items-center
          justify-center
        "
      >
        <div className="text-center max-w-md">
          <h1 className="text-lg font-medium">Command Palette Playground</h1>

          <p className="mt-2 text-sm text-[rgb(var(--muted))]">
            Press <kbd className="rounded border px-1.5 py-0.5">⌘</kbd> +{" "}
            <kbd className="rounded border px-1.5 py-0.5">K</kbd> to open the
            palette
          </p>

          <p className="mt-4 text-xs text-[rgb(var(--muted))]">
            This is a minimal host environment for testing and showcasing the
            command palette.
          </p>
        </div>
      </main>

      <GlyphX commands={commands} />
    </>
  );
}
