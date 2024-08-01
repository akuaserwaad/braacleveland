import { Subjects } from './Teacher';
import { Subject } from './Subjects';

declare module Subjects {
  interface Teacher {
    experienceTeachingReact?: number;
  }
}

export namespace Subjects {
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingReact === undefined ||
        this.teacher.experienceTeachingReact === 0
      ) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
