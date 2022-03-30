/*
  Warnings:

  - The values [ZERO,BASIC,INTERMEDIATE,EXPERT] on the enum `ContentExperience` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `categoryId` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ContentExperience_new" AS ENUM ('EASY', 'MEDIUM', 'HARD');
ALTER TABLE "Content" ALTER COLUMN "experience" TYPE "ContentExperience_new" USING ("experience"::text::"ContentExperience_new");
ALTER TYPE "ContentExperience" RENAME TO "ContentExperience_old";
ALTER TYPE "ContentExperience_new" RENAME TO "ContentExperience";
DROP TYPE "ContentExperience_old";
COMMIT;

-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
