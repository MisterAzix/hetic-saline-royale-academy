//TODO: change all require to import
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function seed() {
  //TODO: ADD TYPES
  //V1. Fake radom data without relation
  const generateRandomUsers = (count: number) => {
    return Array.from({ length: count }, () => ({
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      displayName: faker.person.firstName() + faker.person.lastName(),
      password: 'password',
    }));
  };

  const generateRandomAchievements = (count: number) => {
    return Array.from({ length: count }, () => ({
      title: faker.string.alpha(10),
      description: faker.lorem.sentence(),
      criteria: faker.string.alpha(10),
      unlockDate: faker.date.past(),
      visible: faker.datatype.boolean(),
      deleted: faker.datatype.boolean(),
    }));
  };

  const generateRandomBadges = (count: number) => {
    return Array.from({ length: count }, () => ({
      title: faker.string.alpha(10),
      description: faker.lorem.sentence(),
      criteria: faker.string.alpha(10),
      level: faker.string.alpha(10),
      unlock_date: faker.date.recent(),
      visible: faker.datatype.boolean(),
      hiddenDescription: faker.lorem.sentence(),
      deleted: faker.datatype.boolean(),
    }));
  };

  const generateRandomCategories = (count: number) => {
    return Array.from({ length: count }, () => ({
      name: faker.string.alpha(10),
      description: faker.lorem.sentence(),
      deleted: faker.datatype.boolean(),
    }));
  };

  const generateRandomChapters = (count: number) => {
    return Array.from({ length: count }, () => ({
      title: faker.string.alpha(10),
      description: faker.lorem.sentence(),
      deleted: faker.datatype.boolean(),
    }));
  };

  const generateRandomCourses = (count: number) => {
    return Array.from({ length: count }, () => ({
      title: faker.string.alpha(10),
      description: faker.lorem.sentence(),
      deleted: faker.datatype.boolean(),
    }));
  };

  const generateRandomGamification = (count: number) => {
    return Array.from({ length: count }, () => ({
      description: faker.lorem.sentence(),
      experiencePoint: faker.number.int({ max: 100 }),
      level: faker.string.alpha(10),
      deleted: faker.datatype.boolean(),
    }));
  };

  const generateRandomImages = (count: number) => {
    return Array.from({ length: count }, () => ({
      description: faker.lorem.sentence(),
      height: faker.number.int({ max: 200 }),
      width: faker.number.int({ max: 200 }),
      url: faker.string.sample(),
      deleted: faker.datatype.boolean(),
    }));
  };

  const generateRandomLessons = (count: number) => {
    return Array.from({ length: count }, () => ({
      title: faker.string.alpha(10),
      description: faker.lorem.sentence(),
      duration: faker.number.int({ max: 60 }),
      deleted: faker.datatype.boolean(),
    }));
  };

  const generateRandomNotifications = (count: number) => {
    return Array.from({ length: count }, () => ({
      message: faker.string.alpha(10),
      published: faker.datatype.boolean(),
      deleted: faker.datatype.boolean(),
    }));
  };

  // const generateRandomPTracker = (count: number) => {
  //   return Array.from({ length: count }, () => ({
  //     progress: faker.number.int({ max: 100 }),
  //     userId: faker.string.alpha(10),
  //     courseId: faker.string.alpha(10),
  //   }));
  // };

  const generateRandomRessource = (count: number) => {
    return Array.from({ length: count }, () => ({
      title: faker.string.alpha(10),
      path: faker.string.sample(),
      type: faker.string.alpha(10),
      accessLevel: faker.string.alpha(10),
      duration: faker.number.int({ max: 60 }),
      deleted: faker.datatype.boolean(),
    }));
  };

  const generateRandomRewards = (count: number) => {
    return Array.from({ length: count }, () => ({
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
  };

  const generateRandomSubscription = (count: number) => {
    return Array.from({ length: count }, () => ({
      plan: faker.string.alpha(10),
      payed: faker.datatype.boolean(),
      deleted: faker.datatype.boolean(),
    }));
  };

  const generateRandomTags = (count: number) => {
    return Array.from({ length: count }, () => ({
      name: faker.string.alpha(10),
      deleted: faker.datatype.boolean(),
    }));
  };

  const users = generateRandomUsers(2);

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });

  const achievements = generateRandomAchievements(2);

  await prisma.achievement.createMany({
    data: achievements,
    skipDuplicates: true,
  });

  const badges = generateRandomBadges(2);

  await prisma.badge.createMany({
    data: badges,
    skipDuplicates: true,
  });

  const categories = generateRandomCategories(2);

  await prisma.category.createMany({
    data: categories,
    skipDuplicates: true,
  });

  const chapters = generateRandomChapters(2);

  await prisma.chapter.createMany({
    data: chapters,
    skipDuplicates: true,
  });

  const courses = generateRandomCourses(2);

  await prisma.course.createMany({
    data: courses,
    skipDuplicates: true,
  });

  const gamifications = generateRandomGamification(2);

  await prisma.gamification.createMany({
    data: gamifications,
    skipDuplicates: true,
  });

  const images = generateRandomImages(2);

  await prisma.image.createMany({
    data: images,
    skipDuplicates: true,
  });

  const lessons = generateRandomLessons(2);

  await prisma.lesson.createMany({
    data: lessons,
    skipDuplicates: true,
  });

  const notifications = generateRandomNotifications(2);

  await prisma.notification.createMany({
    data: notifications,
    skipDuplicates: true,
  });

  // const pTracker = generateRandomPTracker(2);

  // await prisma.progressTracker.createMany({
  //   data: pTracker,
  //   skipDuplicates: true,
  // });

  const ressources = generateRandomRessource(2);

  await prisma.ressource.createMany({
    data: ressources,
    skipDuplicates: true,
  });

  const reward = generateRandomRewards(2);

  await prisma.reward.createMany({
    data: reward,
    skipDuplicates: true,
  });

  const subscriptions = generateRandomSubscription(2);

  await prisma.subscription.createMany({
    data: subscriptions,
    skipDuplicates: true,
  });

  const tags = generateRandomTags(2);

  await prisma.tag.createMany({
    data: tags,
    skipDuplicates: true,
  });

  console.log('Seed data completed!');
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
