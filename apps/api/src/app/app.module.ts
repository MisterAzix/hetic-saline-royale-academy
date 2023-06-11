import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AchievementModule } from './achievement/achievement.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma.module';
import { UsersModule } from './users/users.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
