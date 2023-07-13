import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '074adb4a-1e3c-4a3c-889b-380b1e15693e';

describe('video (e2e)', () => {
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
  it('should create a video', async () => {
    await request(app.getHttpServer())
      .post('/video')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ description: faker.internet.displayName(), url: '/test' })
      .expect(201);
  });

  it('should return all videos', async () => {
    await request(app.getHttpServer())
      .get('/video')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a video by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/video/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const video = response.body;

    expect(video.id).toBe(ENTITIY_ID);
  });

  it('should update a video by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/video/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ description: 'test update' })
      .expect(200);

    expect(response.body.description).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
