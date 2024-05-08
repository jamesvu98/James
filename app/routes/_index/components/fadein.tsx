import { ReactNode, useEffect, useRef, useState } from "react";

export function FadeIn({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  const fade_in_section_ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(entry.isIntersecting);
        }
      });
    });

    observer.observe(fade_in_section_ref.current!);

    return () => {
      observer.disconnect();
    };
  });
  return (
    <div
      className={`${show ? "" : "translate-y-20 opacity-0"} duration-1000`}
      ref={fade_in_section_ref}
    >
      {children}
    </div>
  );
}
