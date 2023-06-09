-- CreateTable
CREATE TABLE "achievement" (
    "id" SERIAL NOT NULL,
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
    "reward_id" INTEGER,
    "badge_id" INTEGER,
    "category_id" INTEGER,

    CONSTRAINT "achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "badge" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100),
    "criteria" VARCHAR(100),
    "level" VARCHAR(100),
    "unlock_date" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR(100),
    "last_updated_by" VARCHAR(100),
    "visible" BOOLEAN DEFAULT false,
    "hidden_description" VARCHAR(100),
    "deleted" BOOLEAN DEFAULT false,
    "category_id" INTEGER,

    CONSTRAINT "badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chapter" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100),
    "description" VARCHAR(100),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,
    "lesson_id" INTEGER,

    CONSTRAINT "chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200),
    "description" VARCHAR(700),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR(100),
    "last_updated_by" VARCHAR(100),
    "deleted" BOOLEAN DEFAULT false,
    "user_id" INTEGER,
    "chapter_id" INTEGER,
    "tag_id" INTEGER,
    "ressource_id" INTEGER,
    "category_id" INTEGER,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gamification" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "achievement_id" INTEGER,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "gamification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image" (
    "id" SERIAL NOT NULL,
    "url" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lesson" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100),
    "description" VARCHAR(100),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,
    "image_id" INTEGER,
    "video_id" INTEGER,
    "tag_id" INTEGER,

    CONSTRAINT "lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" SERIAL NOT NULL,
    "message" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progress_tracker" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "course_id" INTEGER,
    "completed_lessons" INTEGER DEFAULT 0,
    "total_lessons" INTEGER DEFAULT 0,
    "completed_chapters" INTEGER DEFAULT 0,
    "total_chapters" INTEGER DEFAULT 0,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "progress_tracker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ressource" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100),
    "duration" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "ressource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rewards" (
    "id" SERIAL NOT NULL,
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
    "category_id" INTEGER,

    CONSTRAINT "rewards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription" (
    "id" SERIAL NOT NULL,
    "plan" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "display_name" VARCHAR(100) NOT NULL,
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
    "gamification_id" INTEGER,
    "notification_id" INTEGER,
    "subscription_id" INTEGER,
    "progress_tracker_id" INTEGER,
    "course_id" INTEGER,
    "image_id" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video" (
    "id" SERIAL NOT NULL,
    "url" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "video_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "achievement" ADD CONSTRAINT "fk_achievement_badge_id" FOREIGN KEY ("badge_id") REFERENCES "badge"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "achievement" ADD CONSTRAINT "fk_achievement_category_id" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "achievement" ADD CONSTRAINT "fk_achievement_reward_id" FOREIGN KEY ("reward_id") REFERENCES "rewards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "badge" ADD CONSTRAINT "fk_badge_category_id" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "chapter" ADD CONSTRAINT "fk_chapter_lesson_id" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "fk_course_category_id" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "fk_course_chapter_id" FOREIGN KEY ("chapter_id") REFERENCES "chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "fk_course_ressource_id" FOREIGN KEY ("ressource_id") REFERENCES "ressource"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "fk_course_tag_id" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "fk_course_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "gamification" ADD CONSTRAINT "fk_gamification_achievement_id" FOREIGN KEY ("achievement_id") REFERENCES "achievement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "gamification" ADD CONSTRAINT "fk_gamification_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "fk_lesson_image_id" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "fk_lesson_tag_id" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "fk_lesson_video_id" FOREIGN KEY ("video_id") REFERENCES "video"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "progress_tracker" ADD CONSTRAINT "fk_progress_tracker_course_id" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "progress_tracker" ADD CONSTRAINT "fk_progress_tracker_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rewards" ADD CONSTRAINT "fk_rewards_category_id" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "fk_users_course_id" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "fk_users_gamification_id" FOREIGN KEY ("gamification_id") REFERENCES "gamification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "fk_users_image_id" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "fk_users_notification_id" FOREIGN KEY ("notification_id") REFERENCES "notification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "fk_users_progress_tracker_id" FOREIGN KEY ("progress_tracker_id") REFERENCES "progress_tracker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "fk_users_subscription_id" FOREIGN KEY ("subscription_id") REFERENCES "subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
