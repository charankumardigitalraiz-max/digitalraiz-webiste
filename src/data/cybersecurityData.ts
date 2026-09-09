import {
  Key,
  Terminal,
  Activity,
  Cloud,
  ShieldAlert,
  FileCheck,
  Eye,
  Lock,
  Cpu,
  ShieldCheck,
  Users,
  Layers,
  Zap,
  Globe,
  Smartphone,
  Server,
  Network,
  Search,
  FileText,
  AlertTriangle,
  Code
} from "lucide-react";
import {
  SecurityTechItem,
  SecurityPillarItem,
  DefensePipelineNode,
  SecurityAssurancePillar,
} from "@/interfaces/cybersecurity";

export interface PDFCapabilityItem {
  title: string;
  category: string;
  desc: string;
  icon: any;
}

// 9 Core Capabilities from Official Landing Page PDF Document
export const pdfCybersecurityCapabilities: PDFCapabilityItem[] = [
  {
    title: "Web Application Security",
    category: "APPLICATION SECURITY",
    desc: "Comprehensive protection for web platforms, addressing application behavior, authentication, authorization, APIs, and connected microservices.",
    icon: Globe,
  },
  {
    title: "Mobile Application Security",
    category: "MOBILE DEFENSE",
    desc: "Rigorous security evaluations across iOS & Android apps, securing local data storage, auth tokens, third-party SDKs, and mobile API communication.",
    icon: Smartphone,
  },
  {
    title: "Cloud Security",
    category: "INFRASTRUCTURE GUARD",
    desc: "Essential protection for workloads, containers, and data platforms across cloud environments to maintain control, visibility, and operational resilience.",
    icon: Cloud,
  },
  {
    title: "Network Security",
    category: "PERIMETER & TRAFFIC",
    desc: "Safeguarding corporate perimeters, internal segments, VPN gateways, and micro-segmentation architectures against unauthorized access and traffic spoofing.",
    icon: Network,
  },
  {
    title: "Vulnerability Assessment",
    category: "EXPOSURE IDENTIFICATION",
    desc: "Structured examination of technology landscapes, scanning applications, databases, and networks to discover security weaknesses before exploitation.",
    icon: Search,
  },
  {
    title: "Security Testing",
    category: "OFFENSIVE SIMULATION",
    desc: "Systematic automated and manual testing evaluating confidentiality, integrity, availability, and user trust across all digital environments.",
    icon: Terminal,
  },
  {
    title: "Information Security",
    category: "DATA ASSET SHIELD",
    desc: "Protecting sensitive enterprise data, customer PII, internal intellectual property, and critical databases from unauthorized access or exfiltration.",
    icon: Lock,
  },
  {
    title: "Risk Assessment",
    category: "STRATEGIC GOVERNANCE",
    desc: "Prioritizing remediation efforts based on exposure impact, business continuity requirements, and technology realities to make informed decisions.",
    icon: AlertTriangle,
  },
  {
    title: "Application Security",
    category: "SECURE ARCHITECTURE",
    desc: "Embedding security practices earlier in the development lifecycle to ensure applications are built securely from ground level to production deployment.",
    icon: Code,
  },
];

// Content Blocks from PDF Document
export const pdfHeroContent = {
  badge: "Cybersecurity & Digital Security Solutions",
  title: "Cybersecurity Services Engineered for Trust, Resilience and Digital Continuity",
  subtitle: "Security is no longer a technical consideration that sits behind the business. It is part of the experience a business creates, the systems it operates and the trust it earns.",
  paragraphs: [
    "As applications become more connected and organizations increasingly depend on cloud infrastructure, APIs, data platforms and digital workflows, the security landscape becomes more complex. A single overlooked vulnerability can extend far beyond a technical issue—affecting operations, customer confidence, sensitive information and business continuity.",
    "Digital Raiz provides cybersecurity services and digital security solutions designed to help organizations understand their exposure, strengthen their technology environments and build greater resilience against evolving cyber risks.",
    "Our approach looks beyond isolated vulnerabilities. We consider how applications, infrastructure, data, identities and integrations interact to create a broader security environment."
  ]
};

export const pdfAttackSurfaceContent = {
  title: "Turning the Attack Surface Into a Strategic Security Perspective",
  paragraphs: [
    "Every digital environment has an attack surface. The challenge is knowing where exposure exists before someone else discovers it.",
    "Digital Raiz helps organizations examine their technology landscape through structured cybersecurity assessment, vulnerability assessment and security testing. We evaluate applications, systems and digital environments to identify weaknesses that could affect confidentiality, integrity, availability or user trust.",
    "Our application security services cover modern web and mobile applications, helping identify security concerns across application behaviour, authentication, authorization, data handling, APIs and connected services. We also consider the relationships between applications and the infrastructure supporting them, because security rarely ends at the application layer."
  ],
  quote: {
    headline: "The objective is not to create fear around technology. It is to create visibility around risk.",
    subtext: "When organizations understand where weaknesses exist, they can prioritize remediation, make better technology decisions and build security into the products and systems they depend on."
  }
};

export const pdfArchitectureContent = {
  title: "Designing Digital Environments Where Security Is Part of the Architecture",
  lead: "Strong cybersecurity is not defined by a single tool, assessment or security layer. It is created through a continuous understanding of technology, people, processes and potential threats.",
  pillars: [
    {
      title: "Technology Lifecycle Protection",
      desc: "Digital Raiz brings a security-first perspective to digital environments, helping businesses consider protection throughout the technology lifecycle—from development and deployment to infrastructure, integration and ongoing operation."
    },
    {
      title: "Tailored Cybersecurity Consulting",
      desc: "Our cybersecurity consulting services are designed around the realities of each organization rather than a one-size-fits-all checklist. We consider the technology landscape, business priorities and areas of exposure to establish practical security priorities."
    },
    {
      title: "Early Product Security & Testing",
      desc: "For businesses building digital products, security can be incorporated earlier through secure development practices and application-focused testing. For organizations operating established environments, security assessments can help uncover areas that require attention as systems, integrations and threats evolve."
    },
    {
      title: "Resilient Cloud Security",
      desc: "Cloud adoption introduces another dimension to this landscape. As workloads, applications and sensitive information move across cloud environments, cloud security becomes an essential part of maintaining control, visibility and resilience."
    }
  ],
  closingGoal: "The goal is a digital environment that can continue operating with confidence—even as technology changes and the threat landscape evolves."
};

export const pdfClosingConclusion = {
  statement: "Digital Raiz approaches cybersecurity as an architectural discipline, helping businesses protect what they build, understand what they expose and create digital environments founded on resilience, trust and long-term continuity."
};

export const securityTechStack: SecurityTechItem[] = [
  { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020" },
  { name: "CrowdStrike", icon: "https://cdn.simpleicons.org/crowdstrike/E01A22" },
  { name: "Palo Alto", icon: "https://cdn.simpleicons.org/paloaltonetworks/FA5822" },
  { name: "Splunk", icon: "https://cdn.simpleicons.org/splunk/000000" },
  { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark/167EFA" },
  { name: "Metasploit", icon: "https://cdn.simpleicons.org/metasploit/195FA5" },
  { name: "Burp Suite", icon: "https://cdn.simpleicons.org/portswigger/FF6600" },
  { name: "Okta", icon: "https://cdn.simpleicons.org/okta/007DC1" },
  { name: "HashiCorp Vault", icon: "https://cdn.simpleicons.org/vault/000000" },
  { name: "Docker Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "AWS GuardDuty", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
];

export const securityPillars: SecurityPillarItem[] = [
  {
    id: "zero-trust",
    step: "01",
    badge: "IDENTITY & ACCESS",
    title: "Zero-Trust Architecture & IAM Governance",
    subtitle: "Never Trust, Always Verify Access Controls",
    overview: "Enforce strict multi-factor authentication (MFA), role-based access control (RBAC), and least-privilege credentials across all cloud apps and microservices.",
    severity: "CRITICAL DEFENSE",
    icon: Key,
    features: [
      "Multi-Factor Authentication (MFA) Enforcement",
      "HashiCorp Vault Dynamic Secrets Rotation",
      "Single Sign-On (SSO) & OAuth2 Protocol Guard",
      "Role-Based Access Control (RBAC) Governance",
    ],
    tools: ["Okta", "HashiCorp Vault", "Azure AD", "Ping Identity"],
    metric: "100% Identity Hardening",
  },
  {
    id: "vapt",
    step: "02",
    badge: "OFFENSIVE SECURITY",
    title: "Vulnerability Assessment & Pentesting (VAPT)",
    subtitle: "Simulated Real-World Cyber Exploitation",
    overview: "Deploy certified red teaming engineers to simulate real-world cyber attacks against web applications, mobile APIs, and cloud networks to patch zero-day exploits.",
    severity: "ZERO-DAY DEFENSE",
    icon: Terminal,
    features: [
      "OWASP Top 10 Web & API Exploitation Scans",
      "Automated & Manual Penetration Testing",
      "CVSS Score Risk Prioritization Reports",
      "Source Code Vulnerability Remediation Scripts",
    ],
    tools: ["Burp Suite", "Metasploit", "OWASP ZAP", "Wireshark"],
    metric: "Zero Open Vulnerabilities",
  },
  {
    id: "soc-siem",
    step: "03",
    badge: "THREAT MONITORING",
    title: "24/7 Managed SOC & SIEM Telemetry",
    subtitle: "Continuous Real-Time Incident Response",
    overview: "Monitor enterprise server log streams with AI-driven SIEM threat detection engines to block unauthorized intrusions, malware, and lateral movements in real time.",
    severity: "24/7 LIVE RADAR",
    icon: Activity,
    features: [
      "Splunk & Elastic SIEM Log Analytics",
      "AI Anomaly Alerting & Intrusion Detection",
      "15-Minute SLA Emergency Incident Response",
      "Slack & PagerDuty Automated Escalation Bots",
    ],
    tools: ["Splunk", "Elastic SIEM", "Wazuh", "PagerDuty"],
    metric: "< 15-Min Response SLA",
  },
  {
    id: "cloud-cspm",
    step: "04",
    badge: "CLOUD HARDENING",
    title: "Cloud Security Posture Management (CSPM)",
    subtitle: "AWS, GCP & Azure Security Governance",
    overview: "Harden multi-cloud environments against misconfigurations, unencrypted S3 buckets, open security groups, and Kubernetes container runtime exploits.",
    severity: "INFRASTRUCTURE GUARD",
    icon: Cloud,
    features: [
      "AWS GuardDuty & Azure Defender Hardening",
      "Kubernetes K8s Container Runtime Audits",
      "Automated S3 & DB Encryption Enforcement",
      "Infrastructure as Code (IaC) Terraform Checks",
    ],
    tools: ["AWS GuardDuty", "Prisma Cloud", "Terraform", "Trivy"],
    metric: "100% Cloud Hardened",
  },
  {
    id: "devsecops",
    step: "05",
    badge: "PIPELINE SECURITY",
    title: "DevSecOps & SAST / DAST Code Guardrails",
    subtitle: "Automated Security Scanning in CI/CD",
    overview: "Embed static (SAST) and dynamic (DAST) code security scanners directly into GitHub Actions and GitLab pipelines to prevent vulnerable code releases.",
    severity: "CODEBASE SHIELD",
    icon: ShieldAlert,
    features: [
      "SonarQube Static Application Security Scans",
      "Snyk Dependency & Vulnerable Package Fixes",
      "GitHub Actions Security Pipeline Guardrails",
      "Automated Container Image Vulnerability Gates",
    ],
    tools: ["SonarQube", "Snyk", "GitHub Actions", "Docker"],
    metric: "Zero Vulnerable Builds",
  },
  {
    id: "compliance",
    step: "06",
    badge: "AUDIT & COMPLIANCE",
    title: "ISO 27001, SOC2 & GDPR Compliance Automation",
    subtitle: "Audit-Ready Enterprise Trust Framework",
    overview: "Streamline compliance evidence collection and automated audit readiness for SOC2 Type II, ISO 27001, HIPAA, and GDPR data privacy standards.",
    severity: "COMPLIANCE VERIFIED",
    icon: FileCheck,
    features: [
      "SOC2 Type II Automated Evidence Collection",
      "ISO 27001 Information Security Blueprint",
      "GDPR PII Data Masking & Encryption Rules",
      "Continuous Compliance Monitoring Dashboards",
    ],
    tools: ["Vanta", "Drata", "AuditBoard", "AWS Security Hub"],
    metric: "100% Audit Ready",
  },
];

export const defensePipelineNodes: DefensePipelineNode[] = [
  { step: "01", title: "Attack Surface Recon", desc: "Dark web credentials & open port mapping", icon: Eye, duration: "Week 1", deliverables: ["Port Mapping Report", "Dark Web Threat Audit"], tools: ["Nmap", "Shodan"] },
  { step: "02", title: "VAPT Pentesting", desc: "OWASP Top 10 automated & manual exploits", icon: Terminal, duration: "Week 2", deliverables: ["OWASP Penetration Report", "Exploit Proofs"], tools: ["Burp Suite", "Metasploit"] },
  { step: "03", title: "Zero-Trust Hardening", desc: "HashiCorp Vault secrets & MFA enforcement", icon: Lock, duration: "Week 3", deliverables: ["MFA Okta Enforcement", "Vault Secrets Setup"], tools: ["Okta", "Vault"] },
  { step: "04", title: "DevSecOps CI/CD", desc: "SonarQube & Snyk static security gates", icon: Cpu, duration: "Week 4", deliverables: ["GitHub Actions Gates", "Snyk Dependency Fixes"], tools: ["SonarQube", "Snyk"] },
  { step: "05", title: "24/7 SIEM Telemetry", desc: "Splunk log streams & 15-min incident SLA", icon: Activity, duration: "Week 5", deliverables: ["Splunk Log Monitoring", "PagerDuty Alerts"], tools: ["Splunk", "Wazuh"] },
  { step: "06", title: "Audit Certification", desc: "ISO 27001 & SOC2 Type II compliance kit", icon: ShieldCheck, duration: "Week 6", deliverables: ["ISO 27001 Evidence Kit", "SOC2 Readiness Audit"], tools: ["Vanta", "Drata"] },
];

export const hackerSquadCheckpoints: string[] = [
  "48-Hour Instant Squad Onboarding",
  "100% Confidentiality & Strict NDA Protection",
  "Direct Integration into Slack & Jira Workflows",
];

export const securityAssurancePillars: SecurityAssurancePillar[] = [
  { title: "100% Zero-Trust Audit", desc: "Identity & secrets management hardening", icon: Lock },
  { title: "48-Hr Squad Match", desc: "Instant pre-vetted OSCP hacker onboarding", icon: Users },
  { title: "OWASP Top 10 Remediation", desc: "Complete vulnerability patching SLA", icon: Terminal },
  { title: "CI/CD DevSecOps", desc: "Automated SAST & container security gates", icon: Layers },
  { title: "24/7 SIEM & SOC Alerts", desc: "Real-time log telemetry & anomaly alerts", icon: Activity },
  { title: "ISO 27001 & SOC2 Audit", desc: "Compliance automation & PII masking", icon: FileCheck },
  { title: "API Vulnerability Scans", desc: "REST & GraphQL pentesting proofs", icon: Zap },
  { title: "15-Min Incident SLA", desc: "Rapid SOC emergency response team", icon: ShieldAlert },
];
