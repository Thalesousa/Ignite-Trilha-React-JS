import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);

  const users = [
    { id: 1, name: 'Thales'},
    { id: 2, name: 'John Doe'},
    { id: 3, name: 'Ciclano'},
  ]

  return response.json(users)
}