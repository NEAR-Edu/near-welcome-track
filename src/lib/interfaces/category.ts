import { Prisma } from '@prisma/client';

import { withPersonaAndTags } from '@lib/interfaces/content';

export const withContent = Prisma.validator<Prisma.CategoryArgs>()({
  include: {
    content: {
      ...withPersonaAndTags,
    },
  },
});

export type CategoryWithContent = Prisma.CategoryGetPayload<typeof withContent>;

export default withContent;
