import { VideoProps } from './VideoProps';
import { Status } from '@prisma/client';

export type MasterclassTableRowProps = {
  id: string;
  video: VideoProps;
  status: Status;
  date: Date;
};
