import Link from 'next/link';

export default function HomeButton() {
  return (
    <div className='fixed left-2 top-8 z-30 border border-primary bg-base-300 px-8 py-4'>
      <Link
        href='/'
        className='flex h-full items-center justify-center text-primary'
      >
        HOME
      </Link>
    </div>
  );
}
