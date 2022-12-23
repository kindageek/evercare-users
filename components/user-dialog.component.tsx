import React from 'react';
import { User } from '../types';
import Dialog, { DialogBody, DialogTitle } from './dialog';

type Props = {
  user: User | null;
  onClose: () => void;
};

const UserDialog: React.FC<Props> = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <Dialog open={user !== null} onClose={onClose}>
      <DialogTitle onClose={onClose} title="User" />
      <DialogBody>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-4">
            <p className="text-xl font-bold text-black">ID:</p>
            <p className="text-md text-gray-700">{user.id}</p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-xl font-bold text-black">Email:</p>
            <a
              href={`mailto:${user.email}`}
              className="text-md text-sky-500 hover:text-sky-600 hover:underline"
            >
              {user.email}
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-xl font-bold text-black">Name:</p>
            <p className="text-md text-gray-700">{user.profile.name}</p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-xl font-bold text-black">Date of Birth:</p>
            <p className="text-md text-gray-700">{user.profile.dob}</p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-xl font-bold text-black">Company:</p>
            <p className="text-md text-gray-700">{user.profile.company}</p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-xl font-bold text-black">Address:</p>
            <p className="text-md text-gray-700">{user.profile.address}</p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-xl font-bold text-black">About:</p>
            <p className="text-md text-gray-700">{user.profile.about}</p>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default UserDialog;
