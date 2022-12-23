import React, { useContext, useState } from 'react';
import { User } from '../types';
import UserDialog from './user-dialog.component';
import UsersContext from '../shared';

const UsersList: React.FC = () => {
  const { users } = useContext(UsersContext);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserSelect = (userId: string) => {
    const index = users.findIndex((user) => user.id === userId);
    if (index === -1) return;
    setSelectedUser(users[index]);
  };

  return (
    <div className="w-80 h-80 overflow-scroll">
      <ul className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {users.map((user, index) => (
          <li
            key={user.id}
            className={`py-4 px-8 w-full border-b border-gray-200 dark:border-gray-600 cursor-pointer hover:bg-gray-800 ${
              index === 0 ? 'rounded-t-lg' : ''
            } ${index === users.length - 1 ? 'rounded-b-lg' : ''}`}
            onClick={() => handleUserSelect(user.id)}
          >
            {user.profile.name}
          </li>
        ))}
      </ul>
      <UserDialog user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  );
};

export default UsersList;
