import { LineChart, Database, BrainCircuit, Shield } from "lucide-react";
import { MlCapability, MlTechStackItem } from "@/interfaces/machineLearning";

export const mlCapabilities: MlCapability[] = [
  {
    title: "Predictive Analytics Models",
    desc: "Custom regression and time-series forecasting algorithms that analyze past metrics to forecast future outcomes.",
    icon: LineChart,
  },
  {
    title: "Data Classification Networks",
    desc: "Supervised and unsupervised classification pipelines that automatically tag, organize, and filter large datasets.",
    icon: Database,
  },
  {
    title: "Custom Deep Learning",
    desc: "Multi-layered neural network systems configured for specialized NLP or regression tasks.",
    icon: BrainCircuit,
  },
  {
    title: "Anomaly Detection",
    desc: "Deploying automated model thresholds to scan transactional streams and flag deviations or security risks.",
    icon: Shield,
  },
];

export const mlTechStack: MlTechStackItem[] = [
  { name: "TensorFlow / Keras", desc: "Neural network configurations" },
  { name: "PyTorch", desc: "Scientific model development" },
  { name: "Scikit-Learn", desc: "Regression & classification" },
  { name: "Pandas / NumPy", desc: "Large data structure processing" },
  { name: "AWS SageMaker", desc: "Cloud training pipeline hosts" },
  { name: "MLflow", desc: "Model lifecycle monitoring" },
];
