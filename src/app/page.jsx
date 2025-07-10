'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 text-center relative z-10">
      {/* Gradient Background Bubbles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-10 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Title & Description */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">CookiesCV</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Build your professional CV and explore curated job opportunities tailored just for you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Link href="/jobs">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition duration-300">
              Browse Jobs
            </span>
          </Link>

          <Link href="/create-cv">
            <span className="inline-block px-6 py-3 bg-white border border-indigo-500 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300 shadow">
              Create Your CV
            </span>
          </Link>
        </div>

        {/* Features */}
        <section className="mt-10 max-w-3xl mx-auto text-left bg-white bg-opacity-90 rounded-xl shadow-lg p-6 sm:p-8 backdrop-blur">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why choose CookiesCV?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-base">
            <li><span className="font-semibold text-indigo-600">Simple & Modern:</span> Intuitive CV builder with beautiful templates.</li>
            <li><span className="font-semibold text-indigo-600">Curated Jobs:</span> Verified listings tailored to your skillset.</li>
            <li><span className="font-semibold text-indigo-600">Privacy-First:</span> Your data is always under your control.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
