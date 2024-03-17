import { format } from 'date-fns';

import { BlogPost } from '@/types/postData';
import { Anchor } from '@/components/anchor';

export default function Post({ title, date, link, content }: BlogPost) {
  return (
    <section>
      <div>
        <h3 className='my-4 text-xl'>{title}</h3>
        <div className='flex gap-x-4'>
          <h6>{format(date, 'MMM d, yyyy')}</h6>
          <Anchor href={link}>Link</Anchor>
        </div>
      </div>

      {content}
    </section>
  );
}
