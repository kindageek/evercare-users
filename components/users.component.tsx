import React, { useState } from 'react';
import { User } from '../types';
import UsersList from './users-list.component copy';
import UsersTable from './users-table.component';
import Link from 'next/link';

const Users: React.FC = () => {
  const [view, setView] = useState<'list' | 'table'>('list');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setView(e.target.name === 'list' ? 'list' : 'table');
  };

  return (
    <div className="w-screen h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center p-8 relative">
      <h1 className="text-3xl text-black dark:text-white font-bold mb-4">
        Users
      </h1>
      <div className="flex items-center mb-8 text-black dark:text-white gap-8">
        <div className="flex items-center gap-3">
          <input
            checked={view === 'list'}
            onChange={handleChange}
            type="radio"
            name="list"
            id="view-radio-list"
          />
          <label
            htmlFor="view-radio-list"
            className="text-black dark:text-white"
          >
            List View
          </label>
        </div>
        <div className="flex items-center gap-4">
          <input
            checked={view === 'table'}
            onChange={handleChange}
            type="radio"
            name="table"
            id="view-radio-table"
            className="text-black dark:text-white"
          />
          <label htmlFor="view-radio-table">Table View</label>
        </div>
      </div>
      {view === 'list' ? (
        <UsersList />
      ) : (
        <UsersTable />
      )}
      <Link
        href="/"
        className="text-sky-500 hover:text-sky-600 hover:underline transition-all cursor-pointer mt-10"
      >
        Home
      </Link>
    </div>
  );
};

export default Users;
