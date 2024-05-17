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
    <div className="bg-lightNavy flex flex-col rounded-xl p-6">
      <div className="flex items-center justify-between">
        <FolderSvg />
        <div className="flex">
          {links.github && <GithubIcon link={links.github} />}
          {links.live && <ExternalIcon link={links.live} />}
        </div>
      </div>
      <h3 className="mt-6 text-xl font-semibold">{title}</h3>
      <p className="my-8">{desc}</p>
      <p className="mt-auto font-mono text-sm">{stack.join(", ")}</p>
    </div>
  );
}
