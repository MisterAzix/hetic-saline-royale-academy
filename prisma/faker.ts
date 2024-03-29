import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { CreateAchievementDto } from '../apps/api/src/app/achievement/dto/create-achievement.dto';
import { CreateBadgeDto } from '../apps/api/src/app/badge/dto/create-badge.dto';
import { CreateCategoryDto } from '../apps/api/src/app/category/dto/create-category.dto';
import { CreateChapterDto } from '../apps/api/src/app/chapter/dto/create-chapter.dto';
import { CreateCourseDto } from '../apps/api/src/app/course/dto/create-course.dto';
import { CreateGamificationDto } from '../apps/api/src/app/gamification/dto/create-gamification.dto';
import { CreateMasterclassDto } from '../apps/api/src/app/masterclass/dto/create-masterclass.dto';
import { CreateNotificationDto } from '../apps/api/src/app/notification/dto/create-notification.dto';
import { CreateRewardDto } from '../apps/api/src/app/rewards/dto/create-reward.dto';
import { CreateSubscriptionDto } from '../apps/api/src/app/subscription/dto/create-subscription.dto';
import { CreateTagDto } from '../apps/api/src/app/tag/dto/create-tag.dto';
import { UserCreateDto } from '../apps/api/src/app/users/dto/create-user.dto';

const prisma = new PrismaClient();

//TODO: Add relations

/**
 * Generates an array of random users.
 * @param {number} count - The number of users to generate.
 * @returns {Promise<UserCreateDto[]>} - An array of randomly generated users.
 */
const generateRandomUsers = async (count: number): Promise<UserCreateDto[]> => {
  const users: UserCreateDto[] = Array.from({ length: count }, () => {
    const email = faker.internet.email();
    const first_name = faker.person.firstName();
    const last_name = faker.person.lastName();

    return {
      email,
      first_name,
      last_name,
      display_name: first_name + last_name,
      password: 'password',
    };
  });

  return users;
};

/**
 * Generates random users and saves them to the database.
 */
export const randomUsers = async (count: number) => {
  const users = await generateRandomUsers(count);

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });
};

/**
 * Generates random achievements.
 * @param {number} count - The number of achievements to generate.
 * @returns {Promise<CreateAchievementDto[]>} - A promise that resolves to an array of generated achievements.
 */
const generateRandomAchievements = async (
  count: number
): Promise<CreateAchievementDto[]> => {
  const achievements: CreateAchievementDto[] = Array.from(
    { length: count },
    () => ({
      title: faker.string.alpha(10),
      description: faker.lorem.sentence(),
      criteria: faker.string.alpha(10),
      unlock_date: faker.date.past(),
      is_visible: faker.datatype.boolean(),
      is_deleted: faker.datatype.boolean(),
    })
  );
  return achievements;
};

/**
 * Generates and saves random achievements.
 * @param {number} count - The number of achievements to generate and save.
 */
export const randomAchievements = async (count: number) => {
  const achievements = await generateRandomAchievements(count);

  await prisma.achievement.createMany({
    data: achievements,
    skipDuplicates: true,
  });
};

/**
 * Generates random badges.
 * @param {number} count - The number of badges to generate.
 * @returns {Promise<CreateBadgeDto[]>} - A promise that resolves to an array of generated badges.
 */
const generateRandomBadges = async (
  count: number
): Promise<CreateBadgeDto[]> => {
  const badges: CreateBadgeDto[] = Array.from({ length: count }, () => ({
    title: faker.string.alpha(10),
    description: faker.lorem.sentence(),
    criteria: faker.string.alpha(10),
    level: faker.string.alpha(10),
    unlock_date: faker.date.recent(),
    is_visible: faker.datatype.boolean(),
    hidden_description: faker.lorem.sentence(),
    is_deleted: faker.datatype.boolean(),
  }));
  return badges;
};

/**
 * Generates and saves random badges.
 * @param {number} count - The number of badges to generate and save.
 */
export const randomBadges = async (count: number) => {
  const badges = await generateRandomBadges(count);

  await prisma.badge.createMany({
    data: badges,
    skipDuplicates: true,
  });
};

/**
 * Generates random categories.
 * @param {number} count - The number of categories to generate.
 * @returns {Promise<CreateCategoryDto[]>} - A promise that resolves to an array of generated categories.
 */
const generateRandomCategories = async (
  count: number
): Promise<CreateCategoryDto[]> => {
  const categories: CreateCategoryDto[] = Array.from({ length: count }, () => ({
    name: faker.string.alpha(10),
    description: faker.lorem.sentence(),
    is_deleted: faker.datatype.boolean(),
  }));
  return categories;
};

/**
 * Generates and saves random categories.
 * @param {number} count - The number of categories to generate and save.
 */
export const randomCategories = async (count: number) => {
  const categories = await generateRandomCategories(count);

  await prisma.category.createMany({
    data: categories,
    skipDuplicates: true,
  });
};

/**
 * Generates random chapters.
 * @param {number} count - The number of chapters to generate.
 * @returns {Promise<CreateChapterDto[]>} - A promise that resolves to an array of generated chapters.
 */
const generateRandomChapters = async (
  count: number
): Promise<CreateChapterDto[]> => {
  const chapters: CreateChapterDto[] = Array.from({ length: count }, () => ({
    title: faker.string.alpha(10),
    timecode: '00:00:00', //TODO: Change to faker
    is_deleted: faker.datatype.boolean(),
  }));
  return chapters;
};

/**
 * Generates and saves random chapters.
 * @param {number} count - The number of chapters to generate and save.
 */
export const randomChapters = async (count: number) => {
  const chapters = await generateRandomChapters(count);

  await prisma.chapter.createMany({
    data: chapters,
    skipDuplicates: true,
  });
};

/**
 * Generates random courses.
 * @param {number} count - The number of courses to generate.
 * @returns {Promise<CreateChapterDto[]>} - A promise that resolves to an array of generated courses.
 */
const generateRandomCourses = async (
  count: number
): Promise<CreateCourseDto[]> => {
  const courses: CreateCourseDto[] = Array.from({ length: count }, () => ({
    title: faker.string.alpha(10),
    description: faker.lorem.sentence(),
    is_deleted: faker.datatype.boolean(),
  }));
  return courses;
};

/**
 * Generates and saves random courses.
 * @param {number} count - The number of courses to generate and save.
 */
export const randomCourses = async (count: number) => {
  const courses = await generateRandomCourses(count);

  await prisma.course.createMany({
    data: courses,
    skipDuplicates: true,
  });
};

/**
 * Generates random gamifications.
 * @param {number} count - The number of gamifications to generate.
 * @returns {Promise<CreateGamificationDto[]>} - A promise that resolves to an array of generated gamifications.
 */
const generateRandomGamification = async (
  count: number
): Promise<CreateGamificationDto[]> => {
  const gamifications: CreateGamificationDto[] = Array.from(
    { length: count },
    () => ({
      description: faker.lorem.sentence(),
      experience_point: faker.number.int({ max: 100 }),
      level: faker.string.alpha(10),
      is_deleted: faker.datatype.boolean(),
    })
  );
  return gamifications;
};

/**
 * Generates and saves random gamifications.
 * @param {number} count - The number of gamifications to generate and save.
 */
export const randomGamification = async (count: number) => {
  const gamifications = await generateRandomGamification(count);

  await prisma.gamification.createMany({
    data: gamifications,
    skipDuplicates: true,
  });
};

/**
 * Generates a random video URL.
 * @returns {string} - The generated video URL.
 */
const generateRandomVideoUrl = (): string => {
  const videoUrls = [
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoogleCloud.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  ];
  const randomIndex = faker.number.int({ min: 0, max: videoUrls.length - 1 });
  return videoUrls[randomIndex];
};

/**
 * Generates a random image URL from a list of free image sources.
 * @returns {string} - The generated image URL.
 */
const generateRandomImageUrl = (): string => {
  const imageUrls = [
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1566913485268-1287f67f87fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://plus.unsplash.com/premium_photo-1661433025857-e79ad6e8bf15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://plus.unsplash.com/premium_photo-1681494407306-15c18abf3442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1566913485233-a9b2afe13757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3542&q=80',
  ];

  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
};

/**
 * Generates random masterclasses.
 * @param {number} count - The number of masterclasses to generate.
 * @returns {Promise<CreateMasterclassDto[]>} - A promise that resolves to an array of generated masterclasses.
 */
const generateRandomMasterclasses = async (
  count: number
): Promise<CreateMasterclassDto[]> => {
  const masterclasses: CreateMasterclassDto[] = Array.from(
    { length: count },
    () => ({
      title: faker.string.alpha(10),
      description: faker.lorem.sentence(),
      duration: faker.number.int({ max: 60 }),
      video_url: generateRandomVideoUrl(),
      cover_url: generateRandomImageUrl(),
      is_deleted: faker.datatype.boolean(),
    })
  );
  return masterclasses;
};

/**
 * Generates and saves random masterclasses.
 * @param {number} count - The number of masterclasses to generate and save.
 */
export const randomMasterclasses = async (count: number) => {
  const masterclasses = await generateRandomMasterclasses(count);

  await prisma.masterclass.createMany({
    data: masterclasses,
    skipDuplicates: true,
  });
};

/**
 * Generates random notifications.
 * @param {number} count - The number of notifications to generate.
 * @returns {Promise<CreateNotificationDto[]>} - A promise that resolves to an array of generated notifications.
 */
const generateRandomNotifications = async (
  count: number
): Promise<CreateNotificationDto[]> => {
  const notifications: CreateNotificationDto[] = Array.from(
    { length: count },
    () => ({
      message: faker.string.alpha(10),
      published: faker.datatype.boolean(),
      is_deleted: faker.datatype.boolean(),
    })
  );
  return notifications;
};

/**
 * Generates and saves random notifications.
 * @param {number} count - The number of notifications to generate and save.
 */
export const randomNotifications = async (count: number) => {
  const notifications = await generateRandomNotifications(count);

  await prisma.notification.createMany({
    data: notifications,
    skipDuplicates: true,
  });
};

/**
 * Generates random rewards.
 * @param {number} count - The number of rewards to generate.
 * @returns {Promise<CreateRewardDto[]>} - A promise that resolves to an array of generated rewards.
 */
const generateRandomRewards = async (
  count: number
): Promise<CreateRewardDto[]> => {
  const rewards: CreateRewardDto[] = Array.from({ length: count }, () => ({
    title: faker.string.alpha(10),
    description: faker.lorem.sentence(),
    type: faker.string.alpha(10),
    value: faker.number.int({ max: 200 }),
    availability: faker.datatype.boolean(),
    unlock_criteria: faker.datatype.boolean(),
    redeemable: faker.datatype.boolean(),
    expiration_date: faker.date.past(),
    access_level: faker.number.int({ max: 100 }),
    is_deleted: faker.datatype.boolean(),
  }));
  return rewards;
};

/**
 * Generates and saves random rewards.
 * @param {number} count - The number of rewards to generate and save.
 */
export const randomRewards = async (count: number) => {
  const rewards = await generateRandomRewards(count);

  await prisma.reward.createMany({
    data: rewards,
    skipDuplicates: true,
  });
};

/**
 * Generates random subscriptions.
 * @param {number} count - The number of subscriptions to generate.
 * @returns {Promise<CreateSubscriptionDto[]>} - A promise that resolves to an array of generated subscriptions.
 */
const generateRandomSubscription = async (
  count: number
): Promise<CreateSubscriptionDto[]> => {
  const subscriptions: CreateSubscriptionDto[] = Array.from(
    { length: count },
    () => ({
      plan: faker.string.alpha(10),
      payed: faker.datatype.boolean(),
      is_deleted: faker.datatype.boolean(),
    })
  );
  return subscriptions;
};

/**
 * Generates and saves random subscriptions.
 * @param {number} count - The number of subscriptions to generate and save.
 */
export const randomSubscriptions = async (count: number) => {
  const subscriptions = await generateRandomSubscription(count);

  await prisma.subscription.createMany({
    data: subscriptions,
    skipDuplicates: true,
  });
};

/**
 * Generates random tags.
 * @param {number} count - The number of tags to generate.
 * @returns {Promise<CreateTagDto[]>} - A promise that resolves to an array of generated tags.
 */
const generateRandomTags = async (count: number): Promise<CreateTagDto[]> => {
  const tags: CreateTagDto[] = Array.from({ length: count }, () => ({
    name: faker.string.alpha(10),
    is_deleted: faker.datatype.boolean(),
  }));
  return tags;
};

/**
 * Generates and saves random tags.
 * @param {number} count - The number of tags to generate and save.
 */
export const randomTags = async (count: number) => {
  const tags = await generateRandomTags(count);

  await prisma.tag.createMany({
    data: tags,
    skipDuplicates: true,
  });
};
