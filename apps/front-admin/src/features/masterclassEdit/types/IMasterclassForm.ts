import { Status } from '@prisma/client';

export interface IChapterForm {
  id: string;
  title: string;
  timecode: string;
}

export interface IMasterclassForm {
  id: string;
  title: string;
  description: string;
  status?: Status;
  chapters: IChapterForm[];
}
