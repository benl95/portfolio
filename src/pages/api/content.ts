import type { NextApiRequest, NextApiResponse } from 'next';
import { Sections } from '../../types/content';
import * as content from '../../content/content.json';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Sections>
) {
    try {
        res.status(200).json(content);
    } catch (err) {
        throw err;
    }
}
