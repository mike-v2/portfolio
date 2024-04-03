import Image from 'next/image';
import Link from 'next/link';

import { format } from 'date-fns';
import { LuMoveUpRight } from 'react-icons/lu';

import SectionTitle from '@/components/sectionTitle';

const selectedBlogs = [
  {
    title: 'Deep Dive into Software Testing',
    date: '2023-09-27',
    imagePath: '/images/blog-testing.jpg',
  },
  {
    title: 'Deciphering the Past',
    date: '2023-09-30',
    imagePath: '/images/blog-journal.jpg',
  },
  {
    title: 'Adding Authentication to my Next.js App',
    date: '2023-10-09',
    imagePath: '/images/blog-next-auth.jpg',
  },
  {
    title: 'Login Logic',
    date: '2024-03-18',
    imagePath: '/images/blog-passport-auth.jpg',
  },
];

export default function BlogPreview() {
  return (
    <section>
      <SectionTitle title='Blog' />
      <div className='mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-4 p-6 md:grid-cols-2'>
        {selectedBlogs.map((blog) => (
          <Link
            key={blog.title}
            href='/blog'
            className='group relative flex h-96 basis-full flex-col justify-end overflow-hidden p-8 text-white transition-colors duration-500 hover:text-primary hover:text-shadow'
          >
            <Image
              src={blog.imagePath}
              alt={blog.title}
              height={0}
              width={0}
              fill
              sizes='100vw'
              className='-z-10 rounded-2xl object-cover transition-all duration-500 group-hover:scale-125'
            />

            <div>{format(blog.date, 'MMMM d, yyyy')}</div>
            <h2 className='text-4xl font-semibold'>{blog.title}</h2>
            <div className='absolute right-12 top-12 flex h-16 w-16 scale-0 items-center justify-center rounded-full bg-base-100 text-3xl transition-all duration-500 group-hover:scale-100'>
              <LuMoveUpRight />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
