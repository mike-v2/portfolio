import { Inter } from "next/font/google";
import { Metadata } from 'next';

import '@/app/globals.css';
import { getCurrentTheme } from '@/utils/theme';
import NavBar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang='en' data-theme={getCurrentTheme()}>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
