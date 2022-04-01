import { NextApiHandler, NextApiResponse } from 'next';

import prisma from '@lib/db';
import { CategoryWithContent } from '@lib/interfaces/category';
import { withPersonaAndTags } from '@lib/interfaces/content';

const fail = (res: NextApiResponse) => {
  res.status(404).send('');
};

const handler: NextApiHandler<CategoryWithContent[]> = async (req, res): Promise<void> => {
  const { personaName } = req.query;

  if (!personaName || personaName instanceof Array) {
    return fail(res);
  }

  const persona = await prisma.persona.findUnique({
    where: {
      name: personaName,
    },
  });

  if (!persona) {
    return fail(res);
  }

  const content = await prisma.category.findMany({
    include: {
      content: {
        ...withPersonaAndTags,
        where: {
          personas: {
            some: {
              id: persona.id,
            },
          },
        },
      },
    },
  });

  if (!content) {
    return fail(res);
  }

  return res.status(200).json(content);
};

export default handler;
