import { Catamaran } from 'next/font/google';

import { format } from 'date-fns';

import { BlogPost } from '@/types/postData';
import { Anchor } from '@/components/anchor';
import { cn } from '@/utils/cn';

const catamaran = Catamaran({ subsets: ['latin'] });

export default function Post({ title, date, link, content }: BlogPost) {
  return (
    <article className='bg-base-300 p-2 md:p-8'>
      <header className='mx-auto max-w-2xl py-16 text-center text-primary'>
        <h1 className='my-12 text-3xl md:text-8xl'>{title}</h1>
        <time
          dateTime={format(date, 'yyyy-MM-dd')}
          className='text-sm md:text-lg'
        >
          {format(date, 'MMM d, yyyy')}
        </time>
      </header>

      <div
        className={cn(
          catamaran.className,
          'mx-auto mb-12 flex max-w-4xl flex-col gap-y-6 bg-base-100 p-4 md:p-24',
        )}
      >
        <Anchor href={link} className='w-fit'>
          View on LinkedIn
        </Anchor>
        {content}
      </div>
    </article>
  );
}
