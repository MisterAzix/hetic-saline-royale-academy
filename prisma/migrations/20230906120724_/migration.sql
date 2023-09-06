-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(700),
    "criteria" VARCHAR(100),
    "unlock_date" TIMESTAMP(3),
    "is_visible" BOOLEAN DEFAULT false,
    "gamification_id" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "updated_by" VARCHAR(100),
    "created_by" VARCHAR(100),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Badge" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100),
    "criteria" VARCHAR(100),
    "level" VARCHAR(100),
    "unlock_date" TIMESTAMP(3),
    "is_visible" BOOLEAN DEFAULT false,
    "hidden_description" VARCHAR(100),
    "achievement_id" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "created_by" VARCHAR(100),
    "updated_by" VARCHAR(100),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "achievement_id" TEXT,
    "badge_id" TEXT,
    "course_id" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "created_by" VARCHAR(100),
    "updated_by" VARCHAR(100),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "timecode" TEXT NOT NULL,
    "masterclass_id" TEXT,
    "course_id" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" VARCHAR(700),
    "progress_tracking_id" TEXT,
    "user_id" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "created_by" VARCHAR(100),
    "updated_by" VARCHAR(100),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gamification" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "experience_point" INTEGER,
    "level" TEXT,
    "user_id" TEXT,
    "progress_tracking_id" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Gamification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Masterclass" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(1500),
    "duration" INTEGER,
    "cover_url" TEXT,
    "video_url" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "is_deleted" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Masterclass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "message" VARCHAR(100) NOT NULL,
    "published" BOOLEAN,
    "user_id" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgressTracker" (
    "id" TEXT NOT NULL,
    "progress" INTEGER,
    "completed_masterclasses" INTEGER DEFAULT 0,
    "total_masterclasses" INTEGER DEFAULT 0,
    "completed_chapters" INTEGER DEFAULT 0,
    "total_chapters" INTEGER DEFAULT 0,
    "user_id" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "ProgressTracker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reward" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100),
    "type" VARCHAR(100),
    "value" DOUBLE PRECISION,
    "availability" BOOLEAN DEFAULT false,
    "unlock_criteria" BOOLEAN DEFAULT false,
    "redeemable" BOOLEAN DEFAULT false,
    "expiration_date" TIMESTAMP(3),
    "access_level" INTEGER,
    "achievement_id" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "created_by" VARCHAR(100),
    "updated_by" VARCHAR(100),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "plan" VARCHAR(100) NOT NULL,
    "payed" BOOLEAN DEFAULT false,
    "user_id" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "course_id" TEXT,
    "masterclass_id" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "display_name" VARCHAR(100),
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "password" VARCHAR(100) NOT NULL,
    "preferences" VARCHAR(100),
    "ecole" VARCHAR(100),
    "picture_url" TEXT,
    "is_deleted" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_title_key" ON "Achievement"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_gamification_id_key" ON "Achievement"("gamification_id");

-- CreateIndex
CREATE UNIQUE INDEX "Badge_title_key" ON "Badge"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_achievement_id_key" ON "Category"("achievement_id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_badge_id_key" ON "Category"("badge_id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_course_id_key" ON "Category"("course_id");

-- CreateIndex
CREATE UNIQUE INDEX "Course_title_key" ON "Course"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Course_progress_tracking_id_key" ON "Course"("progress_tracking_id");

-- CreateIndex
CREATE UNIQUE INDEX "Course_user_id_key" ON "Course"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Gamification_user_id_key" ON "Gamification"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Gamification_progress_tracking_id_key" ON "Gamification"("progress_tracking_id");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_user_id_key" ON "Notification"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ProgressTracker_user_id_key" ON "ProgressTracker"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_user_id_key" ON "Subscription"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_course_id_key" ON "Tag"("course_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_masterclass_id_key" ON "Tag"("masterclass_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_gamification_id_fkey" FOREIGN KEY ("gamification_id") REFERENCES "Gamification"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "Achievement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "Achievement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_badge_id_fkey" FOREIGN KEY ("badge_id") REFERENCES "Badge"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_masterclass_id_fkey" FOREIGN KEY ("masterclass_id") REFERENCES "Masterclass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_progress_tracking_id_fkey" FOREIGN KEY ("progress_tracking_id") REFERENCES "ProgressTracker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gamification" ADD CONSTRAINT "Gamification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gamification" ADD CONSTRAINT "Gamification_progress_tracking_id_fkey" FOREIGN KEY ("progress_tracking_id") REFERENCES "ProgressTracker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgressTracker" ADD CONSTRAINT "ProgressTracker_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "Achievement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_masterclass_id_fkey" FOREIGN KEY ("masterclass_id") REFERENCES "Masterclass"("id") ON DELETE SET NULL ON UPDATE CASCADE;
