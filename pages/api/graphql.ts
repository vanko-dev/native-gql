import type { NextApiRequest, NextApiResponse } from 'next';
import { native } from '../../data/native';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(native);
}
