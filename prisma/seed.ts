import { Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {
  randomAchievements,
  randomBadges,
  randomCategories,
  randomChapters,
  randomCourses,
  randomGamification,
  randomMasterclasses,
  randomNotifications,
  randomRewards,
  randomSubscriptions,
  randomTags,
  randomUsers,
  randomProgressTrackers,
} from './faker';

const prisma = new PrismaClient();
const logger = new Logger('seed logging');

async function seed() {
  try {
    await randomUsers(2);
    logger.log('Creating randomUsers success');
  } catch (error) {
    logger.error('Creating randomUsers failed :', error);
  }

  try {
    await randomAchievements(2);
    logger.log('Creating randomAchievements success');
  } catch (error) {
    logger.error('Creating randomAchievements failed :', error);
  }

  try {
    await randomBadges(2);
    logger.log('Creating randomBadges success');
  } catch (error) {
    logger.error('Creating randomBadges failed :', error);
  }

  try {
    await randomCategories(2);
    logger.log('Creating randomCategories success');
  } catch (error) {
    logger.error('Creating randomCategories failed :', error);
  }

  try {
    await randomChapters(2);
    logger.log('Creating randomChapters success');
  } catch (error) {
    logger.error('Creating randomChapters failed :', error);
  }

  try {
    await randomCourses(2);
    logger.log('Creating randomCourses success');
  } catch (error) {
    logger.error('Creating randomCourses failed :', error);
  }

  try {
    await randomGamification(2);
    logger.log('Creating randomGamification success');
  } catch (error) {
    logger.error('Creating randomGamification failed :', error);
  }

  try {
    await randomMasterclasses(2);
    logger.log('Creating randomMasterclasses success');
  } catch (error) {
    logger.error('Creating randomMasterclasses failed :', error);
  }

  try {
    await randomNotifications(2);
    logger.log('Creating randomNotifications success');
  } catch (error) {
    logger.error('Creating randomNotifications failed :', error);
  }

  // try {
  //   await randomProgressTrackers(2);
  //   logger.log('Creating randomProgressTrackers success');
  // } catch (error) {
  //   logger.error('Creating randomProgressTrackers failed :', error);
  // }

  try {
    await randomRewards(2);
    logger.log('Creating randomRewards success');
  } catch (error) {
    logger.error('Creating randomRewards failed :', error);
  }

  try {
    await randomSubscriptions(2);
    logger.log('Creating randomSubscriptions success');
  } catch (error) {
    logger.error('Creating randomSubscriptions failed :', error);
  }

  try {
    await randomTags(2);
    logger.log('Creating randomTags success');
  } catch (error) {
    logger.error('Creating randomTags failed :', error);
  }
  try {
    await randomProgressTrackers(2);
    logger.log('Creating randomProgressTrackers success');
  } catch (error) {
    logger.error('Creating randomProgressTrackers failed :', error);
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
