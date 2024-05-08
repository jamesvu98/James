import { Dispatch, MouseEvent, SetStateAction, useRef, useState } from "react";

export function RippleButton({
  text,
  activeStint,
  activeStintSetter,
}: {
  text: string;
  activeStint: string;
  activeStintSetter: Dispatch<SetStateAction<string>>;
}) {
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: -1,
    y: -1,
  });
  const [rippleCount, setRippleCount] = useState<number>(0);
  const rippleArray = useRef<number[]>([]);

  function triggerRipple(e: MouseEvent) {
    const element = e.currentTarget as HTMLElement;
    const bounding_rect = element.getBoundingClientRect();
    setCoords({
      x: e.clientX - bounding_rect.x,
      y: e.clientY - bounding_rect.y,
    });
    setRippleCount(rippleCount + 1);
    rippleArray.current.push(rippleCount + 1);
    setTimeout(() => rippleArray.current.shift(), 300);
    activeStintSetter(text);
  }

  return (
    <button
      type="button"
      className={`relative h-12 w-full overflow-hidden px-4 py-3 text-left text-slate-400 active:text-teal-400 ${activeStint === text ? "bg-cyan-400/10 text-teal-400" : ""}`}
      onClick={triggerRipple}
    >
      {rippleArray.current.map((num) => (
        <span
          key={num}
          className={`absolute block h-1 w-1 animate-ripple rounded-full bg-teal-400 `}
          style={{
            top: coords.y,
            left: coords.x,
          }}
        ></span>
      ))}
      <span className="relative z-10 font-mono">{text.toUpperCase()}</span>
    </button>
  );
}
