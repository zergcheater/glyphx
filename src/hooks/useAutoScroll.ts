import { useEffect, type RefObject } from "react";

export function useAutoScroll<T extends HTMLElement>(
  ref: RefObject<T | null>,
  active: boolean
) {
  useEffect(() => {
    if (!active) return;
    if (!ref.current) return;

    ref.current.scrollIntoView({
      block: "nearest",
      inline: "nearest",
    });
  }, [active, ref]);
}
