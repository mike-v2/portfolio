import { Fira_Code } from 'next/font/google';

const firacode = Fira_Code({ subsets: ['latin'] });

export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className='px-4'>
      <div
        className={`${firacode.className} rounded-lg border border-secondary bg-base-200 p-2 text-sm`}
      >
        {children}
      </div>
    </div>
  );
}
