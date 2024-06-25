// student object
const student1 = {
    firstName: "Jack",
    rollNo: 32 
};

console.log(student1); // Output: { firstName: 'Jack', rollNo: 32 }

//======================The syntax of JavaScript object is:=================//
const objectName = {
    key1: value1,
    key2: value2,
    //...,
    keyN: valueN
};

//======================JavaScript Objects===========================//
// create person object
const person1 = {
    name: "John",
    age: 20
};

console.log(person1);

// Output: { name: "John", age: 20 }

//========================JavaScript Objects - Example 1: Using Dot Notation =======================//
const dog = {
    name: "Rocky",
};

// access property
console.log(dog.name);

// Output: Rocky

//============================= JavaScript Objects -Example 2: Using Bracket Notation ===========//
const cat = {
    name: "Luna",
};

// access property
console.log(cat["name"]);
// Output: Luna

//==================================== JavaScript Object Operations: 1-Modify Object Properties =============//
const person = {
    name: "Bobby",
    hobby: "Dancing",
};

// modify property
person.hobby = "Singing";

// display the object
console.log(person);

// Output: { name: 'Bobby', hobby: 'Singing' }

//==================================== JavaScript Object Operations: 2. Add Object Properties =============//
const student = {
    name: "John",
    age: 20,
};

// add properties
student.rollNo = 14;
student.faculty = "Science";

// display the object
console.log(student);

// Output: { name: 'John', age: 20, rollNo: 14, faculty: 'Science' }


//==================================== JavaScript Object Operations: 3. Delete Object Properties =============//
const employee = {
    name: "Tony",
    position: "Officer",
    salary: 30000,
};

// delete object property
delete employee.salary

// display the object
console.log(employee);

// Output: { name: 'Tony', position: 'Officer' }

//==================================== JavaScript Object Methods:  We can also include functions inside an object.=============//
//===Example===//
const person = {
    name: "Bob",
    age: 30,

    // use function as value
    greet: function () {
        console.log("Bob says Hi!");
    }
};

// call object method
person.greet();  // Output: Bob says Hi! 