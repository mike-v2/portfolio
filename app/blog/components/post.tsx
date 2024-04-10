import { Catamaran } from 'next/font/google';

import { format } from 'date-fns';

import { BlogPost } from '@/types/postData';
import { Anchor } from '@/components/anchor';

const catamaran = Catamaran({ subsets: ['latin'] });

export default function Post({ title, date, link, content }: BlogPost) {
  return (
    <section className='bg-base-300'>
      <div className='mx-auto max-w-xl py-16 text-center text-primary'>
        <h3 className='my-12 text-6xl'>{title}</h3>
        <div className='text-sm'>{format(date, 'MMM d, yyyy')}</div>
      </div>

      <div
        className={`${catamaran.className} mx-auto flex max-w-4xl flex-col gap-y-6 bg-base-100 p-24`}
      >
        <Anchor href={link} className='w-fit'>
          View on LinkedIn
        </Anchor>
        {content}
      </div>

      <div className='bg-gray-800'></div>
    </section>
  );
}
