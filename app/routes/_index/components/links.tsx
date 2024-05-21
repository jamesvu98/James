import { Link } from "@remix-run/react";
import GithubIcon from "~/assets/github.png";
import LinkedInIcon from "~/assets/linkedin.png";

export function ExternalLinks() {
  return (
    <div className="fixed bottom-0 left-16 flex flex-col items-center">
      <ul className="flex flex-col items-center gap-4">
        {[
          ["https://github.com/jamesvu98", GithubIcon, "github-external"],
          [
            "https://www.linkedin.com/in/james-v-383427120/",
            LinkedInIcon,
            "linkedin-external",
          ],
        ].map((link) => (
          <li key={link[2]} className="h-9 w-9 hover:hue-rotate-[-43deg]">
            <Link to={link[0]} target="_blank" rel="noreferrer">
              <img src={link[1]} alt={link[2]} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 h-40 w-[2px] rounded-full bg-slate-300/30"></div>
    </div>
  );
}
