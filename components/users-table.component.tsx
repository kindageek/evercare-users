import React, { useContext, useMemo } from 'react';
import { Column, Row } from '../types';
import UsersContext from '../shared';

const COLUMNS: Column[] = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Date of Birth',
    key: 'dob',
  },
  {
    title: 'Email',
    key: 'email',
  },
  {
    title: 'About',
    key: 'about',
  },
  {
    title: 'Address',
    key: 'address',
  },
  {
    title: 'Company',
    key: 'company',
  },
];

const UsersTable: React.FC = () => {
  const { users } = useContext(UsersContext);
  const rows: Row[] = useMemo(() => {
    return users.map((user) => ({
      id: user.id,
      email: (
        <a
          href={`mailto:${user.email}`}
          className="text-sky-500 hover:text-sky-600 hover:underline"
        >
          {user.email}
        </a>
      ),
      name: user.profile.name,
      dob: user.profile.dob,
      about: user.profile.about,
      address: user.profile.address,
      company: user.profile.company,
    }));
  }, [users]);

  return (
    <div className="w-full h-full overflow-auto">
      <table className="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-auto table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {COLUMNS.map((column, index) => (
              <th
                key={index}
                align="left"
                scope="col"
                className="py-3 px-6 whitespace-nowrap"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {COLUMNS.map((column, index) => (
                <td
                  align="left"
                  key={`${row.id}-${index}`}
                  className="py-4 px-6 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
