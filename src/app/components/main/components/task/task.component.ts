import { Component } from '@angular/core';
import {TostComponent} from "../../../common/tost/tost.component";
import {InfoComponent} from "../info/info.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    TostComponent,
    InfoComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  protected description: boolean = false;

}
