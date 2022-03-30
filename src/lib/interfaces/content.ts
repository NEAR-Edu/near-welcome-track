import { Prisma } from '@lib/db';

const withTags = Prisma.validator<Prisma.ContentArgs>()({ include: { tags: true } });

export type ContentWithTags = Prisma.ContentGetPayload<typeof withTags>;

const withPersona = Prisma.validator<Prisma.ContentArgs>()({ include: { personas: true } });

export type ContentWithPersona = Prisma.ContentGetPayload<typeof withPersona>;

export const withPersonaAndTags = Prisma.validator<Prisma.ContentArgs>()({ include: { personas: true, tags: true } });

export type ContentWithPersonaAndTags = Prisma.ContentGetPayload<typeof withPersonaAndTags>;

export default ContentWithTags;
