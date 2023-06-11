import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AchievementModule } from './achievement/achievement.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma.module';
import { UsersModule } from './users/users.module';
import { BadgeModule } from './badge/badge.module';
import { CategoryModule } from './category/category.module';
import { ChapterModule } from './chapter/chapter.module';
import { CourseModule } from './course/course.module';
import { GamificationModule } from './gamification/gamification.module';
import { ImageModule } from './image/image.module';
import { LessonModule } from './lesson/lesson.module';
import { NotificationModule } from './notification/notification.module';
import { ProgressTrackerModule } from './progress_tracker/progress_tracker.module';

@Module({
  imports: [
    //Config passeport to secure end-points
    PassportModule,
    //Config  env varibles
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    //Authentification password-jwt
    AuthModule,
    UsersModule,
    // Config Pisma Client globally
    PrismaModule,
    AchievementModule,
    BadgeModule,
    CategoryModule,
    ChapterModule,
    CourseModule,
    GamificationModule,
    ImageModule,
    LessonModule,
    NotificationModule,
    ProgressTrackerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
