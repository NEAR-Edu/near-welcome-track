import { NextApiHandler } from 'next';

import prisma from '@lib/db';
import { ContentWithPersonaAndTagsAndType, withPersonaAndTagsAndType } from '@lib/interfaces/content';

const handler: NextApiHandler<ContentWithPersonaAndTagsAndType> = async (req, res): Promise<void> => {
  const records = await prisma.content.count();
  const skip = Math.floor(Math.random() * records);

  const content = await prisma.content.findFirst({
    ...withPersonaAndTagsAndType,
    skip,
  });

  if (!content) {
    res.status(404).send('' as unknown as ContentWithPersonaAndTagsAndType);
    return;
  }

  res.status(200).json(content);
};

export default handler;
