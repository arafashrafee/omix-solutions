import type { Metadata } from "next";
import BlogContent from "./blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and industry trends from the OMIX Solutions team. Stay informed on software development, digital marketing, and design.",
};

export default function BlogPage() {
  return <BlogContent />;
}
