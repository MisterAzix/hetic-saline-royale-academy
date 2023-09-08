import { Chapter } from '@prisma/client';

export interface CouseI {
  id?: string;
  title?: string;
  description?: string;
  progress_tracking_id?: string;
  user_id?: string;
  is_deleted?: boolean;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
  chapters: Chapter[];
}
