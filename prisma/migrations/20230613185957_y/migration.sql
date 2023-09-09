-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "last_updated_by" VARCHAR(100),
    "created_by" VARCHAR(100),
    "criteria" VARCHAR(100),
    "unlock_date" TIMESTAMP(3),
    "visible" BOOLEAN DEFAULT false,
    "deleted" BOOLEAN DEFAULT false,
    "gamification_id" TEXT,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Badge" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100),
    "criteria" VARCHAR(100),
    "level" VARCHAR(100),
    "unlock_date " TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "created_by " VARCHAR(100),
    "last_updated_by  " VARCHAR(100),
    "visible" BOOLEAN DEFAULT false,
    "hidden_description" VARCHAR(100),
    "deleted" BOOLEAN DEFAULT false,
    "achievement_id" TEXT,

    CONSTRAINT "Badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "achievement_id" TEXT,
    "badge_id" TEXT,
    "course_id" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "course_id" TEXT,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" VARCHAR(700),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "created_by" VARCHAR(100),
    "last_updated_by" VARCHAR(100),
    "deleted" BOOLEAN DEFAULT false,
    "user_id" TEXT,
    "progress_tracking" TEXT,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gamification" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "experience_point" INTEGER,
    "level" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "ressource_id" TEXT,
    "progress-tracking" TEXT,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Gamification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" VARCHAR(100) NOT NULL,
    "height" INTEGER,
    "width" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "lesson_id" TEXT,
    "user_id" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lesson" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100),
    "duration" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "chapter_id" TEXT,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "message" VARCHAR(100) NOT NULL,
    "published" BOOLEAN,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "user_id" TEXT,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgressTracker" (
    "id" TEXT NOT NULL,
    "progress" INTEGER,
    "completed_lessons" INTEGER NOT NULL DEFAULT 0,
    "total_lessons" INTEGER NOT NULL DEFAULT 0,
    "completed_chapters" INTEGER NOT NULL DEFAULT 0,
    "total_chapters" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "user_id" TEXT,

    CONSTRAINT "ProgressTracker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ressource" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "path" TEXT,
    "type" TEXT,
    "access_level" TEXT,
    "duration" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "course_id" TEXT,
    "gamification_id" TEXT,
    "badge_id" TEXT NOT NULL,
    "lesson_id" TEXT,

    CONSTRAINT "Ressource_pkey" PRIMARY KEY ("id")
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "created_by" VARCHAR(100),
    "last_updated_by" VARCHAR(100),
    "deleted" BOOLEAN DEFAULT false,
    "access_level" INTEGER,
    "achievement_id" TEXT,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "plan" VARCHAR(100) NOT NULL,
    "payed" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "user_id" TEXT,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "course_id" TEXT,
    "lesson_id" TEXT,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "display_name" VARCHAR(100),
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "password" VARCHAR(100) NOT NULL,
    "preferences" VARCHAR(100),
    "ecole" VARCHAR(100),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "url" VARCHAR(100) NOT NULL,
    "height" INTEGER,
    "width" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "lesson_id" TEXT,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "Chapter_title_key" ON "Chapter"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Course_title_key" ON "Course"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Course_progress_tracking_key" ON "Course"("progress_tracking");

-- CreateIndex
CREATE UNIQUE INDEX "Gamification_progress-tracking_key" ON "Gamification"("progress-tracking");

-- CreateIndex
CREATE UNIQUE INDEX "Gamification_user_id_key" ON "Gamification"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Image_lesson_id_key" ON "Image"("lesson_id");

-- CreateIndex
CREATE UNIQUE INDEX "Image_user_id_key" ON "Image"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_chapter_id_key" ON "Lesson"("chapter_id");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_user_id_key" ON "Notification"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ProgressTracker_user_id_key" ON "ProgressTracker"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ressource_course_id_key" ON "Ressource"("course_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ressource_gamification_id_key" ON "Ressource"("gamification_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ressource_badge_id_key" ON "Ressource"("badge_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ressource_lesson_id_key" ON "Ressource"("lesson_id");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_user_id_key" ON "Subscription"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_course_id_key" ON "Tag"("course_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_lesson_id_key" ON "Tag"("lesson_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Video_lesson_id_key" ON "Video"("lesson_id");

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
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_progress_tracking_fkey" FOREIGN KEY ("progress_tracking") REFERENCES "ProgressTracker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gamification" ADD CONSTRAINT "Gamification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gamification" ADD CONSTRAINT "Gamification_progress-tracking_fkey" FOREIGN KEY ("progress-tracking") REFERENCES "ProgressTracker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "Chapter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgressTracker" ADD CONSTRAINT "ProgressTracker_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ressource" ADD CONSTRAINT "Ressource_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ressource" ADD CONSTRAINT "Ressource_gamification_id_fkey" FOREIGN KEY ("gamification_id") REFERENCES "Gamification"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ressource" ADD CONSTRAINT "Ressource_badge_id_fkey" FOREIGN KEY ("badge_id") REFERENCES "Badge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ressource" ADD CONSTRAINT "Ressource_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "Achievement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;
