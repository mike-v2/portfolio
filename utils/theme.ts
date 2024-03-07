import { cookies } from 'next/headers';

import { Theme } from '@/types/theme.enum';

export function getCurrentTheme(): Theme {
  console.log('getting current theme: ', cookies().get('theme')?.value);
  return cookies().get('theme')?.value === 'dark' ? Theme.Dark : Theme.Light;
}
