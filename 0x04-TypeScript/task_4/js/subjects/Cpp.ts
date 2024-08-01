import { Subjects } from './Teacher';
import { Subject } from './Subjects';

declare module Subjects {
  interface Teacher {
    experienceTeachingC?: number;
  }
}

export namespace Subjects {
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingC === undefined ||
        this.teacher.experienceTeachingC === 0
      ) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
