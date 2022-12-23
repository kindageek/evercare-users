import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-indigo-100 flex items-center justify-center p-4 gap-1 uppercase font-semibold text-3xl">
      Evercare
      <Link
        href="/users"
        className="text-sky-500 hover:text-sky-600 hover:underline transition-all cursor-pointer"
      >
        Users
      </Link>
    </div>
  );
};

export default Home;
