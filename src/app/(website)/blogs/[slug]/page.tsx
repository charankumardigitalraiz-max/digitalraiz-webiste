import { redirect } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LegacyBlogSlugPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/insights/blog/${slug}`);
}
