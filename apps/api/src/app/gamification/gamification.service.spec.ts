import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '199cf455-c805-479a-b408-6b94a94222a7';

describe('gamification (e2e)', () => {
  let app: INestApplication;
  let access_token;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const authService = moduleFixture.get<AuthService>(AuthService);
    access_token = (await authService.signIn('john.doe@gmail.com', 'password'))
      .access_token;

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  it('should create a gamification', async () => {
    await request(app.getHttpServer())
      .post('/gamification')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ description: faker.internet.displayName() })
      .expect(201);
  });

  it('should return all gamifications', async () => {
    await request(app.getHttpServer())
      .get('/gamification')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a gamification by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/gamification/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const gamification = response.body;

    expect(gamification.id).toBe(ENTITIY_ID);
  });

  it('should update a gamification by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/gamification/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ description: 'test update' })
      .expect(200);

    expect(response.body.description).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
