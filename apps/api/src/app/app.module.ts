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
import { AuthModule } from './auth/auth.module';
import { BadgeModule } from './badge/badge.module';
import { CategoryModule } from './category/category.module';
import { ChapterModule } from './chapter/chapter.module';
import { CourseModule } from './course/course.module';
import { GamificationModule } from './gamification/gamification.module';
import { MasterclassModule } from './masterclass/masterclass.module';
import { NotificationModule } from './notification/notification.module';
import { PrismaModule } from './prisma.module';
import { RewardsModule } from './rewards/rewards.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { TagModule } from './tag/tag.module';
import { UsersModule } from './users/users.module';
import { MasterclassTrackerService } from './masterclass_tracker/masterclass_tracker.service';
import { MasterclassTrackerModule } from './masterclass_tracker/masterclass_tracker.module';

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
    MasterclassModule,
    NotificationModule,
    RewardsModule,
    SubscriptionModule,
    TagModule,
    MasterclassTrackerModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    MasterclassTrackerService,
  ],
})
export class AppModule {}
