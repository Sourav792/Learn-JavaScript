//  {} []

// In JavaScript, getter and setter methods allow you to define custom behavior for accessing and modifying object properties. These methods are useful for encapsulating the internal state of an object and controlling how it's accessed or modified

class User {
    constructor(email, password) {
      this.email = email
      this.password = password
    }
    
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}google `
        }
    set password(value) {
        // this._password = value.toUpperCase()
        this._password = value
    }


}

let coder_1 = new User('sourav@google.com', 'saho@123')

// console.log(coder_1.password);
console.log(coder_1.email);