import { EntityJob } from 'app/interfaces/entity-job.interface';
import { TransferMode } from 'app/enums/transfer-mode.enum';
import { Direction } from 'app/enums/direction.enum';
import { Schedule } from './schedule.interface';

export interface CloudCredential {
  id: number;
  name: string;
  provider: string;
  attributes: { [key: string]: string };
}

export interface BwLimit {
  time: string;
  bandwidth: number;
}

export interface CloudSyncTask {
  args: string;
  attributes: { [key: string]: any };
  bwlimit: BwLimit[];
  credentials: CloudCredential;
  description: string;
  direction: Direction;
  enabled: boolean;
  encryption: boolean;
  encryption_password?: string;
  encryption_salt?: string;
  exclude: string[];
  filename_encryption: boolean;
  follow_symlinks: boolean;
  id: number;
  include: string[];
  job: EntityJob;
  locked: boolean;
  path: string;
  post_script: string;
  pre_script: string;
  schedule: Schedule;
  snapshot: boolean;
  transfer_mode: TransferMode;
  transfers: number;
}

export interface CloudSyncTaskUI extends CloudSyncTask {
  credential: string;
  cron: string;
  frequency: string;
  next_run: string;
  state: {
    state: string;
    error?: string;
  };
}
