import { Link } from "@remix-run/react";
import ExternalIcon from "~/assets/external-link";
import FolderSvg from "~/assets/folder-icon";
import GithubIcon from "~/assets/github";
import { projects } from "~/data";

export function ProjectCard({
  title,
  desc,
  stack,
  links,
}: (typeof projects)[number]) {
  return (
    <div className="flex flex-col rounded-xl bg-lightNavy p-6">
      <div className="flex items-center justify-between">
        <FolderSvg />
        <div className="flex">
          {links.github && (
            <Link to={links.github} target="_blank" rel="noreferrer">
              <GithubIcon />
            </Link>
          )}
          {links.live && (
            <Link to={links.live} target="_blank" rel="noreferrer">
              <ExternalIcon link={links.live} />
            </Link>
          )}
        </div>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-300">{title}</h3>
      <p className="my-8">{desc}</p>
      <p className="mt-auto font-mono text-sm text-slate-500">
        {stack.join(", ")}
      </p>
    </div>
  );
}
