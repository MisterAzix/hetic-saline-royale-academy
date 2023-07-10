import {
  CacheInterceptor,
  CacheModule,
  CacheModuleOptions,
} from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { AchievementModule } from './achievement/achievement.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BadgeModule } from './badge/badge.module';
import { CategoryModule } from './category/category.module';
import { ChapterModule } from './chapter/chapter.module';
import { CourseModule } from './course/course.module';
import { GamificationModule } from './gamification/gamification.module';
import { ImageModule } from './image/image.module';
import { LessonModule } from './lesson/lesson.module';
import { NotificationModule } from './notification/notification.module';
import { PrismaModule } from './prisma.module';
import { ProgressTrackerModule } from './progress_tracker/progress_tracker.module';
import { RessourceModule } from './ressource/ressource.module';
import { RewardsModule } from './rewards/rewards.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { TagModule } from './tag/tag.module';
import { UsersModule } from './users/users.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 40,
      max: 100,
    } as CacheModuleOptions),
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
    RessourceModule,
    RewardsModule,
    SubscriptionModule,
    TagModule,
    VideoModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
