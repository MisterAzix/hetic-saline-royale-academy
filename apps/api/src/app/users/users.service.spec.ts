import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '5ca23a13-3b75-463c-a5a1-60653de27813';

describe('user (e2e)', () => {
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
  it('should create a user', async () => {
    await request(app.getHttpServer())
      .post('/user')
      .set('Authorization', `Bearer ${access_token}`)
      .send({
        firstName: faker.person.firstName(),
        password: 'password',
        email: faker.internet.email({ provider: 'gmail.com' }),
        lastName: faker.person.lastName(),
      })
      .expect(201);
  });

  it('should return all users', async () => {
    await request(app.getHttpServer())
      .get('/user')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a user by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/user/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const user = response.body;

    expect(user.id).toBe(ENTITIY_ID);
  });

  it('should update a user by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/user/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ displayName: 'test update' })
      .expect(200);

    expect(response.body.displayName).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
