import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '7bbb9e10-d069-4559-895a-24dcce0b94e8';

describe('Category (e2e)', () => {
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
  it('should create a category', async () => {
    await request(app.getHttpServer())
      .post('/category')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ name: faker.internet.displayName() })
      .expect(201);
  });

  it('should return all categories', async () => {
    await request(app.getHttpServer())
      .get('/category')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a category by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/category/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const category = response.body;

    expect(category.id).toBe(ENTITIY_ID);
  });

  it('should update a category by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/category/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ description: 'test update' })
      .expect(200);

    expect(response.body.description).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
