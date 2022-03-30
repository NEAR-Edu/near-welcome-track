import { NextApiHandler } from 'next';

import prisma from '@lib/db';
import ContentWithTags from '@lib/interfaces/content';

const handler: NextApiHandler<ContentWithTags> = async (req, res): Promise<void> => {
  const content = await prisma.content.findFirst({ include: { tags: true } });

  if (!content) {
    res.status(404).send('' as unknown as ContentWithTags);
    return;
  }

  res.status(200).json(content);
};

export default handler;
