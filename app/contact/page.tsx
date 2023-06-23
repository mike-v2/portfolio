'use client';

import { ValidationError, useForm } from '@formspree/react';
import Image from 'next/image'
import { useState } from 'react';

export default function Contact() {
  const [state, handleSubmit] = useForm("meqwywez");

  if (state.succeeded) {
    return <p>Message Sent!</p>;
  }

  return (
    <main className="">
      <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 mt-8 bg-white dark:bg-blue-500 max-w-6xl mx-auto" onSubmit={handleSubmit} method="POST">
        <div className='flex flex-col gap-y-2 max-w-4xl mx-auto pb-8'>
          <h1 className="text-2xl font-bold dark:text-gray-50 pb-2">Thanks for taking the time to explore my portfolio!
          </h1>
          <p className=''>
            Whether you have a potential job opportunity, an exciting project collaboration in mind, or just want to chat about web development, I&apos;d love to hear from you. Don&apos;t hesitate to reach out using the contact form below or through my <a href='https://www.linkedin.com/in/michael-mcguiness-react/' className='text-blue-600 hover:text-blue-800 visited:text-purple-600'>LinkedIn</a> or <a href="https://github.com/mike-v2/" className='text-blue-600 hover:text-blue-800 visited:text-purple-600'>GitHub</a> profiles, or via email at <a href='https://www.mikemcguiness@protonmail.com' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>mikemcguiness@protonmail.com</a>.
          </p>
          <p>
            I&apos;m always open to new ideas, interesting challenges, and opportunities to expand my skills and network. I&apos;m looking forward to connecting with you!
          </p>

        </div>



        <label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">Name</label>
        <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

        <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
        <input type="email" name="email" id='email' className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />

        <label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">Subject</label>
        <input type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

        <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
        <textarea name="message" id='message' className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <div className="">
          <button type='submit' disabled={state.submitting} className="btn text-lg px-10 mt-8 py-2 bg-green-400 hover:bg-green-500">
            Send
          </button>
        </div>
      </form>
    </main>
  )
}
