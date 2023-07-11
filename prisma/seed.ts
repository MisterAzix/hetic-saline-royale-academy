import { Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {
  randomAchievements,
  randomBadges,
  randomCategories,
  randomChapters,
  randomCourses,
  randomGamification,
  randomImages,
  randomLessons,
  randomNotifications,
  randomRessources,
  randomRewards,
  randomSubscriptions,
  randomTags,
  randomUsers,
  randomVideos,
} from './faker';

const prisma = new PrismaClient();
const logger = new Logger('seed logging');

async function seed() {
  try {
    await randomUsers(2);
    logger.log('Creating randomUsers success');
  } catch (error) {
    logger.error('Creating randomUsers failled :', error);
  }

  try {
    await randomAchievements(2);
    logger.log('Creating randomAchievements success');
  } catch (error) {
    logger.error('Creating randomAchievements failled :', error);
  }

  try {
    await randomBadges(2);
    logger.log('Creating randomBadges success');
  } catch (error) {
    logger.error('Creating randomBadges failled :', error);
  }

  try {
    await randomCategories(2);
    logger.log('Creating randomCategories success');
  } catch (error) {
    logger.error('Creating randomCategories failled :', error);
  }

  try {
    await randomChapters(2);
    logger.log('Creating randomChapters success');
  } catch (error) {
    logger.error('Creating randomChapters failled :', error);
  }

  try {
    await randomCourses(2);
    logger.log('Creating randomCourses success');
  } catch (error) {
    logger.error('Creating randomCourses failled :', error);
  }

  try {
    await randomGamification(2);
    logger.log('Creating randomGamification success');
  } catch (error) {
    logger.error('Creating randomGamification failled :', error);
  }

  try {
    await randomImages(2);
    logger.log('Creating randomImages success');
  } catch (error) {
    logger.error('Creating randomImages failled :', error);
  }

  try {
    await randomLessons(2);
    logger.log('Creating randomLessons success');
  } catch (error) {
    logger.error('Creating randomLessons failled :', error);
  }

  try {
    await randomNotifications(2);
    logger.log('Creating randomNotifications success');
  } catch (error) {
    logger.error('Creating randomNotifications failled :', error);
  }

  // try {
  //   await randomProgressTrackers(2);
  //   logger.log('Creating randomProgressTrackers success');
  // } catch (error) {
  //   logger.error('Creating randomProgressTrackers failled :', error);
  // }

  try {
    await randomRessources(2);
    logger.log('Creating randomRessources success');
  } catch (error) {
    logger.error('Creating randomRessources failled :', error);
  }

  try {
    await randomRewards(2);
    logger.log('Creating randomRewards success');
  } catch (error) {
    logger.error('Creating randomRewards failled :', error);
  }

  try {
    await randomSubscriptions(2);
    logger.log('Creating randomSubscriptions success');
  } catch (error) {
    logger.error('Creating randomSubscriptions failled :', error);
  }

  try {
    await randomTags(2);
    logger.log('Creating randomTags success');
  } catch (error) {
    logger.error('Creating randomTags failled :', error);
  }

  try {
    await randomVideos(2);
    logger.log('Creating randomVideos success');
  } catch (error) {
    logger.error('Creating randomVideos failled :', error);
  }

  logger.log('Seed data completed!');
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    logger.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
