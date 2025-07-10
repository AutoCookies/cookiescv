'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <html>
      <body className="bg-gradient-to-b from-red-100 to-white min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">Oops! Something went wrong.</h1>
        <p className="text-gray-700 text-lg mb-6">
          We encountered an unexpected error. Our team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-md hover:bg-gray-200 transition"
          >
            Go Home
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Error details: <span className="text-gray-600 italic">{error?.message || 'Unknown error'}</span>
        </p>
      </body>
    </html>
  );
}
