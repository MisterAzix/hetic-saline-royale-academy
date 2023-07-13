import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { AuthService } from '../auth/auth.service';

const ENTITIY_ID = '2cd84206-ab91-4fa2-bf53-377c85ca5cc8';

describe('ressource (e2e)', () => {
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
  it('should create a ressource', async () => {
    await request(app.getHttpServer())
      .post('/ressource')
      .set('Authorization', `Bearer ${access_token}`)
      .send({ title: faker.internet.displayName() })
      .expect(201);
  });

  it('should return all ressources', async () => {
    await request(app.getHttpServer())
      .get('/ressource')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);
  });

  it('should return a ressource by its id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/ressource/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200);

    const ressource = response.body;

    expect(ressource.id).toBe(ENTITIY_ID);
  });

  it('should update a ressource by its id', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/ressource/${ENTITIY_ID}`)
      .set('Authorization', `Bearer ${access_token}`)
      .send({ title: 'test update' })
      .expect(200);

    expect(response.body.title).toBe('test update');
  });

  afterEach(async () => {
    await app.close();
  });
});
