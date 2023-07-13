import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '35a76873-bd10-410c-a9ff-a323065de96b';

describe('badge (e2e)', () => {
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
  it('should create a badge', async () => {
    await request(app.getHttpServer())
      .post('/badge')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ title: faker.internet.displayName() })
      .expect(201);
  });

  it('should return all badges', async () => {
    await request(app.getHttpServer())
      .get('/badge')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a badge by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/badge/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const badge = response.body;

    expect(badge.id).toBe(ENTITIY_ID);
  });

  it('should update a badge by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/badge/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ description: 'test update' })
      .expect(200);

    expect(response.body.description).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
