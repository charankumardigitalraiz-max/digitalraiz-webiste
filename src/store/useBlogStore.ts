import { create } from "zustand";
import { BlogPost } from "@/interfaces/blog";
import { blogPostsData, getBlogCategories } from "@/data/blogsData";

export const INITIAL_POST_LIMIT = 10;

interface BlogStoreState {
  // Data State
  posts: BlogPost[];
  categories: string[];

  // Client UI State
  selectedCategory: string;
  searchQuery: string;
  displayLimit: number;

  // Actions
  setPosts: (posts: BlogPost[]) => void;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  setDisplayLimit: (limit: number | ((prev: number) => number)) => void;
  loadMorePosts: (step?: number) => void;
  resetFilters: () => void;
}

export const useBlogStore = create<BlogStoreState>((set) => ({
  posts: blogPostsData,
  categories: getBlogCategories(blogPostsData),

  selectedCategory: "All Insights",
  searchQuery: "",
  displayLimit: INITIAL_POST_LIMIT,

  setPosts: (posts) =>
    set({
      posts,
      categories: getBlogCategories(posts),
    }),
  setSelectedCategory: (category) =>
    set({
      selectedCategory: category,
      displayLimit: INITIAL_POST_LIMIT,
    }),
  setSearchQuery: (query) =>
    set({
      searchQuery: query,
      displayLimit: INITIAL_POST_LIMIT,
    }),
  setDisplayLimit: (limit) =>
    set((state) => ({
      displayLimit: typeof limit === "function" ? limit(state.displayLimit) : limit,
    })),
  loadMorePosts: (step = 10) =>
    set((state) => ({
      displayLimit: state.displayLimit + step,
    })),
  resetFilters: () =>
    set({
      selectedCategory: "All Insights",
      searchQuery: "",
      displayLimit: INITIAL_POST_LIMIT,
    }),
}));

// Centralized Blog Data Helpers
export function getAllBlogPosts(): BlogPost[] {
  return blogPostsData;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPostsData.find((p) => p.slug === slug || p.id === slug);
}

export function getRelatedBlogPosts(currentSlug: string, count = 3): BlogPost[] {
  return blogPostsData.filter((p) => p.slug !== currentSlug).slice(0, count);
}
