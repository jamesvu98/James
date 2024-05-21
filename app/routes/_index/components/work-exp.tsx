import { useState } from "react";
import { RippleButton } from "./ripple";
import { work_exp } from "~/data";
import { Item } from "./list-item";
import { FadeIn } from "./fadein";

const employers = Object.keys(work_exp);

export function WorkExperience() {
  const [activeStint, setActiveStint] = useState(employers[0]);

  const active_exp = work_exp[activeStint];
  return (
    <div className="mt-4 grid grid-cols-[1fr_2px_4fr]">
      <div>
        {employers.map((employer) => (
          <RippleButton
            key={employer}
            text={employer}
            activeStint={activeStint}
            activeStintSetter={setActiveStint}
          />
        ))}
      </div>
      <div
        className="h-12 rounded-full bg-teal-400 duration-300"
        style={{
          transform: `translateY(calc(3rem * ${employers.indexOf(activeStint)}))`,
        }}
      ></div>
      <div className="px-12">
        <h1 className="text-2xl font-bold text-slate-300">
          {active_exp.role} @{" "}
          <a
            href={`${active_exp.link}`}
            target="_blank"
            rel="noreferrer"
            className="group relative text-teal-400"
          >
            {activeStint}
            <span className="absolute bottom-0 left-0 h-[3px] w-full scale-x-0 bg-teal-400 duration-300 group-hover:scale-x-100"></span>
          </a>
        </h1>
        <p className="mt-2 font-mono text-sm">{active_exp.duration}</p>
        <FadeIn key={activeStint}>
          <ul className="mt-5 h-72 overflow-auto">
            {active_exp.points.map((dot_point: string, index: number) => (
              <Item key={index} text={dot_point} classes="mt-4" />
            ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  );
}
