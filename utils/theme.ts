import { cookies } from 'next/headers';
import { Theme } from '@/types/theme.enum';

export function getCurrentTheme(): Theme {
  return cookies().get('theme')?.value === Theme.Dark
    ? Theme.Dark
    : Theme.Light;
}
