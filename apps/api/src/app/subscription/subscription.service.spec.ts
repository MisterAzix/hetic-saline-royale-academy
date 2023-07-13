import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '629a6a1e-73bb-4023-af5a-4c6779fdd2df';

describe('subscription (e2e)', () => {
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
  it('should create a subscription', async () => {
    await request(app.getHttpServer())
      .post('/subscription')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ plan: faker.internet.displayName() })
      .expect(201);
  });

  it('should return all subscriptions', async () => {
    await request(app.getHttpServer())
      .get('/subscription')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a subscription by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/subscription/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const subscription = response.body;

    expect(subscription.id).toBe(ENTITIY_ID);
  });

  it('should update a subscription by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/subscription/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ plan: 'test update' })
      .expect(200);

    expect(response.body.plan).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
