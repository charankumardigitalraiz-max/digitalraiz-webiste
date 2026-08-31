import { create } from "zustand";
import { ProjectItem } from "@/interfaces/portfolio";
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES, getPortfolioCategories } from "@/data/portfolioData";

export type ViewMode = "grid" | "simulator" | "list";
export type ProjectType = "all" | "mobile" | "web";
export const INITIAL_PROJECT_LIMIT = 10;

interface PortfolioStoreState {
  // Data State
  projects: ProjectItem[];
  categories: string[];

  // Client UI State
  selectedCategory: string;
  selectedType: ProjectType;
  viewMode: ViewMode;
  searchQuery: string;
  modalProject: ProjectItem | null;
  simActiveIndex: number;
  simPaused: boolean;
  displayLimit: number;

  // Data & State Actions
  setProjects: (projects: ProjectItem[]) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedType: (type: ProjectType) => void;
  setViewMode: (mode: ViewMode) => void;
  setSearchQuery: (query: string) => void;
  setModalProject: (project: ProjectItem | null) => void;
  setSimActiveIndex: (index: number | ((prev: number) => number)) => void;
  setSimPaused: (paused: boolean) => void;
  setDisplayLimit: (limit: number | ((prev: number) => number)) => void;
  loadMoreProjects: (step?: number) => void;
  resetDisplayLimit: () => void;
  resetFilters: () => void;
}

export const usePortfolioStore = create<PortfolioStoreState>((set) => ({
  // Initialized directly with data module
  projects: PORTFOLIO_PROJECTS,
  categories: PORTFOLIO_CATEGORIES,

  selectedCategory: "ALL",
  selectedType: "all",
  viewMode: "grid",
  searchQuery: "",
  modalProject: null,
  simActiveIndex: 0,
  simPaused: false,
  displayLimit: INITIAL_PROJECT_LIMIT,

  setProjects: (projects) =>
    set({
      projects,
      categories: getPortfolioCategories(projects),
    }),
  setSelectedCategory: (category) => set({ selectedCategory: category, displayLimit: INITIAL_PROJECT_LIMIT }),
  setSelectedType: (type) => set({ selectedType: type, simActiveIndex: 0, displayLimit: INITIAL_PROJECT_LIMIT }),
  setViewMode: (mode) => set({ viewMode: mode }),
  setSearchQuery: (query) => set({ searchQuery: query, displayLimit: INITIAL_PROJECT_LIMIT }),
  setModalProject: (project) => set({ modalProject: project }),
  setSimActiveIndex: (index) =>
    set((state) => ({
      simActiveIndex: typeof index === "function" ? index(state.simActiveIndex) : index,
    })),
  setSimPaused: (paused) => set({ simPaused: paused }),
  setDisplayLimit: (limit) =>
    set((state) => ({
      displayLimit: typeof limit === "function" ? limit(state.displayLimit) : limit,
    })),
  loadMoreProjects: (step = 10) =>
    set((state) => ({
      displayLimit: state.displayLimit + step,
    })),
  resetDisplayLimit: () => set({ displayLimit: INITIAL_PROJECT_LIMIT }),
  resetFilters: () =>
    set({
      selectedCategory: "ALL",
      selectedType: "all",
      searchQuery: "",
      displayLimit: INITIAL_PROJECT_LIMIT,
    }),
}));

// Centralized Portfolio Data Helpers
export function getAllPortfolioProjects(): ProjectItem[] {
  return PORTFOLIO_PROJECTS;
}

export function getWebProjects(projects: ProjectItem[] = PORTFOLIO_PROJECTS, limit = 10): ProjectItem[] {
  return projects.filter((p) => p.type === "web").slice(0, limit);
}

export function getMobileProjects(projects: ProjectItem[] = PORTFOLIO_PROJECTS, limit = 10): ProjectItem[] {
  return projects.filter((p) => p.type === "mobile").slice(0, limit);
}
