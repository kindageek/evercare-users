import { createContext } from 'react';
import { User } from './types';

const UsersContext = createContext<{ users: User[] }>({ users: [] });

export default UsersContext;

