import { Component } from '@angular/core';
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
export class TaskComponent {
  protected description: boolean = false;

}
