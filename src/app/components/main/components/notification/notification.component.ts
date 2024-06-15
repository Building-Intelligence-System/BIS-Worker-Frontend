import {Component, OnInit} from '@angular/core';
import {InfoComponent} from "../info/info.component";

@Component({
  selector: 'app-notification',
  standalone: true,
    imports: [
        InfoComponent
    ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  protected notifications: string[] | undefined;

    ngOnInit(): void {
        this.notifications = ['Добавлена новая задача', 'Добавлен коментарий к задаче "Ограждение территории', 'Превышение сроков к "Заливка фундамента под ограждение', 'Подходит срок выполнения задачи "Уборка территории'];
    }
}
