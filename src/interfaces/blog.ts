export interface AuthorInfo {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogContentSection {
  heading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  subtitle?: string;
  content: BlogContentSection[];
  takeaways: string[];
  category: "Digital Marketing" | "Web Development" | "SEO & Search" | "Mobile & AI";
  date: string;
  readTime: string;
  author: AuthorInfo;
  img: string;
  isFeatured?: boolean;
  tags: string[];
}

export type BlogPostItem = BlogPost;
