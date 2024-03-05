// const user = {
//     username: 'sourabh',
//     userId: '123abc',
//     loggedIn: true,

//     getUserDetails: function() {
//          console.log('got user details from database');
//         console.log(`username: ${username}`);
//          console.log(`username: ${this.username}`);
//         console.log(this); // current context
//     }
// }

// {}

// console.log(user.getUserDetails());
// console.log(this); // empty curly bractes
// console.log(this); // run in browser returns window object

function user(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
   
    this.greeting = function() {
        console.log(`welcome ${this.user}`);
    }

    return this
}

let user1 = new  user('sourabh', 12, true)
let user2 = new user('helloworld', 16, false)
console.log(user1);
console.log(user2);
console.log(user1.constructor);