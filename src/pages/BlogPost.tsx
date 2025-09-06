import { BlogLayout } from "@/components/BlogLayout";
import SamplePost from "@/content/sample-post.mdx";

const BlogPost = () => {
  return (
    <BlogLayout 
      title="Getting Started with Modern Web Development"
      date="March 15, 2024"
      readTime="8 min read"
    >
      <SamplePost />
    </BlogLayout>
  );
};

export default BlogPost;