import { format } from 'date-fns';

import { BlogPost } from '@/types/postData';
import { Anchor } from '@/components/anchor';

export default function Post({ title, date, link, content }: BlogPost) {
  return (
    <section className='collapse border border-base-content shadow'>
      <input type='checkbox' />
      <div className='collapse-title'>
        <h3 className='my-4 text-xl'>{title}</h3>
        <div className='flex gap-x-4'>
          <p className='text-sm'>{format(date, 'MMM d, yyyy')}</p>
        </div>
      </div>

      <div className='collapse-content mx-auto flex max-w-4xl flex-col gap-y-6'>
        <Anchor href={link} className='w-fit'>
          View on LinkedIn
        </Anchor>
        {content}
      </div>
    </section>
  );
}
