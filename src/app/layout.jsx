import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata = {
  title: 'CookiesCV',
  description: 'Build your career with the best CV and job platform.',
  keywords: ['CookiesCV', 'CV Builder', 'Jobs', 'Career', 'Next.js'],
  authors: [{ name: 'CookiesCV Team' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${inter.className} bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 min-h-screen flex flex-col antialiased`}
      >
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-wide hover:text-gray-100 transition duration-200"
            >
              CookiesCV
            </Link>
            <nav className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-4 text-sm sm:text-base font-medium">
              <Link href="/jobs" className="hover:text-gray-200 transition">Jobs</Link>
              <Link href="/create-cv" className="hover:text-gray-200 transition">Create CV</Link>
              <Link href="/about" className="hover:text-gray-200 transition">About</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
          <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-6 sm:p-8">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 py-8 text-center text-sm border-t border-gray-700">
          <div className="max-w-6xl mx-auto px-4">
            <p className="font-medium">&copy; {new Date().getFullYear()} CookiesCV. All rights reserved.</p>
            <div className="mt-4 flex justify-center gap-6 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-indigo-300 transition">Privacy</Link>
              <Link href="/terms" className="hover:text-indigo-300 transition">Terms</Link>
              <Link href="/contact" className="hover:text-indigo-300 transition">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
