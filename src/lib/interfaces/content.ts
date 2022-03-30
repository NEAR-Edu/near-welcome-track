import { Prisma } from '@lib/db';

const withTags = Prisma.validator<Prisma.ContentArgs>()({ include: { tags: true } });

type ContentWithTags = Prisma.ContentGetPayload<typeof withTags>;

export default ContentWithTags;
