import { Masterclass, MasterclassTracker } from '@prisma/client';

export default interface IMasterclassTracker extends MasterclassTracker {
  masterclass: Masterclass;
}
