export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [idxSig: string]: any;
}

/*
const firstTeacher: Teacher = {
  firstName: 'Soufiane',
  lastName: 'Sadgali',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

const secondTeacher: Teacher = {
  firstName: 'Malik',
  lastName: 'Lavender',
  fullTimeEmployee: true,
  location: 'Vancouver',
  contract: true,
  profeciency: 'Physics',
};

export const teachersList: Teacher[] = [firstTeacher, secondTeacher];

console.log(firstTeacher);
console.log(teachersList[1]);
*/

export interface Directors extends Teacher {
  numberOfReports: number;
}

/*
const firstDirec: Directors = {
  firstName: 'Reda',
  lastName: 'Alami',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

const secondDirec: Directors = {
  firstName: 'Saad',      
  lastName: 'Amrani',  
  fullTimeEmployee: false, 
  location: 'Oklahoma',
  numberOfReports: 12,
  contract: false,
};

export const direcsList: Teacher[] = [firstDirec, secondDirec];    

console.log(firstDirec);      
console.log(direcsList[1]);
*/

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
};

// console.log(printTeacher("Soufiane", "Sadgali"));

export interface stConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

export interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

export default class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

export const student: StudentClass = new StudentClass('Soufiane', 'Sadgali');
console.log(student.displayName());
console.log(student.workOnHomework());
