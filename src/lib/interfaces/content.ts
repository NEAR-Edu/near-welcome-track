import { Prisma } from '@lib/db';

const withTags = Prisma.validator<Prisma.ContentArgs>()({ include: { tags: true } });

export type ContentWithTags = Prisma.ContentGetPayload<typeof withTags>;

const withPersona = Prisma.validator<Prisma.ContentArgs>()({ include: { personas: true } });

export type ContentWithPersona = Prisma.ContentGetPayload<typeof withPersona>;

export const withPersonaAndTags = Prisma.validator<Prisma.ContentArgs>()({ include: { personas: true, tags: true } });

export type ContentWithPersonaAndTags = Prisma.ContentGetPayload<typeof withPersonaAndTags>;

export const withPersonaAndTagsAndCategory = Prisma.validator<Prisma.ContentArgs>()({ include: { personas: true, tags: true, category: true } });

export type ContentWithPersonaAndTagsAndCategory = Prisma.ContentGetPayload<typeof withPersonaAndTagsAndCategory>;

export const withPersonaAndTagsAndType = Prisma.validator<Prisma.ContentArgs>()({ include: { personas: true, tags: true, type: true } });

export type ContentWithPersonaAndTagsAndType = Prisma.ContentGetPayload<typeof withPersonaAndTagsAndType>;

export default ContentWithTags;
