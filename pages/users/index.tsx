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
  const data = await fetch(
    'https://api.json-generator.com/templates/W4qPXJcgk3rq/data',
    {
      headers: {
        Authorization: 'Bearer 3varbip49r6blgrq4iyy2961jv5ng1t00xyldbxx',
      },
    }
  ).then((res) => res.json());
  return { props: { data } };
};

export default UsersPage;
