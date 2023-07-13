import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '236e6d46-da96-420e-80fe-b49ece97459c';

describe('lesson (e2e)', () => {
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
  it('should create a lesson', async () => {
    await request(app.getHttpServer())
      .post('/lesson')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ title: faker.internet.displayName() })
      .expect(201);
  });

  it('should return all lessons', async () => {
    await request(app.getHttpServer())
      .get('/lesson')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a lesson by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/lesson/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const lesson = response.body;

    expect(lesson.id).toBe(ENTITIY_ID);
  });

  it('should update a lesson by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/lesson/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ description: 'test update' })
      .expect(200);

    expect(response.body.description).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
