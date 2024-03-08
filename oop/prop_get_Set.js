//  {} []


function User(email, password) {
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    }) 

    Object.defineProperty(this, 'password', {
        get: function() {
            return `${this._password.toUpperCase()}123`
        },
        set: function(value) {
            this._password = value
        }
    }) 
}

let coder_1 = new User('sourav@microsoft.com', 'saho@')
// console.log(coder_1.email);
console.log(coder_1.password);