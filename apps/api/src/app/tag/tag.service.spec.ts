import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = 'a1c267a2-b1e4-4f0a-bc2c-24c4a5d49546';

describe('tag (e2e)', () => {
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
  it('should create a tag', async () => {
    await request(app.getHttpServer())
      .post('/tag')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ name: faker.internet.displayName() })
      .expect(201);
  });

  it('should return all tags', async () => {
    await request(app.getHttpServer())
      .get('/tag')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a tag by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/tag/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const tag = response.body;

    expect(tag.id).toBe(ENTITIY_ID);
  });

  it('should update a tag by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/tag/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ name: 'test update' })
      .expect(200);

    expect(response.body.name).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
