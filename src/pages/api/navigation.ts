import type { NextApiRequest, NextApiResponse } from 'next';
import { Navigation } from '../../types/navigation';
import * as links from '../../content/navigation.json';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Navigation>
) {
    try {
        res.status(200).json(links);
    } catch (err) {
        throw err;
    }
}
