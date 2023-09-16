/*
  Warnings:

  - You are about to drop the column `progress_tracking_id` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `progress_tracking_id` on the `Gamification` table. All the data in the column will be lost.
  - You are about to drop the `ProgressTracker` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_progress_tracking_id_fkey";

-- DropForeignKey
ALTER TABLE "Gamification" DROP CONSTRAINT "Gamification_progress_tracking_id_fkey";

-- DropForeignKey
ALTER TABLE "ProgressTracker" DROP CONSTRAINT "ProgressTracker_user_id_fkey";

-- DropIndex
DROP INDEX "Course_progress_tracking_id_key";

-- DropIndex
DROP INDEX "Gamification_progress_tracking_id_key";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "progress_tracking_id";

-- AlterTable
ALTER TABLE "Gamification" DROP COLUMN "progress_tracking_id";

-- DropTable
DROP TABLE "ProgressTracker";

-- CreateTable
CREATE TABLE "MasterclassTracker" (
    "id" TEXT NOT NULL,
    "progression" INTEGER DEFAULT 0,
    "is_deleted" BOOLEAN DEFAULT false,
    "masterclass_id" TEXT,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "MasterclassTracker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MasterclassTracker_masterclass_id_key" ON "MasterclassTracker"("masterclass_id");

-- AddForeignKey
ALTER TABLE "MasterclassTracker" ADD CONSTRAINT "MasterclassTracker_masterclass_id_fkey" FOREIGN KEY ("masterclass_id") REFERENCES "Masterclass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterclassTracker" ADD CONSTRAINT "MasterclassTracker_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
