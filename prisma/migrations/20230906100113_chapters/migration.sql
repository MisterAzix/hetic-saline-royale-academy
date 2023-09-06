/*
  Warnings:

  - You are about to drop the column `description` on the `Chapter` table. All the data in the column will be lost.
  - You are about to drop the column `chapter_id` on the `Masterclass` table. All the data in the column will be lost.
  - Added the required column `timecode` to the `Chapter` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Masterclass" DROP CONSTRAINT "Masterclass_chapter_id_fkey";

-- DropIndex
DROP INDEX "Chapter_title_key";

-- DropIndex
DROP INDEX "Masterclass_chapter_id_key";

-- AlterTable
ALTER TABLE "Chapter" DROP COLUMN "description",
ADD COLUMN     "masterclass_id" TEXT,
ADD COLUMN     "timecode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Masterclass" DROP COLUMN "chapter_id",
ALTER COLUMN "description" SET DATA TYPE VARCHAR(1500);

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_masterclass_id_fkey" FOREIGN KEY ("masterclass_id") REFERENCES "Masterclass"("id") ON DELETE SET NULL ON UPDATE CASCADE;
