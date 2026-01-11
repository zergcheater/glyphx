import { useEffect } from "react";

export function useCommandShortcut(onTrigger: () => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === "k";

      // macOS Safari: Cmd only
      if (navigator.platform.startsWith("Mac")) {
        if (e.metaKey && isK) {
          e.preventDefault();
          onTrigger();
        }
        return;
      }

      // Windows / Linux
      if (e.ctrlKey && isK) {
        e.preventDefault();
        onTrigger();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onTrigger]);
}
