import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '1f89a52d-77fe-4673-b658-3228b2faacf0';

describe('Chapter (e2e)', () => {
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
  it('should create a chapter', async () => {
    await request(app.getHttpServer())
      .post('/chapter')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ title: faker.internet.displayName() })
      .expect(201);
  });

  it('should return all chapters', async () => {
    await request(app.getHttpServer())
      .get('/chapter')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a chapter by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/chapter/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const chapter = response.body;

    expect(chapter.id).toBe(ENTITIY_ID);
  });

  it('should update a chapter by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/chapter/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ description: 'test update' })
      .expect(200);

    expect(response.body.description).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
