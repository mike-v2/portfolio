import Image from 'next/image';
import Link from 'next/link';

import { format } from 'date-fns';
import { LuMoveUpRight } from 'react-icons/lu';

import getBlogPostBySlug from '@/app/blog/data/getBlogPost';

export default function BlogSample({ ids }: { ids: string[] }) {
  const selectedBlogs = ids.map((id) => getBlogPostBySlug(id));

  return (
    <div className='mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-4 p-6 md:grid-cols-2'>
      {selectedBlogs &&
        selectedBlogs.map((blog) => (
          <Link
            key={blog.title}
            href={`/blog/${blog.id}`}
            className='group relative flex h-96 basis-full flex-col justify-end overflow-hidden p-8 text-white transition-colors duration-500 text-shadow hover:text-primary'
          >
            <Image
              src={blog.imagePath ?? '/images/blog-journal.jpg'}
              alt={blog.title}
              height={0}
              width={0}
              fill
              sizes='100vw'
              className='rounded-2xl object-cover transition-all duration-500 group-hover:scale-125'
            />

            <div className='z-10'>
              <div className='absolute right-12 top-12 flex h-16 w-16 scale-0 items-center justify-center rounded-full bg-base-100 text-3xl text-gray-700 transition-all duration-500 group-hover:scale-100'>
                <LuMoveUpRight />
              </div>

              <div>{format(blog.date, 'MMMM d, yyyy')}</div>
              <h2 className='text-4xl font-semibold'>{blog.title}</h2>
            </div>
          </Link>
        ))}
    </div>
  );
}
