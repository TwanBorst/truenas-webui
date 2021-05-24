import { EntityJob } from 'app/interfaces/entity-job.interface';
import { Schedule } from 'app/interfaces/schedule.interface';
import { Direction } from 'app/enums/direction.enum';

export interface RsyncTask {
  archive: boolean;
  compress: boolean;
  delayupdates: boolean;
  delete: boolean;
  desc: string;
  direction: Direction;
  enabled: boolean;
  extra: any[];
  id: number;
  job: EntityJob;
  locked: boolean;
  mode: string;
  path: string;
  preserveattr: boolean;
  preserveperm: boolean;
  quiet: boolean;
  recursive: boolean;
  remotehost: string;
  remotemodule: string;
  remotepath: string;
  remoteport: number;
  schedule: Schedule;
  times: boolean;
  user: string;
}

export interface RsyncTaskUI extends RsyncTask {
  cron_schedule: string;
  next_run: string;
  frequency: string;
  state: {
    state: string;
    error?: string;
  };
}
