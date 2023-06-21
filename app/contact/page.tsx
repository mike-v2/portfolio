'use client';

import { ValidationError, useForm } from '@formspree/react';
import Image from 'next/image'
import { useState } from 'react';

const emailURL = "https://formspree.io/f/meqwywez";

export default function Contact() {
  const [state, handleSubmit] = useForm("meqwywez");

  if (state.succeeded) {
    return <p>Message Sent!</p>;
  }

  return (
    <main className="">
      <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 mt-8 bg-white dark:bg-blue-500" onSubmit={handleSubmit} action={emailURL} method="POST">
        <h1 className="text-2xl font-bold dark:text-gray-50">Send a message</h1>

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
          <button type='submit' disabled={state.submitting} className="px-10 mt-8 py-2 bg-green-400 hover:bg-green-300 font-light rounded-md text-lg">
            Send
          </button>
        </div>
      </form>
    </main>
  )
}
