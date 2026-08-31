export interface ProjectMetrics {
  val1?: string;
  label1?: string;
  val2?: string;
  label2?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  slug?: string;
  category: string;
  type: "mobile" | "web";
  tag?: string;
  img: string;
  logo?: string;
  desc: string;
  features: string[];
  tech: string[];
  url: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  metrics?: ProjectMetrics;
}
