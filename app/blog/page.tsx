import { blogPosts } from '@/app/blog/data/getBlogPost';
import BlogSample from '@/components/blogSample';

export default function Blog() {
  return (
    <main>
      <h1 className='bg-zinc-800 p-24 text-center text-[clamp(4rem,12vw,9rem)] text-primary'>
        Blog
      </h1>
      <BlogSample selectedBlogs={blogPosts} />
    </main>
  );
}
