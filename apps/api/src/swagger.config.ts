import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('Saline Royale Academy')
  .setDescription('The Saline Royale Academy API description')
  .setVersion('0.1')
  .setContact(
    'Team JJMBL',
    //TODO: A remplacer par l'url contact tech du site
    'https://www.linkedin.com/in/justin-katasi/',
    'justinkatasi.dev@gmail.com'
  )

  .build();
