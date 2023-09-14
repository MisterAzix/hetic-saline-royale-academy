import { Masterclass } from '@prisma/client';

export interface IChapter {
  id: string;
  title: string;
  timecode: string;
  masterclass_id: string;
  course_id: string;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date;
  masterclass: Masterclass;
}
