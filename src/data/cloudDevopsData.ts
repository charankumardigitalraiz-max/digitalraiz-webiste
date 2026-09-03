import {
  Cloud,
  Server,
  Globe,
  Layers,
  GitBranch,
  Terminal,
} from "lucide-react";
import {
  DevopsMatrixItem,
  PipelineStep,
  CloudCorePillar,
} from "@/interfaces/cloudDevops";

export const devopsMatrix: DevopsMatrixItem[] = [
  {
    name: "AWS Cloud Platform",
    desc: "EC2, S3, EKS, Lambda, CloudFront",
    icon: Cloud,
    gradient: "from-amber-500 via-orange-500 to-indigo-600",
    tags: ["EC2", "S3", "EKS", "Lambda", "CloudFront"],
  },
  {
    name: "Microsoft Azure",
    desc: "AKS, App Services, Azure DevOps",
    icon: Server,
    gradient: "from-blue-500 via-indigo-600 to-purple-600",
    tags: ["AKS", "App Services", "Azure DevOps"],
  },
  {
    name: "Google Cloud (GCP)",
    desc: "GKE, Compute Engine, Cloud Run",
    icon: Globe,
    gradient: "from-emerald-500 via-teal-600 to-indigo-600",
    tags: ["GKE", "Compute Engine", "Cloud Run"],
  },
  {
    name: "Kubernetes & Docker",
    desc: "Container Orchestration & Scaling",
    icon: Layers,
    gradient: "from-indigo-600 via-violet-600 to-cyan-500",
    tags: ["Microservices", "Helm", "Istio Mesh", "HPA"],
  },
  {
    name: "CI/CD Automation",
    desc: "GitHub Actions, GitLab CI, Jenkins",
    icon: GitBranch,
    gradient: "from-pink-500 via-rose-500 to-violet-600",
    tags: ["GitHub Actions", "GitLab CI", "Jenkins"],
  },
  {
    name: "Terraform & Ansible",
    desc: "Declarative Infrastructure as Code",
    icon: Terminal,
    gradient: "from-purple-600 via-pink-600 to-indigo-600",
    tags: ["Terraform", "Ansible", "OpenTofu", "IaC"],
  },
];

export const pipelineSteps: PipelineStep[] = [
  { num: "01", name: "Source Commit", detail: "Git Trigger" },
  { num: "02", name: "Automated Build", detail: "Docker & Lint" },
  { num: "03", name: "Security Audit", detail: "Vulnerability Scan" },
  { num: "04", name: "Canary Rollout", detail: "Zero Downtime" },
  { num: "05", name: "Production Active", detail: "99.99% Uptime" },
];

export const cloudCorePillars: CloudCorePillar[] = [
  {
    step: "01",
    title: "Cloud Architecture & Migration",
    desc: "Architecting, migrating, and optimizing multi-cloud environments (AWS, Azure, GCP) tailored to changing workloads and operational priorities.",
    icon: Cloud,
    gradient: "from-indigo-600 via-purple-600 to-indigo-700",
    accentBorder: "group-hover:border-indigo-400",
  },
  {
    step: "02",
    title: "Automated Release Pipelines",
    desc: "Creating automated CI/CD deployment pipelines, repeatable environment workflows, and continuous delivery systems for release consistency.",
    icon: GitBranch,
    gradient: "from-pink-500 via-rose-500 to-violet-600",
    accentBorder: "group-hover:border-pink-400",
  },
  {
    step: "03",
    title: "Containerization & Kubernetes",
    desc: "Microservices orchestration using Docker and Kubernetes for high-availability cluster management, fault tolerance, and auto-scaling.",
    icon: Layers,
    gradient: "from-violet-600 via-indigo-600 to-cyan-600",
    accentBorder: "group-hover:border-violet-400",
  },
  {
    step: "04",
    title: "Infrastructure as Code (IaC)",
    desc: "Automated cloud provisioning using Terraform, CloudFormation, and Ansible to eliminate manual steps and enforce repeatability.",
    icon: Terminal,
    gradient: "from-indigo-600 via-pink-600 to-purple-600",
    accentBorder: "group-hover:border-purple-400",
  },
];
