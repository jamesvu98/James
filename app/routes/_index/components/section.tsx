import { ReactNode } from "react";

export function Section({
  htmlId,
  number,
  title,
  children,
}: {
  htmlId: string;
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={htmlId}
      className={`${number !== 1 ? "mt-24" : ""} text-slate-400`}
    >
      <SectionHeading number={number} title={title} />
      {children}
    </section>
  );
}

function SectionHeading({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex py-5">
      <h2 className="mr-6 text-4xl font-bold text-slate-300">
        <span className="mr-3 font-mono text-3xl text-teal-300">
          {String(number).padStart(2, "0")}.
        </span>
        {title}
      </h2>
      <div className="relative top-6 mr-16 h-px flex-1 bg-slate-700"></div>
    </div>
  );
}
