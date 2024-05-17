import { Link } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
export function NavBar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const initialRender = useRef(true);

  useEffect(() => {
    function handleScroll() {
      if (!initialRender.current && window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      initialRender.current = false;

      setLastScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed left-0 top-0 ${show ? "" : "-translate-y-16"} flex w-full justify-end p-6 duration-150 ease-linear`}
    >
      <ul className="flex text-slate-50">
        {["Home", "About", "Experience", "Projects"].map((item, index) => (
          <li key={item} className="mx-6 font-mono">
            <Link to={`#${item !== "Home" ? item.toLowerCase() : ""}`}>
              <span className="text-teal-400">
                {String(index).padStart(2, "0")}.{" "}
              </span>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
