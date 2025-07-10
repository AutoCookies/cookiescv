'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
        Welcome to <span className="text-indigo-600">CookiesCV</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Build your professional CV and explore curated job opportunities tailored just for you.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <Link href="/jobs">
          <span className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
            Browse Jobs
          </span>
        </Link>

        <Link href="/create-cv">
          <span className="inline-block px-6 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300">
            Create Your CV
          </span>
        </Link>
      </div>

      <section className="mt-10 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why choose CookiesCV?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
          <li>Simple and intuitive CV builder with beautiful templates.</li>
          <li>Verified and curated job listings tailored to your skillset.</li>
          <li>Privacy-first platform your data is always in your control.</li>
        </ul>
      </section>
    </main>
  );
}
