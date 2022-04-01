import { createReadStream } from 'fs';

import { Prisma, ContentExperience, PrismaClient } from '@prisma/client';
import { parse } from 'csv-parse';

interface CsvRow {
  label: string;
  duration: string;
  language: string;
  description: string;
  attachments: string;
  status: string;
  title: string;
  author: string;
  link: string;
  persona: string;
  experience: string;
  category: string;
  type: string;
  source: string;
  tags: string;
  curator: string;
  created: string;
}

const experienceMap: Record<string, ContentExperience> = {
  zero: ContentExperience.EASY,
  basic: ContentExperience.EASY,
  intermediate: ContentExperience.MEDIUM,
  advanced: ContentExperience.HARD,
};

function mapExperience(experience: string): ContentExperience {
  return experienceMap[experience] ?? ContentExperience.HARD;
}

function parseExperience(experience: string): ContentExperience {
  const [first] = experience.split(',');

  return mapExperience(first);
}

async function main(path: string): Promise<void> {
  const parser = createReadStream(path).pipe(parse({ columns: true }));

  const content: Array<Prisma.ContentCreateInput> = [];

  // eslint-disable-next-line no-restricted-syntax
  for await (const row of parser) {
    const typedRow = row as CsvRow;

    content.push({
      author: typedRow.author,
      category: {
        connectOrCreate: {
          create: { name: typedRow.category },
          where: { name: typedRow.category },
        },
      },
      description: typedRow.description,
      duration: +typedRow.duration,
      experience: parseExperience(typedRow.experience),
      link: typedRow.link,
      source: typedRow.source,
      title: typedRow.title,
      type: {
        connectOrCreate: {
          create: { name: typedRow.type },
          where: { name: typedRow.type },
        },
      },
      language: typedRow.language,
      personas: {
        connectOrCreate: typedRow.persona.split(',').map((persona) => ({
          create: { name: persona },
          where: { name: persona },
        })),
      },
      tags: {
        connectOrCreate: typedRow.tags.split(',').map((tag) => ({
          create: { name: tag },
          where: { name: tag },
        })),
      },
    });
  }

  const prisma = new PrismaClient();

  await prisma.$transaction(content.map((contentPiece) => prisma.content.create({ data: contentPiece })));
}

const [, , path] = process.argv;

main(path);
