'use client';

import { useEffect, useState } from 'react';

import { LuSun, LuMoon } from 'react-icons/lu';

import { setCookie } from '@/app/actions/setTheme';
import { Theme } from '@/types/theme.enum';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  useEffect(() => {
    setCookie(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === Theme.Light ? Theme.Dark : Theme.Light,
    );
  }

  return (
    <button
      className='flex items-center gap-x-2'
      onClick={(e) => toggleTheme()}
    >
      {theme === 'light' && <LuSun />}
      {theme === 'dark' && <LuMoon />}
      Theme
    </button>
  );
}
