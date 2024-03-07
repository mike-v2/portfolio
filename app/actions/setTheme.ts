'use server';

import { cookies } from 'next/headers';

export async function setCookie(theme: string) {
  cookies().set('theme', theme);
}
