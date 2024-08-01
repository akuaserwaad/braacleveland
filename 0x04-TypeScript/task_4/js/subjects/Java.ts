import { Subjects } from './Teacher';
import { Subject } from './Subjects';

declare module Subjects {
  interface Teacher {
    experienceTeachingJava?: number;
  }
}

export namespace Subjects {
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingJava === undefined ||
        this.teacher.experienceTeachingJava === 0
      ) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
