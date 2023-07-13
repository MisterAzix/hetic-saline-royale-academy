import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '02a67d63-c0f5-498e-bc1e-880ac67a06ba';

describe('Achievement (e2e)', () => {
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
  it('should create an achievement', async () => {
    await request(app.getHttpServer())
      .post('/achievement')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ title: faker.internet.displayName() })
      .expect(201);
  });

  it('should return all achievements', async () => {
    await request(app.getHttpServer())
      .get('/achievement')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return an achievement by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/achievement/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const achievement = response.body;

    expect(achievement.id).toBe(ENTITIY_ID);
  });

  it('should update an achievement by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/achievement/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ description: 'test update' })
      .expect(200);

    expect(response.body.description).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
