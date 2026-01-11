export function highlightText(text: string, indexes: readonly number[] | null) {
  if (!indexes || indexes.length === 0) {
    return text;
  }

  return text.split("").map((char, i) =>
    indexes.includes(i) ? (
      <span key={i} className="text-blue-400">
        {char}
      </span>
    ) : (
      <span key={i}>{char}</span>
    )
  );
}
