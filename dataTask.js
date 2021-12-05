// TASK
// 1. You should create a function constructor ‘Student’ which you can call with
// two arguments name and email.
// Name, email and homeworkResults fields should be hidden from user.
// Instance of Student should provide the following methods to get or change it’s state:
// getName(): returns student’s name.
// getEmail(): returns student’s email.
// getHomeworkResults(): returns student’s homeworkResults
// addHomeworkResult(topic, success): you can call this method with 2 arguments:
// topic(string) and success(boolean). This method should add new element to student’s
//  homeworkResults property.

// 2. You should create a function constructor ‘FrontendLab’ which you can call with
// two arguments students and failedLimit.

// Instance of FrontendLab should have 2 property fields:
// failedHomeworksLimit
// and studentsList.
// This fields should be hidden from user.
// Instance of Student should provide the following methods to
// get or change it’s state.

// printStudentsList(): this method logs to console list of students with
// their homeworks results

// addHomeworkResults(homeworkResults): this method can be called with argument homeworkResult,
//  object with 2 fields: topic(string) and results(array of objects with 2 fields:
// email(string) and success(boolean)). This method should update all student objects
// in FrontendLab studentsList.

// printStudentsEligibleForTest(): this method should log to console list of students
//  who didn’t fail more homework, than allowed failedLimit.

import { listOfStudents, homeworkResults } from "./data.js";
// console.log(listOfStudents);
// console.log(homeworkResults);

// class Student {
//   #name;
//   #email;
//   #homeworkResults;

//   constructor({ name, email, homeworkResults }) {
//     this.#name = name;
//     this.#email = email;
//     this.#homeworkResults = homeworkResults;
//   }
//   getName() {
//     return this.#name;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   getHomeworkResults() {
//     return homeworkResults;
//   }
//   addHomeworkResult(topic, success) {
//     homeworkResults.push({ topic, success });
//   }
// }

// const student = new Student({ name: "John", email: "john@gmail.com" });
// console.log(student.getHomeworkResults());
// console.log(student.addHomeworkResult("HTML", true));
// console.log(student.getHomeworkResults());

function Student(name, email) {
  // this.prototype.name = name;
  // this.prototype.email = email;
  let homeworkResults = [];

  this.getName = function () {
    return name;
  };
  this.getEmail = function () {
    return email;
  };
  this.getHomeworkResults = function () {
    return homeworkResults;
  };
  this.addHomeworkResult = function (topic, success) {
    homeworkResults.push({ topic, success });
  };
}

const student = new Student("John", "john@gmail.com");
const student2 = new Student("Bob", "bob@gmail.com");

// console.dir(Student);
// console.log(student);
// console.log(student.getName());
// console.log(student.getEmail());

// console.log(student.getHomeworkResults());
// console.log(student.addHomeworkResult("HTML", true));
// console.log(student.getHomeworkResults());

// console.log(student2);
// console.log(student2.getName());
// console.log(student2.getEmail());

// console.log(student2.getHomeworkResults());
// console.log(student2.addHomeworkResult("JS", false));
// console.log(student2.getHomeworkResults());

function FrontendLab(students, failedLimit) {
  this.students = students;
  this.failedLimit = failedLimit;
  // let homeworkResults = [];
  this.failedHomeworksLimit = function () {};
  this.studentsList = function () {};
  this.printStudentsList = function () {
    return students.forEach((el) =>
      console.log(`name: ${el.name}, email: ${el.email} `)
    );
  };
  this.addHomeworkResults = function (obj) {
    return homeworkResults.forEach((el) =>
      console.log(`topic: ${el.topic}, success: ${el.results.success} `)
    );
  };
}

const lab = new FrontendLab(listOfStudents, 1);
console.log(FrontendLab);
console.log(lab);
console.log(lab.printStudentsList());
console.log(lab.addHomeworkResults(homeworkResults[0]));
