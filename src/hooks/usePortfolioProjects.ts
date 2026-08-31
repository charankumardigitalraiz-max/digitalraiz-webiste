import { useQuery } from "@tanstack/react-query";
import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";
import { ProjectItem } from "@/interfaces/portfolio";

const fetchPortfolioProjects = async (): Promise<ProjectItem[]> => {
  return PORTFOLIO_PROJECTS;
};

export function usePortfolioProjects() {
  return useQuery({
    queryKey: ["portfolioProjects"],
    queryFn: fetchPortfolioProjects,
    staleTime: 1000 * 60 * 10,
  });
}
