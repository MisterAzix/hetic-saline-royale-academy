import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '07d4268e-7e56-436d-86aa-5fe9dd5a3463';

describe('reward (e2e)', () => {
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
  it('should create a reward', async () => {
    await request(app.getHttpServer())
      .post('/reward')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ title: faker.internet.displayName() })
      .expect(201);
  });

  it('should return all rewards', async () => {
    await request(app.getHttpServer())
      .get('/reward')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a reward by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/reward/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const reward = response.body;

    expect(reward.id).toBe(ENTITIY_ID);
  });

  it('should update a reward by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/reward/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ title: 'test update' })
      .expect(200);

    expect(response.body.title).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
