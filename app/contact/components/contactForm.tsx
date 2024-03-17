'use client';

import { ValidationError, useForm } from '@formspree/react';

import { Theme } from '@/types/theme.enum';
import { Button } from '@/components/button';

export default function ContactForm({ theme }: { theme: Theme }) {
  const [state, handleSubmit] = useForm('meqwywez');

  if (state.succeeded) {
    return <p className='mt-12 text-center text-2xl'>Message Sent!</p>;
  }

  return (
    <form
      className={`mx-auto flex max-w-6xl flex-col rounded-lg px-8 py-8 shadow-xl ${theme === Theme.Dark ? 'text-gray-50' : 'text-gray-500'}`}
      onSubmit={handleSubmit}
      method='POST'
    >
      <label htmlFor='fullname' className='mt-8 font-light'>
        Name
      </label>
      <input
        type='text'
        name='fullname'
        className='border-b bg-transparent py-2 pl-4 font-light ring-primary focus:rounded-md focus:outline-none focus:ring-1'
      />

      <label htmlFor='email' className='mt-4 font-light '>
        E-mail<span className='text-red-500'>*</span>
      </label>
      <input
        type='email'
        name='email'
        id='email'
        className='border-b bg-transparent py-2 pl-4 font-light ring-primary focus:rounded-md focus:outline-none focus:ring-1'
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />

      <label htmlFor='subject' className='mt-4 font-light'>
        Subject
      </label>
      <input
        type='text'
        name='subject'
        className='border-b bg-transparent py-2 pl-4 font-light ring-primary focus:rounded-md focus:outline-none focus:ring-1'
      />

      <label htmlFor='message' className='mt-4 font-light'>
        Message<span className='text-red-500'>*</span>
      </label>
      <textarea
        name='message'
        id='message'
        className='border-b bg-transparent py-2 pl-4 font-light ring-primary focus:rounded-md focus:outline-none focus:ring-1'
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />

      <div className='mt-8'>
        <Button type='submit' disabled={state.submitting}>
          Send
        </Button>
      </div>
    </form>
  );
}
