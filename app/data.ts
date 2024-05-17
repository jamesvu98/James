export const technologies = [
  "Kubernetes",
  "Golang",
  "Typescript / Javascript",
  "AWS",
  "Python",
  "Terraform",
];

export const work_exp: Record<
  string,
  { duration: string; role: string; points: string[]; link: string }
> = {
  "Zip Co": {
    duration: "MAR 2023 - PRESENT",
    role: "Platform Engineer",
    points: [
      "Planned and implemented migration of existing Cloudflare firewall rules to the new Cloudflare Ruleset Engine due to deprecation of existing firewall rules. Also made improvements to our edge-engineering monorepo to unify provider versions across all modules in the repository.",
    ],
    link: "https://zip.co",
  },
  ATO: {
    duration: "FEB 2021 - MAR 2023",
    role: "Data Engineer",
    points: [
      "Automated testing of new cloud infrastructure deployments using Python to ensure that they are configured correctly as per requirements. Test suite covered resources that were provisioned from a variety of AWS services including EC2, S3, IAM, Route53, EFS, and KMS.",
      "Developed automated test suite using Open Policy Agent that enforced policies defined for newly provisioned infrastructure from Terraform. Significantly simplified a major component of existing IaC testing framework and decoupled policy enforcement from IaC development",
      "Uplifted security of cloud platform with IaC. Security improvements included leveraging Gateway Endpoints to restrict traffic to S3 buckets containing sensitive data. Leveraged KMS to enable role separation between resource",
      "Created PowerShell script to automate downloads of R packages to collate R package and RPM dependencies. Leveraged HTTP requests and tree data structure traversal algorithms to efficiently download packages and their dependencies. This allowed for automated flagging of missing dependencies for required R packages.",
    ],
    link: "https://ato.gov.au",
  },
};

export const projects: {
  title: string;
  desc: string;
  stack: string[];
  links: { github: string; live?: string };
}[] = [
  {
    title: "James Vu",
    desc: "My personal website :)",
    stack: ["Typescript", "Remix"],
    links: {
      github: "https://github.com/jamesvu98/personal-website",
      live: "https://jamesvu.com",
    },
  },
  {
    title: "test",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    stack: ["Typescript/Javascript", "Remix"],
    links: { github: "https://github.com/jamesvu98/personal-website" },
  },
  {
    title: "test2",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    stack: ["Typescript/Javascript", "Remix"],
    links: { github: "https://github.com/jamesvu98/personal-website" },
  },
];
