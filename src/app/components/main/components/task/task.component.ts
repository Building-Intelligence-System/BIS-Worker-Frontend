import {AfterViewInit, Component} from '@angular/core';
import {InfoComponent} from "../info/info.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    InfoComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements AfterViewInit {
  protected description: boolean = false;
  protected taskList: NodeListOf<Element> | undefined;

  ngAfterViewInit(): void {
    this.taskList = document.querySelectorAll('.work-list li');
    console.log(this.taskList);
  }

  removeTask($event: Event): void {
    $event.stopImmediatePropagation();
    const target = $event.target as HTMLElement;
    target.parentElement?.parentElement?.parentElement?.remove();
  }
}
