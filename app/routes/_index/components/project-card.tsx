import { Link } from "@remix-run/react";
import ExternalIcon from "~/assets/external-link.png";
import FolderSvg from "~/assets/folder-icon";
import GithubIcon from "~/assets/github.png";
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
            <Link
              to={links.github}
              className="h-7 w-7 hover:hue-rotate-[-43deg]"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt={`${title} github link`} />
            </Link>
          )}
          {links.live && (
            <Link
              to={links.live}
              className="h-7 w-7 hover:hue-rotate-[-43deg]"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ExternalIcon} alt={`${title} external link`} />
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
