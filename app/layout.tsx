import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'SAT Math AI - Master SAT Math with AI-Powered Practice',
  description: 'Pinpoint your weakest SAT Math question types, practice targeted sets, and track progress with AI-powered analytics. Practice-focused, no full tests required.',
  keywords: ['SAT Math', 'SAT prep', 'AI tutor', 'test preparation', 'College Board', 'SAT practice'],
  openGraph: {
    title: 'SAT Math AI - Practice Exactly What You Need',
    description: 'AI-powered SAT Math practice that helps you master specific question types',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
