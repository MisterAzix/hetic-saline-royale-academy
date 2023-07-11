-- DropForeignKey
ALTER TABLE "Gamification" DROP CONSTRAINT "Gamification_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Ressource" DROP CONSTRAINT "Ressource_badge_id_fkey";

-- AlterTable
ALTER TABLE "Achievement" ALTER COLUMN "description" SET DATA TYPE VARCHAR(700);

-- AlterTable
ALTER TABLE "Gamification" ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProgressTracker" ALTER COLUMN "completed_lessons" DROP NOT NULL,
ALTER COLUMN "total_lessons" DROP NOT NULL,
ALTER COLUMN "completed_chapters" DROP NOT NULL,
ALTER COLUMN "total_chapters" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Ressource" ALTER COLUMN "badge_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Gamification" ADD CONSTRAINT "Gamification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ressource" ADD CONSTRAINT "Ressource_badge_id_fkey" FOREIGN KEY ("badge_id") REFERENCES "Badge"("id") ON DELETE SET NULL ON UPDATE CASCADE;
