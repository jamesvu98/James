import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "James Vu" },
    { name: "description", content: "My personal website." },
  ];
};

export default function Index() {
  return (
    <div className="mb-24 flex flex-col items-center">
      <nav className="fixed left-0 top-0 flex w-full justify-end p-8">
        <ul className="flex text-slate-50">
          {["Home", "About", "Experience", "Projects"].map((item, index) => (
            <li key={item} className="mx-6 font-mono">
              <a href="https://jamesvu.com">
                <span className="text-teal-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                . {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-4xl">
        <section className="flex h-screen flex-col items-center justify-center text-slate-50">
          <div>
            <h1 className="animate-type overflow-hidden whitespace-nowrap text-center text-7xl font-bold text-blue-300">
              Hi, I&apos;m <span className="text-teal-400">James.</span>
            </h1>
          </div>
          <p className="mt-12 max-w-2xl text-center text-xl text-slate-400">
            I&apos;m a Platform Engineer from Sydney, Australia. I&apos;m
            passionate about building and maintaining large-scale distributed
            systems in the cloud.
          </p>
        </section>

        <section className="text-slate-400">
          <SectionHeading number={1} title="About me" />
          <p>
            Hello! My name is James and I am currently a{" "}
            <b>Platform Engineer</b> at{" "}
            <b className="text-teal-400">
              <a href="https://zip.co" target="_blank" rel="noreferrer">
                Zip Co
              </a>
            </b>
            , working on building and maintaining our developer platform. I
            started my career in data analytics which was where I first got
            exposed to working with AWS and cloud technologies. As a Platform
            Engineer working closely with other Software Engineers, I soon
            started to develop an interest in web development. The purpose of
            this site (and any other projects that may feature here) is to be an
            avenue where I can develop my skills in the technologies that I may
            not have much opportunity to work with during my day-to-day as a
            Platform Engineer.
          </p>
          <p className="mt-4">
            Here are some technologies that I have been working with:
          </p>
          <ul className="mt-4 grid w-2/3 grid-cols-2">
            {[
              "Kubernetes",
              "AWS",
              "Golang",
              "Python",
              "Typescript / Javascript",
              "Shell (Bash + Powershell)",
            ].map((skill) => (
              <li key={skill} className="mt-1 flex font-mono">
                <span className="mr-2 text-teal-400">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-24 text-slate-400">
          <SectionHeading number={2} title="Where I've worked" />
        </section>
      </div>
    </div>
  );
}

function SectionHeading({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex  py-5">
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
