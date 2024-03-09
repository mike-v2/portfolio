'use server';

import { cookies } from 'next/headers';
import { Theme } from '@/types/theme.enum';

export async function setCookie(theme: Theme) {
  cookies().set('theme', theme);
}
