'use client';

import { useEffect, useState } from 'react';

import { LuSun, LuMoon } from 'react-icons/lu';

import { setCookie } from '@/app/actions/setTheme';
import { Theme } from '@/types/theme.enum';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(Theme.Light);

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
      className='btn flex h-auto min-h-0 gap-x-2 p-2'
      onClick={toggleTheme}
    >
      {theme === Theme.Light && <LuSun />}
      {theme === Theme.Dark && <LuMoon />}
      <span className='hidden md:inline'>Theme</span>
    </button>
  );
}
