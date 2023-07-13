import { faker } from '@faker-js/faker';
import { Test } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AuthGuard } from './auth.guard';

let app: INestApplication;

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email({ provider: 'gmail.com' });

beforeAll(async () => {
  const moduleFixture = await Test.createTestingModule({
    imports: [AppModule],
  })
    .overrideGuard(AuthGuard)
    .useValue(AuthGuard)
    .compile();

  app = moduleFixture.createNestApplication();
  await app.init();
});

afterAll(async () => {
  await app.close();
});

describe('Authentication (e2e)', () => {
  it('should sign up a new user', async () => {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: 'password',
    };

    const response = await request(app.getHttpServer())
      .post('/auth/signup')
      .send(userData)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.email).toBe(userData.email);
  });
  it('should login an existing user', async () => {
    const userData = {
      email: email,
      password: 'password',
    };

    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send(userData)
      .expect(200);

    expect(response.body).toHaveProperty('access_token');
  });
});
