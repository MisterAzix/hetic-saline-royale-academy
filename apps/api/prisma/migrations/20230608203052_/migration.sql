/*
  Warnings:

  - You are about to drop the `achievement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `badge` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `chapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `gamification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lesson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `progress_tracker` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ressource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rewards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `video` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "achievement" DROP CONSTRAINT "fk_achievement_badge_id";

-- DropForeignKey
ALTER TABLE "achievement" DROP CONSTRAINT "fk_achievement_category_id";

-- DropForeignKey
ALTER TABLE "achievement" DROP CONSTRAINT "fk_achievement_reward_id";

-- DropForeignKey
ALTER TABLE "badge" DROP CONSTRAINT "fk_badge_category_id";

-- DropForeignKey
ALTER TABLE "chapter" DROP CONSTRAINT "fk_chapter_lesson_id";

-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "fk_course_category_id";

-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "fk_course_chapter_id";

-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "fk_course_ressource_id";

-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "fk_course_tag_id";

-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "fk_course_user_id";

-- DropForeignKey
ALTER TABLE "gamification" DROP CONSTRAINT "fk_gamification_achievement_id";

-- DropForeignKey
ALTER TABLE "gamification" DROP CONSTRAINT "fk_gamification_user_id";

-- DropForeignKey
ALTER TABLE "lesson" DROP CONSTRAINT "fk_lesson_image_id";

-- DropForeignKey
ALTER TABLE "lesson" DROP CONSTRAINT "fk_lesson_tag_id";

-- DropForeignKey
ALTER TABLE "lesson" DROP CONSTRAINT "fk_lesson_video_id";

-- DropForeignKey
ALTER TABLE "progress_tracker" DROP CONSTRAINT "fk_progress_tracker_course_id";

-- DropForeignKey
ALTER TABLE "progress_tracker" DROP CONSTRAINT "fk_progress_tracker_user_id";

-- DropForeignKey
ALTER TABLE "rewards" DROP CONSTRAINT "fk_rewards_category_id";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "fk_users_course_id";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "fk_users_gamification_id";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "fk_users_image_id";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "fk_users_notification_id";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "fk_users_progress_tracker_id";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "fk_users_subscription_id";

-- DropTable
DROP TABLE "achievement";

-- DropTable
DROP TABLE "badge";

-- DropTable
DROP TABLE "category";

-- DropTable
DROP TABLE "chapter";

-- DropTable
DROP TABLE "course";

-- DropTable
DROP TABLE "gamification";

-- DropTable
DROP TABLE "image";

-- DropTable
DROP TABLE "lesson";

-- DropTable
DROP TABLE "notification";

-- DropTable
DROP TABLE "progress_tracker";

-- DropTable
DROP TABLE "ressource";

-- DropTable
DROP TABLE "rewards";

-- DropTable
DROP TABLE "subscription";

-- DropTable
DROP TABLE "tag";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "video";

-- CreateTable
CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" VARCHAR(100),
    "created_by" VARCHAR(100),
    "criteria" VARCHAR(100),
    "unlock_date" TIMESTAMP(6),
    "visible" BOOLEAN DEFAULT false,
    "deleted" BOOLEAN DEFAULT false,
    "reward_id" TEXT,
    "badge_id" TEXT,
    "category_id" TEXT,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Badge" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100),
    "criteria" VARCHAR(100),
    "level" VARCHAR(100),
    "unlock_date " TIMESTAMP(6),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by " VARCHAR(100),
    "last_updated_by  " VARCHAR(100),
    "visible" BOOLEAN DEFAULT false,
    "hidden_description" VARCHAR(100),
    "deleted" BOOLEAN DEFAULT false,
    "category_id" TEXT,

    CONSTRAINT "Badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100),
    "description" VARCHAR(100),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,
    "lesson_id" TEXT,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" VARCHAR(700),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR(100),
    "last_updated_by" VARCHAR(100),
    "deleted" BOOLEAN DEFAULT false,
    "user_id" TEXT,
    "chapter_id" TEXT,
    "tag_id" TEXT,
    "ressource_id" TEXT,
    "category_id" TEXT,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gamification" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "achievement_id" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "Gamification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "url" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lesson" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100),
    "description" VARCHAR(100),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,
    "image_id" TEXT,
    "video_id" TEXT,
    "tag_id" TEXT,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "message" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Progress_tracker" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "course_id" TEXT,
    "completed_lessons" INTEGER DEFAULT 0,
    "total_lessons" INTEGER DEFAULT 0,
    "completed_chapters" INTEGER DEFAULT 0,
    "total_chapters" INTEGER DEFAULT 0,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "Progress_tracker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ressource" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100),
    "duration" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "Ressource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rewards" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100),
    "type" VARCHAR(100),
    "value" INTEGER,
    "availability" BOOLEAN DEFAULT false,
    "unlock_criteria" BOOLEAN DEFAULT false,
    "redeemable" BOOLEAN DEFAULT false,
    "expiration_date" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR(100),
    "last_updated_by" VARCHAR(100),
    "deleted" BOOLEAN DEFAULT false,
    "access_level" INTEGER,
    "category_id" TEXT,

    CONSTRAINT "Rewards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "plan" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "display_name" VARCHAR(100),
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,
    "role" VARCHAR(100) DEFAULT 'USER',
    "password" VARCHAR(100) NOT NULL,
    "preferences" VARCHAR(100),
    "ecole" VARCHAR(100),
    "gamification_id" TEXT,
    "notificationId" TEXT,
    "subscription_id" TEXT,
    "progress_tracker_id" TEXT,
    "course_id" TEXT,
    "image_id" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "url" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "fk_achievement_badge_id" FOREIGN KEY ("badge_id") REFERENCES "Badge"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "fk_achievement_category_id" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "fk_achievement_reward_id" FOREIGN KEY ("reward_id") REFERENCES "Rewards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "fk_badge_category_id" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "fk_chapter_lesson_id" FOREIGN KEY ("lesson_id") REFERENCES "Lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "fk_course_category_id" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "fk_course_chapter_id" FOREIGN KEY ("chapter_id") REFERENCES "Chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "fk_course_ressource_id" FOREIGN KEY ("ressource_id") REFERENCES "Ressource"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "fk_course_tag_id" FOREIGN KEY ("tag_id") REFERENCES "Tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "fk_course_user_id" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Gamification" ADD CONSTRAINT "fk_gamification_achievement_id" FOREIGN KEY ("achievement_id") REFERENCES "Achievement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Gamification" ADD CONSTRAINT "fk_gamification_user_id" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "fk_lesson_image_id" FOREIGN KEY ("image_id") REFERENCES "Image"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "fk_lesson_tag_id" FOREIGN KEY ("tag_id") REFERENCES "Tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "fk_lesson_video_id" FOREIGN KEY ("video_id") REFERENCES "Video"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Progress_tracker" ADD CONSTRAINT "fk_progress_tracker_course_id" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Progress_tracker" ADD CONSTRAINT "fk_progress_tracker_user_id" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Rewards" ADD CONSTRAINT "fk_rewards_category_id" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "fk_users_course_id" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "fk_users_gamification_id" FOREIGN KEY ("gamification_id") REFERENCES "Gamification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "fk_users_image_id" FOREIGN KEY ("image_id") REFERENCES "Image"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "fk_users_notification_id" FOREIGN KEY ("notificationId") REFERENCES "Notification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "fk_users_progress_tracker_id" FOREIGN KEY ("progress_tracker_id") REFERENCES "Progress_tracker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "fk_users_subscription_id" FOREIGN KEY ("subscription_id") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
