import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export function RippleButton({
  text,
  activeStint,
  activeStintSetter,
}: {
  text: string;
  activeStint: string;
  activeStintSetter: Dispatch<SetStateAction<string>>;
}) {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [rippleCount, setRippleCount] = useState(0);
  const [isRippling, setIsRippling] = useState(false);

  function triggerRipple(e: MouseEvent) {
    const element = e.currentTarget as HTMLElement;
    const bounding_rect = element.getBoundingClientRect();
    setCoords({
      x: e.clientX - bounding_rect.x,
      y: e.clientY - bounding_rect.y,
    });
    setRippleCount(rippleCount + 1);
    activeStintSetter(text);
  }

  useEffect(() => {
    let timeout_id: ReturnType<typeof setTimeout>;
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      timeout_id = setTimeout(() => setIsRippling(false), 300);
    }

    return () => {
      clearTimeout(timeout_id);
    };
  }, [rippleCount, coords]);

  return (
    <button
      type="button"
      className={`relative h-12 w-full overflow-hidden px-4 py-3 text-left text-slate-400 active:text-teal-400 ${activeStint === text ? "bg-cyan-400/10 text-teal-400" : ""}`}
      onClick={triggerRipple}
    >
      {isRippling ? (
        <span
          key={rippleCount}
          className={`absolute block h-1 w-1 animate-ripple rounded-full bg-teal-400 `}
          style={{
            top: coords.y,
            left: coords.x,
          }}
        ></span>
      ) : (
        ""
      )}
      <span className="relative z-10 font-mono">{text.toUpperCase()}</span>
    </button>
  );
}
