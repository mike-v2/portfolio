import Link from 'next/link';

export default function HomeButton() {
  return (
    <Link
      href='/'
      className='fixed left-2 top-8 z-30 flex items-center justify-center border border-primary bg-base-300 px-8 py-4 text-primary'
    >
      HOME
    </Link>
  );
}
