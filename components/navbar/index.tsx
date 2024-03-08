import { getCurrentTheme } from '@/utils/theme';

import Logo from './logo';
import MediaLinks from './mediaLinks';
import NavLinks from './navLinks';
import ThemeSwitch from './themeSwitch';

export default function NavBar() {
  return (
    <nav className='flex h-32 items-end border-b border-green-400'>
      <Logo theme={getCurrentTheme()} />
      <div className='flex basis-1/2 gap-x-6 pb-4 pl-2'>
        <MediaLinks />
        <ThemeSwitch />
      </div>
      <div className='basis-1/2 pr-2'>
        <NavLinks theme={getCurrentTheme()} />
      </div>
    </nav>
  );
}
