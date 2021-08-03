import {
  Component, Input, OnChanges, OnInit,
} from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { EntityTableComponent } from 'app/pages/common/entity/entity-table/entity-table.component';
import { TaskService } from 'app/services';

@UntilDestroy()
@Component({
  selector: 'app-task-schedule-list',
  template: `
    <h4 [style.margin]="'6px 16px 12px'">{{ 'Upcoming tasks' | translate }}</h4>

    <mat-divider></mat-divider>

    <mat-list>
      <mat-list-item *ngFor="let run of futureRuns">
        {{ run }}
      </mat-list-item>
    </mat-list>
  `,
})
export class TaskScheduleListComponent implements OnInit, OnChanges {
  private static readonly LIST_LENGTH = 5;
  @Input() value: string;
  @Input() config: { schedule?: string; cron_schedule?: string; cron?: string; scrub_schedule?: string };
  @Input() parent: EntityTableComponent & { conf: any };

  futureRuns: string[];

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this.buildFutureRuns();
  }

  ngOnChanges(): void {
    this.buildFutureRuns();
  }

  private buildFutureRuns(): void {
    const scheduleExpression = this.config.cron_schedule
      || this.config.cron
      || this.config.scrub_schedule
      || this.config.schedule;

    this.futureRuns = this._taskService
      .getTaskNextRuns(scheduleExpression, TaskScheduleListComponent.LIST_LENGTH)
      .map((run) => run.toLocaleString());
  }
}
