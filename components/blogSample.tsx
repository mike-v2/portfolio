import Link from 'next/link';

import { format } from 'date-fns';
import { LuMoveUpRight } from 'react-icons/lu';

import { BlogPost } from '@/types/postData';
import CloudImage from '@/components/cloudImage';

export default function BlogSample({
  selectedBlogs,
}: {
  selectedBlogs: BlogPost[];
}) {
  return (
    <div className='mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-4 p-6 md:grid-cols-2'>
      {selectedBlogs &&
        selectedBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
}

function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <article className='group mx-auto aspect-square w-[30rem] overflow-hidden text-white transition-colors duration-500 text-shadow hover:text-primary'>
      <Link
        href={`/blog/${blog.id}`}
        className='relative flex h-full flex-col justify-end p-8'
        aria-labelledby={`blog-${blog.id}-title`}
      >
        <div className='absolute inset-0 overflow-hidden rounded-2xl transition-all duration-500 group-hover:scale-125'>
          <CloudImage src={blog.imagePath} />
        </div>

        <div className='z-10'>
          <div className='absolute right-12 top-12 flex h-16 w-16 scale-0 items-center justify-center rounded-full bg-base-100 text-3xl text-gray-700 transition-all duration-500 group-hover:scale-100'>
            <LuMoveUpRight />
          </div>

          <time dateTime={format(blog.date, 'yyyy-MM-dd')}>
            {format(blog.date, 'MMMM d, yyyy')}
          </time>
          <h3 id={`blog-${blog.id}-title`} className='text-4xl font-semibold'>
            {blog.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}
