import { Status } from '@prisma/client';

export interface IMasterclassForm {
  id: string;
  title: string;
  description: string;
  status?: Status;
}
