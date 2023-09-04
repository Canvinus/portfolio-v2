import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  res.status(200).end('Hello Cron!')
}
