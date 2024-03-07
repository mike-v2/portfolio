import { cookies } from 'next/headers';

export function getCurrentTheme(): string {
  return cookies().get('theme')?.value || 'light';
}
