// 1.

const student = {
  id: "123",
  name: "Heydar",
  dob: "01/01/1990",
  gradesCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  address: {
    street: "200 East, 1200 South",
    city: "Sandy",
    contact: {
      phone: "3854438974",
      email: "heydar@gmail.com",
    },
  },
  deleteMe: "This should be removed",
};

console.log(
  `${student.name} with id: ${student.id} has been through grade ${student.gradesCompleted}`
);
console.log(student);
delete student["deleteMe"];
console.log(student);

// 2.
const user = {
  firstName: "Heydar",
  lastName: "Rasoulpour",
  city: "Sandy",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

user.semesters["semesterOne"] = "complete";
console.log(user);

delete user.semesters["semesterFour"];
console.log(user);
user["favoraitLanguage"] = "javascript";
console.log(user);

// 3.

numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.pop();
console.log(numbers);
