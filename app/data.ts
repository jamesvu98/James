export const projects: {
  title: string;
  desc: string;
  stack: string[];
  links: { github: string; live?: string };
}[] = [
  {
    title: "James Vu",
    desc: "The website you're looking at right now :)",
    stack: ["Typescript", "React", "Remix", "TailwindCSS"],
    links: {
      github: "https://github.com/jamesvu98/personal-website",
    },
  },
];

// ======================================================================================

export const technologies = [
  "Kubernetes",
  "Golang",
  "Typescript / Javascript",
  "AWS",
  "Python",
  "Terraform",
];

// ======================================================================================

export const work_exp: Record<
  string,
  { duration: string; role: string; points: string[]; link: string }
> = {
  "Zip Co": {
    duration: "MAR 2023 - PRESENT",
    role: "Platform Engineer",
    points: [
      "Developed, socalised, and onboarded disaster recovery solutions and playbooks to developer teams for their infrastructure resources (S3, DynamoDB, Elasticache, Opensearch, Gitlab projects and secrets). Leveraged both AWS-native backup capabilities to improve our DR capabilities as well as custom solutions built using Typescript and Golang to address gaps existing native capabilities.",
      "Leveraged event-based automation to create flows that allowed developers to indepedently read/write their application secrets. This removed the need for devs to share secrets to the Platform team to manually update the Vault server, uplifting the security, reliability, and efficiency of our application secrets management process.",
      "Planned and implemented migration of existing Cloudflare firewall rules to the new Cloudflare Ruleset Engine due to deprecation of existing firewall rules. Also made improvements to our edge-engineering monorepo to unify provider versions across all modules in the repository.",
    ],
    link: "https://zip.co",
  },
  ATO: {
    duration: "FEB 2021 - MAR 2023",
    role: "Cloud Engineer",
    points: [
      "Automated testing of new cloud infrastructure deployments using Python to ensure that they are configured correctly as per requirements. Test suite covered resources that were provisioned from a variety of AWS services including EC2, S3, IAM, Route53, EFS, and KMS.",
      "Developed automated test suite using Open Policy Agent that enforced policies defined for newly provisioned infrastructure from Terraform. Significantly simplified a major component of existing IaC testing framework and decoupled policy enforcement from IaC development",
      "Uplifted security of cloud platform with IaC. Security improvements included leveraging Gateway Endpoints to restrict traffic to S3 buckets containing sensitive data. Leveraged KMS to enable role separation between resource.",
      "Created PowerShell script to automate downloads of R packages to collate R package and RPM dependencies. Leveraged HTTP requests and tree data structure traversal algorithms to efficiently download packages and their dependencies. This allowed for automated flagging of missing dependencies for required R packages.",
    ],
    link: "https://ato.gov.au",
  },
};
