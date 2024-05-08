export const work_exp: Record<
  string,
  { duration: string; role: string; points: string[]; link: string }
> = {
  "Zip Co": {
    duration: "MAR 2023 - PRESENT",
    role: "Platform Engineer",
    points: ["hello world", "goodbye world"],
    link: "https://zip.co",
  },
  ATO: {
    duration: "FEB 2021 - MAR 2023",
    role: "Data Engineer",
    points: [
      "Automated testing of new cloud infrastructure deployments using Python to ensure that they are configured correctly as per requirements. Test suite covered resources that were provisioned from a variety of AWS services including EC2, S3, IAM, Route53, EFS, and KMS.",
    ],
    link: "https://ato.gov.au",
  },
};

export const technologies = [
  "Kubernetes",
  "Golang",
  "Typescript / Javascript",
  "AWS",
  "Python",
  "Terraform",
];
