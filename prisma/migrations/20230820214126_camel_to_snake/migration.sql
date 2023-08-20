/*
  Warnings:

  - You are about to drop the column `deleted` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_by` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `visible` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `created_by ` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_by  ` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `unlock_date ` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `visible` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `created_by ` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_by  ` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `Chapter` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `Chapter` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_by` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `progress_tracking` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `Gamification` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `Gamification` table. All the data in the column will be lost.
  - You are about to drop the column `progress-tracking` on the `Gamification` table. All the data in the column will be lost.
  - You are about to drop the column `ressource_id` on the `Gamification` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `completed_lessons` on the `ProgressTracker` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `ProgressTracker` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `ProgressTracker` table. All the data in the column will be lost.
  - You are about to drop the column `total_lessons` on the `ProgressTracker` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `Reward` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `Reward` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_by` on the `Reward` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `lesson_id` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lesson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ressource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Video` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[progress_tracking_id]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[progress_tracking_id]` on the table `Gamification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[masterclass_id]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_progress_tracking_fkey";

-- DropForeignKey
ALTER TABLE "Gamification" DROP CONSTRAINT "Gamification_progress-tracking_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_lesson_id_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "Ressource" DROP CONSTRAINT "Ressource_badge_id_fkey";

-- DropForeignKey
ALTER TABLE "Ressource" DROP CONSTRAINT "Ressource_course_id_fkey";

-- DropForeignKey
ALTER TABLE "Ressource" DROP CONSTRAINT "Ressource_gamification_id_fkey";

-- DropForeignKey
ALTER TABLE "Ressource" DROP CONSTRAINT "Ressource_lesson_id_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_lesson_id_fkey";

-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_lesson_id_fkey";

-- DropIndex
DROP INDEX "Course_progress_tracking_key";

-- DropIndex
DROP INDEX "Gamification_progress-tracking_key";

-- DropIndex
DROP INDEX "Tag_lesson_id_key";

-- AlterTable
ALTER TABLE "Achievement" DROP COLUMN "deleted",
DROP COLUMN "last_updated_at",
DROP COLUMN "last_updated_by",
DROP COLUMN "visible",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "is_visible" BOOLEAN DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "updated_by" VARCHAR(100);

-- AlterTable
ALTER TABLE "Badge" DROP COLUMN "created_by ",
DROP COLUMN "deleted",
DROP COLUMN "last_updated_at",
DROP COLUMN "last_updated_by  ",
DROP COLUMN "unlock_date ",
DROP COLUMN "visible",
ADD COLUMN     "created_by" VARCHAR(100),
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "is_visible" BOOLEAN DEFAULT false,
ADD COLUMN     "unlock_date" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "updated_by" VARCHAR(100);

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "created_by ",
DROP COLUMN "deleted",
DROP COLUMN "last_updated_at",
DROP COLUMN "last_updated_by  ",
ADD COLUMN     "created_by" VARCHAR(100),
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "updated_by" VARCHAR(100);

-- AlterTable
ALTER TABLE "Chapter" DROP COLUMN "deleted",
DROP COLUMN "last_updated_at",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "deleted",
DROP COLUMN "last_updated_at",
DROP COLUMN "last_updated_by",
DROP COLUMN "progress_tracking",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "progress_tracking_id" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "updated_by" VARCHAR(100);

-- AlterTable
ALTER TABLE "Gamification" DROP COLUMN "deleted",
DROP COLUMN "last_updated_at",
DROP COLUMN "progress-tracking",
DROP COLUMN "ressource_id",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "progress_tracking_id" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "deleted",
DROP COLUMN "last_updated_at",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "ProgressTracker" DROP COLUMN "completed_lessons",
DROP COLUMN "deleted",
DROP COLUMN "last_updated_at",
DROP COLUMN "total_lessons",
ADD COLUMN     "completed_masterclasses" INTEGER DEFAULT 0,
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "total_masterclasses" INTEGER DEFAULT 0,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Reward" DROP COLUMN "deleted",
DROP COLUMN "last_updated_at",
DROP COLUMN "last_updated_by",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "updated_by" VARCHAR(100);

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "deleted",
DROP COLUMN "last_updated_at",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "deleted",
DROP COLUMN "last_updated_at",
DROP COLUMN "lesson_id",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "masterclass_id" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "deleted",
DROP COLUMN "last_updated_at",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "picture_url" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "Lesson";

-- DropTable
DROP TABLE "Ressource";

-- DropTable
DROP TABLE "Video";

-- CreateTable
CREATE TABLE "Masterclass" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100),
    "duration" INTEGER,
    "cover_url" TEXT,
    "video_url" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "chapter_id" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Masterclass_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Masterclass_chapter_id_key" ON "Masterclass"("chapter_id");

-- CreateIndex
CREATE UNIQUE INDEX "Course_progress_tracking_id_key" ON "Course"("progress_tracking_id");

-- CreateIndex
CREATE UNIQUE INDEX "Course_user_id_key" ON "Course"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Gamification_progress_tracking_id_key" ON "Gamification"("progress_tracking_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_masterclass_id_key" ON "Tag"("masterclass_id");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_progress_tracking_id_fkey" FOREIGN KEY ("progress_tracking_id") REFERENCES "ProgressTracker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gamification" ADD CONSTRAINT "Gamification_progress_tracking_id_fkey" FOREIGN KEY ("progress_tracking_id") REFERENCES "ProgressTracker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Masterclass" ADD CONSTRAINT "Masterclass_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "Chapter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_masterclass_id_fkey" FOREIGN KEY ("masterclass_id") REFERENCES "Masterclass"("id") ON DELETE SET NULL ON UPDATE CASCADE;
