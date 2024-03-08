//  {} []

const User = {
    _email: 'sourav@google.com',
    _password: 'sou123',

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    },
    get password() {
        return `${this._password.toUpperCase()}@000`
    },
    set password(value) {
        this._password = value
    }
}

// console.log(User);
// console.log(User.email);
// console.log(User.password);
let coder_1 = Object.create(User)
// console.log(coder_1.email);
// console.log(coder_1.password);


// propasal for private properties
class ClassWithPrivate {
    #privateField;
    #privateFieldWithInitializer = 42;
  
    #privateMethod() {
      // …
    }
  
    static #privateStaticField;
    static #privateStaticFieldWithInitializer = 42;
  
    static #privateStaticMethod() {
      // …
    }
  }
  