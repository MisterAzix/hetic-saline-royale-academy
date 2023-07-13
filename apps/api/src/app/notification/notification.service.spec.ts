import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '12de8293-da9f-499a-8dfd-85ef6d665ff0';

describe('notification (e2e)', () => {
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
  it('should create a notification', async () => {
    await request(app.getHttpServer())
      .post('/notification')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ message: faker.internet.displayName() })
      .expect(201);
  });

  it('should return all notifications', async () => {
    await request(app.getHttpServer())
      .get('/notification')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a notification by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/notification/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const notification = response.body;

    expect(notification.id).toBe(ENTITIY_ID);
  });

  it('should update a notification by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/notification/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ message: 'test update' })
      .expect(200);

    expect(response.body.message).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
