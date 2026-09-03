import {
  Database,
  Workflow,
  Cloud,
  BarChart3,
  LineChart,
  ShieldCheck,
  Users,
  Zap,
  Activity,
  Lock,
} from "lucide-react";
import {
  DataTechItem,
  DataArchitectureTier,
  DataPipelinePhase,
  DataPillar,
} from "@/interfaces/dataAnalytics";

export const heroFeatureBullets: string[] = [
  "Sub-second Snowflake & BigQuery SQL query latency",
  "Executive PowerBI & Tableau interactive scorecards",
  "Apache Spark & Kafka real-time event streaming pipelines",
  "SOC2 & GDPR enterprise data governance & RBAC compliance",
];

export const dataTechStack: DataTechItem[] = [
  { name: "Snowflake", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/snowflake/snowflake-original.svg" },
  { name: "Databricks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" },
  { name: "PowerBI", icon: "https://cdn.simpleicons.org/powerbi/F2C811" },
  { name: "Tableau", icon: "https://cdn.simpleicons.org/tableau/E97627" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" },
  { name: "Google BigQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
  { name: "AWS Redshift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
];

export const dataArchitectureTiers: DataArchitectureTier[] = [
  {
    step: "01",
    badge: "Executive Layer",
    title: "Business Intelligence & PowerBI Scorecards",
    overview: "Transform fragmented corporate data into interactive executive dashboards, automated daily KPI audits, and responsive mobile BI scorecards.",
    tools: ["PowerBI", "Tableau", "DAX", "SQL", "Looker"],
    image: "/data-analytics-and-bi/powerbi-isometric-dashboard.png",
  },
  {
    step: "02",
    badge: "Storage Layer",
    title: "Snowflake & BigQuery Cloud Data Warehousing",
    overview: "Architect zero-latency cloud data warehouses with star-schema dimensional modeling, dbt transformations, and automated cost controls.",
    tools: ["Snowflake", "Google BigQuery", "AWS Redshift", "dbt"],
    image: "/data-analytics-and-bi/cloud-warehouse-snowflake-hub.png",
  },
  {
    step: "03",
    badge: "Ingestion Layer",
    title: "Real-time Streaming & Apache Kafka ETL Pipelines",
    overview: "Deploy fault-tolerant streaming pipelines to capture live transactional events, website clicks, and IoT telemetry data with zero data loss.",
    tools: ["Apache Kafka", "Apache Spark", "Airflow", "Python"],
    image: "/data-analytics-and-bi/high-speed-data-pipeline-stream.png",
  },
  {
    step: "04",
    badge: "Analytics Layer",
    title: "Predictive Machine Learning & AI Forecasts",
    overview: "Convert historical data into predictions. Build custom ML models deployed on Databricks to forecast customer churn, demand, and revenue.",
    tools: ["Python", "Databricks", "Scikit-Learn", "Pandas"],
    image: "/data-analytics-and-bi/ai-predictive-analytics-brain-core.png",
  },
  {
    step: "05",
    badge: "Identity Layer",
    title: "Customer 360 & Single Customer View Profiles",
    overview: "Consolidate fragmented customer touchpoints from web, mobile apps, and CRM into single customer view (SCV) profiles for targeted retention.",
    tools: ["PostgreSQL", "Mixpanel", "Segment", "Python"],
    image: "/data-analytics-and-bi/customer-360-identity-hub.png",
  },
  {
    step: "06",
    badge: "Security Layer",
    title: "Data Governance, RBAC & SOC2 Compliance",
    overview: "Implement role-based access control (RBAC), automated PII data masking, and end-to-end data lineage tracking for SOC2 and GDPR compliance.",
    tools: ["Great Expectations", "dbt Lineage", "Grafana", "Slack API"],
    image: "/data-analytics-and-bi/csuite-white-square-completely-different.png",
  },
];

export const dataPipelinePhases: DataPipelinePhase[] = [
  {
    step: "01",
    phase: "Data Audit & Source Discovery",
    duration: "Week 1",
    icon: Database,
    overview: "Comprehensive audit of legacy databases, API streams, and executive BI reporting goals.",
    deliverables: ["Legacy Source Assessment", "Data Lineage Blueprint", "KPI Catalog"],
    tools: ["PostgreSQL", "AWS S3", "Draw.io"],
  },
  {
    step: "02",
    phase: "Streaming Ingestion & ETL Pipelines",
    duration: "Week 2 - 3",
    icon: Workflow,
    overview: "Deployment of high-velocity batch & real-time event streams with zero data loss.",
    deliverables: ["Kafka Event Stream Setups", "Airflow DAG Orchestration", "Schema Validation"],
    tools: ["Apache Kafka", "Apache Spark", "Airflow"],
  },
  {
    step: "03",
    phase: "Cloud Data Warehouse Architecture",
    duration: "Week 4 - 5",
    icon: Cloud,
    overview: "Structuring Star & Snowflake schemas in Snowflake or BigQuery for sub-second SQL queries.",
    deliverables: ["Star Schema Dimensional Models", "dbt Transformations", "Cost Control Alerts"],
    tools: ["Snowflake", "BigQuery", "dbt"],
  },
  {
    step: "04",
    phase: "Executive BI Scorecards & PowerBI",
    duration: "Week 6",
    icon: BarChart3,
    overview: "Building responsive PowerBI & Tableau dashboards with automated drill-downs & mobile views.",
    deliverables: ["Executive PowerBI Scorecards", "Scheduled PDF Reports", "DAX Formulas"],
    tools: ["PowerBI", "Tableau", "Looker"],
  },
  {
    step: "05",
    phase: "Predictive ML & AI Ingestion",
    duration: "Week 7",
    icon: LineChart,
    overview: "Training machine learning algorithms for automated sales, customer churn & demand forecasting.",
    deliverables: ["Customer Churn ML Models", "Demand Forecast Pipelines", "Databricks Deployments"],
    tools: ["Python", "Databricks", "Scikit-Learn"],
  },
  {
    step: "06",
    phase: "Governance & 24/7 SLA Alerts",
    duration: "Continuous",
    icon: ShieldCheck,
    overview: "Real-time monitoring of data freshness, pipeline health, query speed, and incident alerts.",
    deliverables: ["Data Quality Webhooks", "Slack Anomaly Alerts", "24/7 Ops Support"],
    tools: ["Great Expectations", "Grafana", "PagerDuty"],
  },
];

export const talentSquadCheckpoints: string[] = [
  "48-Hour Instant Squad Onboarding",
  "100% IP Ownership & NDA Protection",
  "Direct Integration into Slack & Jira Workflows",
];

export const dataPillars: DataPillar[] = [
  { title: "100% Data Integrity", desc: "Automated schema drift & null checks", icon: ShieldCheck },
  { title: "48-Hr Squad Match", desc: "Instant pre-vetted data engineer onboarding", icon: Users },
  { title: "Zero-Latency Queries", desc: "Columnar indexing & sub-second execution", icon: Zap },
  { title: "CI/CD Data DevOps", desc: "dbt data build tool & Airflow triggers", icon: Workflow },
  { title: "Real-Time Streaming", desc: "Apache Kafka & Spark event streams", icon: Activity },
  { title: "SOC2 & GDPR Compliance", desc: "RBAC security & automated data masking", icon: Lock },
  { title: "Live BI Dashboards", desc: "Real-time PowerBI & Tableau scorecards", icon: BarChart3 },
  { title: "24/7 SLA Pipeline Support", desc: "Proactive incident monitoring & alert fixes", icon: Database },
];
