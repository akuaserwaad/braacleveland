export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();

  return new Director();
}

/**
  console.log(createEmployee(200));
  console.log(createEmployee(1000));
  console.log(createEmployee('$500'));
  */

export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) return employee.workDirectorTasks();
  else return employee.workTeacherTasks();
}

/**
  console.log(executeWork(createEmployee(200)));
  console.log(executeWork(createEmployee(1000)));
  console.log(executeWork(createEmployee('$500')));
  */

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') return 'Teaching Math';
  else if (todayClass === 'History') return 'Teaching History';
  else throw Error(`${todayClass}` + ' is an <Invalid Subject>');
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
console.log(teachClass('CS'));
