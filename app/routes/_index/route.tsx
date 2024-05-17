import type { MetaFunction } from "@remix-run/node";
import { NavBar } from "./components/navbar";
import { FadeIn } from "./components/fadein";
import { Section } from "./components/section";
import { projects, technologies } from "~/data";
import { WorkExperience } from "./components/work-exp";
import { Item } from "./components/list-item";
import { ProjectCard } from "./components/project-card";

export const meta: MetaFunction = () => {
  return [
    { title: "James Vu" },
    { name: "description", content: "My personal website." },
  ];
};

export default function Index() {
  return (
    <div className="mb-24 flex flex-col items-center scroll-smooth">
      <NavBar />
      <div className="max-w-4xl">
        <section className="flex h-screen flex-col items-center justify-center text-slate-50">
          <div>
            <h1 className="animate-type overflow-hidden whitespace-nowrap text-center text-7xl font-bold text-blue-300">
              Hi, I&apos;m <span className="text-teal-400">James.</span>
            </h1>
          </div>
          <FadeIn>
            <p className="mt-12 max-w-2xl text-center text-xl text-slate-400">
              I&apos;m a Platform Engineer from Sydney, Australia. I am
              passionate about building and maintaining large-scale distributed
              systems in the cloud.
            </p>
          </FadeIn>
        </section>

        <FadeIn>
          <Section htmlId="about" number={1} title="About me">
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
              this site (and any other projects that may feature here) is to be
              an avenue where I can develop my skills in the technologies that I
              may not have much opportunity to work with during my day-to-day as
              a Platform Engineer.
            </p>
            <p className="mt-4">
              Here are some technologies that I have been working with:
            </p>
            <ul className="mt-4 grid w-2/3 grid-cols-2">
              {technologies.map((skill) => (
                <FadeIn key={skill}>
                  <Item text={skill} classes="font-mono" />
                </FadeIn>
              ))}
            </ul>
          </Section>
        </FadeIn>

        <FadeIn>
          <Section htmlId="experience" number={2} title="Where I've worked">
            <WorkExperience />
          </Section>
        </FadeIn>

        <FadeIn>
          <Section htmlId="projects" number={3} title="Some things I've built">
            <div className="mt-4 grid grid-cols-3 place-items-stretch gap-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  desc={project.desc}
                  stack={project.stack}
                  links={project.links}
                />
              ))}
            </div>
          </Section>
        </FadeIn>
      </div>
    </div>
  );
}
