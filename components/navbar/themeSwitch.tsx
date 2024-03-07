'use client';

import { useEffect, useState } from 'react';

import { LuSun, LuMoon } from 'react-icons/lu';

import { setCookie } from '@/app/actions/setTheme';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme) setCookie(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('setting new theme: ', newTheme);
      return newTheme;
    });
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
