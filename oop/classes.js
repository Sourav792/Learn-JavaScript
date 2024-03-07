// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// {}
// let coder_1 = new user("sourav", "sourav@google.com", "saho@");
// console.log(coder_1);
// console.log(coder_1.encryptPassword());
// console.log(coder_1.changeUsername());

// behind the scene

// function user(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// user.prototype.changeUsername = () => {
//     return `${this.username.toUpperCase()}`;
// }
// user.prototype.encryptPassword = () => {
//     return `${this.password}abc`;
// }

// let developer_1 = new user('sumit', 'sumit@example.com', '123')
// console.log(developer_1);
// console.log(developer_1.encryptPassword());
// console.log(developer_1.changeUsername());
// {}


// static prop

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username: ${this.username}`);
  }
  static createId() {
    return `abc123`
  }
}

let coder_1 = new User('sourav')
// console.log(coder_1);
// console.log(coder_1.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}

let developer_1 = new Teacher('sunny', 'sunny@gmail.com')
console.log(developer_1.logMe()); 