import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import Users from '../../components/users.component';
import { User } from '../../types';
import UsersContext from '../../shared';

const UsersPage: NextPage<{ data: User[] }> = ({ data }) => {
  return (
    <UsersContext.Provider value={{ users: data }}>
      <Users />
    </UsersContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch('http://localhost:3000/api/users').then((res) =>
    res.json()
  );
  return { props: { data } };
};

export default UsersPage;
