class User {
  constructor(username) {
    this.username = username
  } 

  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User {
   constructor(username, email, password) {
      super(username)
      this.email = email
      this.password = password
   }

   addCourse() {
    console.log(`a new course was added by ${this.username}`);
   }
}

let user_1 = new Teacher('sourav', 'sourav@google.com', '12345')
// console.log(user_1);
// user_1.addCourse()
// user_1.logMe()

// {}

let user_2 = new User('sumit')
// user_2.logMe()
// user_2.addCourse() // retruns error

// console.log(user_1 instanceof Teacher); // returns true because user_1 is instance of Teacher
console.log(user_1 instanceof User);

// console.log(user_1 === Teacher); // returns false because user_1 is not equal to Teacher
