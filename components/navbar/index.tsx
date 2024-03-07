import Logo from './logo';
import MediaLinks from './mediaLinks';
import NavLinks from './navLinks';
import ThemeSwitch from './themeSwitch';

export default function NavBar() {
  return (
    <nav className='flex h-32 border-b border-green-400'>
      <Logo />
      <div className='mt-auto flex basis-1/2 gap-x-6 pb-4 pl-4 md:gap-x-12 md:pl-12'>
        <MediaLinks />
        <ThemeSwitch />
      </div>
      <div className='flex h-full basis-1/2 justify-end'>
        <NavLinks />
      </div>
    </nav>
  );
}
