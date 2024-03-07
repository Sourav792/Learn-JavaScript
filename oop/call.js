function setUserName(username) {
    // complex DB calls
    this.username = username
    console.log('called');
}

function createUser(username, email, password) {
    // setUserName(username)
    // setUserName.call(username) // reference hold
    setUserName.call(this, username) 

    this.email = email
    this.password = password
}

let student1 = new createUser('sumit', 'sumit@gmail.com', '123abc')

console.log(student1);