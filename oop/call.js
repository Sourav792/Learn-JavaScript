// --------------------------------- .Call method -------------------------------
// The .call() method used to invoke a function with a specified this value and arguments provided individually.
//  This method allows you to control the current context (the value of this) in which a function is executed. 

// functionName.call(thisArg, arg1, arg2, ...args)

function setUserName(username) {
    // complex DB calls
    this.username = username
    console.log('called');
}

function createUser(username, email, password) {
    // setUserName(username)
    // setUserName.call(username) // reference hold
    setUserName.call(this, username) // this argument is optional

    this.email = email
    this.password = password
}

let student1 = new createUser('sumit', 'sumit@gmail.com', '123abc')

console.log(student1);