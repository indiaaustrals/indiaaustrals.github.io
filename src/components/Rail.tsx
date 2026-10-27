export default function Rail({
  inverted = false,
  className = "",
  left,
  right,
}: {
  inverted?: boolean;
  className?: string;
  left?: string;
  right?: string;
}) {
  const line = inverted ? "var(--rule-inv)" : "var(--rule)";
  const text = inverted ? "text-cream/70" : "text-ink/70";
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`}>
      {left && <span className={`rail ${text}`}>{left}</span>}
      <span className={`h-px flex-1 ${left || right ? "hidden sm:block" : ""}`} style={{ background: line }} />
      {/* With labels either side there is no room on a phone for the middle mark, so it drops out. */}
      <span
        className={`rail shrink-0 items-center gap-3 ${text} ${left || right ? "hidden sm:flex" : "flex"}`}
        aria-hidden="true"
      >
        <span>2027</span>
        <span className="opacity-40">|</span>
        <span style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}>भारत</span>
        <span className="opacity-40">|</span>
        <span>DEL</span>
      </span>
      <span className={`h-px flex-1 ${left || right ? "hidden sm:block" : ""}`} style={{ background: line }} />
      {right && <span className={`rail ${text}`}>{right}</span>}
    </div>
  );
}
