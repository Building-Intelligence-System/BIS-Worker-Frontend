import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  protected readonly Object = Object;
  tabNameList = tabNameList ;
}

export enum TabName {
  TASK = "TASK",
  NOTIFICATION = "NOTIFICATION",
  CHAT = "CHAT",
  MAP = "MAP"
}

export const tabNameList: Record<TabName, [string, string]> = {
  [TabName.TASK]: ['Задачи', 'assets/icons/task.svg#task'],
  [TabName.NOTIFICATION]: ['Напоминания', 'assets/icons/notification.svg#notification'],
  [TabName.CHAT]: ['Чат', 'assets/icons/message.svg#message'],
  [TabName.MAP]: ['Карта', 'assets/icons/map.svg#map']
}
