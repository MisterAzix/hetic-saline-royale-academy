import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '1f52ca5a-241a-4578-9d6b-51b26b3824d0';

describe('image (e2e)', () => {
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
  it('should create an image', async () => {
    await request(app.getHttpServer())
      .post('/image')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ description: faker.internet.displayName(), url: '/' })
      .expect(201);
  });

  it('should return all images', async () => {
    await request(app.getHttpServer())
      .get('/image')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a image by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/image/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const image = response.body;

    expect(image.id).toBe(ENTITIY_ID);
  });

  it('should update a image by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/image/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ description: 'test update' })
      .expect(200);

    expect(response.body.description).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
