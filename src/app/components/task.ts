export class Task {
  id?: number;
  name?: string;
  startDate?: string;
  expectedEndDate?: string;
  actualEndDate?: string;
  taskState?: TaskState;
  head?: Person;
  workers?: Person[];
  comments?: Comment[];
  stage?: Stage;
}

export class TaskState {

}

export class Stage {

}

export class Person {

}

export class Comment {

}
