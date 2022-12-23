// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  if (req.method !== 'GET') {
    throw new Error(`Error`);
  }
  const data = await fetch(
    'https://api.json-generator.com/templates/W4qPXJcgk3rq/data',
    {
      headers: {
        Authorization: 'Bearer 3varbip49r6blgrq4iyy2961jv5ng1t00xyldbxx',
      },
    }
  );
  const users = (await data.json()) as User[];
  res.status(200).json(users);
}
