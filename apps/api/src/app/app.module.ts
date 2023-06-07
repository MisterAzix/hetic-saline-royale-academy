import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
