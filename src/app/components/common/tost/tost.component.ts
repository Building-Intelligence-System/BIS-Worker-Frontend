import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tost',
  standalone: true,
  imports: [],
  templateUrl: './tost.component.html',
  styleUrl: './tost.component.scss'
})
export class TostComponent {
  progressTime = progressTime.TIME_PROGRESS;
  progressDescription = progressDescription.TIME_PROGRESS;

  @Input() progress = ProgressTime.TIME_PROGRESS;
  ProgressTime = ProgressTime.TIME_PROGRESS;

  constructor() {
    console.log(progressTime.TIME_PROGRESS)
    console.log(progressDescription)
  }
}

export enum ProgressTime {
  TIME_PROGRESS = "TIME_PROGRESS",
  TIME_OVER = "TIME_OVER",
  TIME_OUT = "TIME_OUT"
}

export const progressTime: Record<ProgressTime, string> = {
  [ProgressTime.TIME_OUT]: 'time-out.svg#time-out',
  [ProgressTime.TIME_OVER]: 'time-over.svg#time-over',
  [ProgressTime.TIME_PROGRESS]: 'time-progress.svg#time-progress',
}

export const progressDescription: Record<ProgressTime, string> = {
  [ProgressTime.TIME_OUT]: 'Время выполнения работы истекло',
  [ProgressTime.TIME_OVER]: 'time-over.svg#time-over',
  [ProgressTime.TIME_PROGRESS]: 'Работа выполняется',
}
