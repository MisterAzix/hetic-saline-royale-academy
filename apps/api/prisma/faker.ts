import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { CreateBadgeDto } from '../src/app/badge/dto/create-badge.dto';
import { CreateCategoryDto } from '../src/app/category/dto/create-category.dto';
import { CreateChapterDto } from '../src/app/chapter/dto/create-chapter.dto';
import { CreateGamificationDto } from '../src/app/gamification/dto/create-gamification.dto';
import { CreateImageDto } from '../src/app/image/dto/create-image.dto';
import { CreateLessonDto } from '../src/app/lesson/dto/create-lesson.dto';
import { CreateNotificationDto } from '../src/app/notification/dto/create-notification.dto';
import { CreateProgressTrackerDto } from '../src/app/progress_tracker/dto/create-progress_tracker.dto';
import { CreateRessourceDto } from '../src/app/ressource/dto/create-ressource.dto';
import { CreateRewardDto } from '../src/app/rewards/dto/create-reward.dto';
import { CreateSubscriptionDto } from '../src/app/subscription/dto/create-subscription.dto';
import { CreateTagDto } from '../src/app/tag/dto/create-tag.dto';
import { CreateVideoDto } from '../src/app/video/dto/create-video.dto';
import { CreateAchievementDto } from './../src/app/achievement/dto/create-achievement.dto';
import { UserCreateDto } from './../src/app/users/dto/create-user.dto';

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
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
      email,
      firstName,
      lastName,
      displayName: firstName + lastName,
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
      unlockDate: faker.date.past(),
      visible: faker.datatype.boolean(),
      deleted: faker.datatype.boolean(),
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
    visible: faker.datatype.boolean(),
    hiddenDescription: faker.lorem.sentence(),
    deleted: faker.datatype.boolean(),
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
    deleted: faker.datatype.boolean(),
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
    description: faker.lorem.sentence(),
    deleted: faker.datatype.boolean(),
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
): Promise<CreateChapterDto[]> => {
  const courses: CreateChapterDto[] = Array.from({ length: count }, () => ({
    title: faker.string.alpha(10),
    description: faker.lorem.sentence(),
    deleted: faker.datatype.boolean(),
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
      experiencePoint: faker.number.int({ max: 100 }),
      level: faker.string.alpha(10),
      deleted: faker.datatype.boolean(),
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
 * Generates random images.
 * @param {number} count - The number of images to generate.
 * @returns {Promise<CreateImageDto[]>} - A promise that resolves to an array of generated images.
 */
const generateRandomImages = async (
  count: number
): Promise<CreateImageDto[]> => {
  const images: CreateImageDto[] = Array.from({ length: count }, () => ({
    description: faker.lorem.sentence(),
    height: faker.number.int({ max: 128 }),
    width: faker.number.int({ max: 128 }),
    url: faker.image.urlLoremFlickr({
      height: 128,
      width: 128,
      category: 'music',
    }),
    deleted: faker.datatype.boolean(),
  }));
  return images;
};

/**
 * Generates and saves random images.
 * @param {number} count - The number of images to generate and save.
 */
export const randomImages = async (count: number) => {
  const images = await generateRandomImages(count);

  await prisma.image.createMany({
    data: images,
    skipDuplicates: true,
  });
};

/**
 * Generates random lessons.
 * @param {number} count - The number of lessons to generate.
 * @returns {Promise<CreateLessonDto[]>} - A promise that resolves to an array of generated lessons.
 */
const generateRandomLessons = async (
  count: number
): Promise<CreateLessonDto[]> => {
  const lessons: CreateLessonDto[] = Array.from({ length: count }, () => ({
    title: faker.string.alpha(10),
    description: faker.lorem.sentence(),
    duration: faker.number.int({ max: 60 }),
    deleted: faker.datatype.boolean(),
  }));
  return lessons;
};

/**
 * Generates and saves random lessons.
 * @param {number} count - The number of lessons to generate and save.
 */
export const randomLessons = async (count: number) => {
  const lessons = await generateRandomLessons(count);

  await prisma.lesson.createMany({
    data: lessons,
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
      deleted: faker.datatype.boolean(),
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
 * Generates random progressTrackers.
 * @param {number} count - The number of progressTrackers to generate.
 * @returns {Promise<CreateProgressTrackerDto[]>} - A promise that resolves to an array of generated progressTrackers.
 */
const generateRandomPTrackers = async (
  count: number
): Promise<CreateProgressTrackerDto[]> => {
  const progressTrackers: CreateProgressTrackerDto[] = Array.from(
    { length: count },
    () => ({
      progress: faker.number.int({ max: 100 }),
      userId: faker.string.alpha(10),
      courseId: faker.string.alpha(10),
    })
  );
  return progressTrackers;
};

/**
 * Generates and saves random progressTrackers.
 * @param {number} count - The number of progressTrackers to generate and save.
 */
export const randomProgressTrackers = async (count: number) => {
  const progressTrackers = await generateRandomPTrackers(count);

  await prisma.progressTracker.createMany({
    data: progressTrackers,
    skipDuplicates: true,
  });
};

/**
 * Generates random ressources.
 * @param {number} count - The number of ressources to generate.
 * @returns {Promise<CreateRessourceDto[]>} - A promise that resolves to an array of generated ressources.
 */
const generateRandomRessource = async (
  count: number
): Promise<CreateRessourceDto[]> => {
  const ressources: CreateRessourceDto[] = Array.from(
    { length: count },
    () => ({
      title: faker.string.alpha(10),
      path: faker.image.urlLoremFlickr({
        height: 128,
        width: 128,
        category: 'music',
      }),
      type: faker.string.alpha(10),
      accessLevel: faker.string.alpha(10),
      duration: faker.number.int({ max: 60 }),
      deleted: faker.datatype.boolean(),
    })
  );
  return ressources;
};

/**
 * Generates and saves random ressources.
 * @param {number} count - The number of ressources to generate and save.
 */
export const randomRessources = async (count: number) => {
  const ressources = await generateRandomRessource(count);

  await prisma.ressource.createMany({
    data: ressources,
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
    unlockCriteria: faker.datatype.boolean(),
    redeemable: faker.datatype.boolean(),
    expirationDate: faker.date.past(),
    accessLevel: faker.number.int({ max: 100 }),
    deleted: faker.datatype.boolean(),
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
      deleted: faker.datatype.boolean(),
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
    deleted: faker.datatype.boolean(),
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

/**
 * Generates a random video URL.
 * @returns {string} - The generated video URL.
 */
const generateRandomVideoUrl = (): string => {
  const videoUrls = [
    'https://www.youtube.com/watch?v=htjRBaAhGRw&list=PLcbx6b4jqqo5P-XLgdGThez62RWcAV7Ix',
    'https://www.youtube.com/watch?v=woO7Tf0ONao&list=PLcbx6b4jqqo5P-XLgdGThez62RWcAV7Ix&index=2',
    'https://www.youtube.com/watch?v=gGd5u5DwvuE&list=PLcbx6b4jqqo5P-XLgdGThez62RWcAV7Ix&index=3',
    'https://www.youtube.com/watch?v=ujLr_6t5Mlg&list=PLcbx6b4jqqo5P-XLgdGThez62RWcAV7Ix&index=4',
    'https://www.youtube.com/watch?v=wrgJKCgXGEA&list=PLcbx6b4jqqo5P-XLgdGThez62RWcAV7Ix&index=5',
    'https://www.youtube.com/watch?v=BzT-xTW2qP0&list=PLcbx6b4jqqo5P-XLgdGThez62RWcAV7Ix&index=6',
    'https://www.youtube.com/watch?v=145QLgpAivU&list=PLcbx6b4jqqo5P-XLgdGThez62RWcAV7Ix&index=7',
    'https://www.youtube.com/watch?v=vFhdn91jACY&list=PLcbx6b4jqqo5P-XLgdGThez62RWcAV7Ix&index=8',
    'https://www.youtube.com/watch?v=-wEh2BJnsTg&list=PLcbx6b4jqqo5P-XLgdGThez62RWcAV7Ix&index=9',
  ];
  const randomIndex = faker.number.int({ min: 0, max: videoUrls.length - 1 });
  return videoUrls[randomIndex];
};

/**
 * Generates random videos.
 * @param {number} count - The number of videos to generate.
 * @returns {Promise<CreateVideoDto[]>} - A promise that resolves to an array of generated videos.
 */
const generateRandomVideos = async (
  count: number
): Promise<CreateVideoDto[]> => {
  const videos: CreateVideoDto[] = Array.from({ length: count }, () => ({
    description: faker.lorem.sentence(),
    height: faker.number.int({ max: 200 }),
    width: faker.number.int({ max: 200 }),
    url: generateRandomVideoUrl(),
    deleted: faker.datatype.boolean(),
  }));
  return videos;
};

/**
 * Generates and saves random videos.
 * @param {number} count - The number of videos to generate and save.
 */
export const randomVideos = async (count: number) => {
  const videos = await generateRandomVideos(count);

  await prisma.video.createMany({
    data: videos,
    skipDuplicates: true,
  });
};
