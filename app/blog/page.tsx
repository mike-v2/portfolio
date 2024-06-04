import { blogCount } from '@/app/blog/data/getBlogPost';
import BlogSample from '@/components/blogSample';

let allBlogIndexes: string[] = [];
for (let i = 0; i < blogCount; i++) {
  allBlogIndexes.push(i.toString());
}

export default function Blog() {
  return (
    <main>
      <div className='bg-gray-800'>
        <h1 className='p-24 text-center text-[clamp(4rem,12vw,9rem)] text-primary'>
          Blog
        </h1>
      </div>
      <BlogSample ids={allBlogIndexes} />
    </main>
  );
}
