import { Antonio } from 'next/font/google';
import { Metadata } from 'next';

import '@/app/globals.css';
import Navbar from '@/app/blog/components/navbar';

const antonio = Antonio({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mike McGuiness',
  description: 'Portfolio of Michael McGuiness, full-stack web developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={antonio.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
