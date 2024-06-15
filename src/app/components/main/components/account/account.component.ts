import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {
  protected openAddTaskForm: boolean = false;
  protected addTaskFormGroup: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.addTaskFormGroup = new FormGroup({
      name: new FormControl(),
      startDate: new FormControl(),
      expectedEndDate: new FormControl(),
      head: new FormControl(),
      person: new FormControl(),
      comment: new FormControl()
    });
  }

  protected onSubmit() {
    console.log(this.addTaskFormGroup.value);
  }
}
