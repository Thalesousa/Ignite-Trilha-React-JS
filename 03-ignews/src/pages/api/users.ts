import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Thales'},
    { id: 1, name: 'John Doe'},
    { id: 1, name: 'Ciclano'},
  ]

  return response.json(users)
}