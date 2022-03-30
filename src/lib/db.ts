import { PrismaClient } from '@prisma/client';

declare global {
  // allow global `var` declarations https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices#solution
  // eslint-disable-next-line no-var,vars-on-top
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

export * from '@prisma/client';

export default prisma;

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
