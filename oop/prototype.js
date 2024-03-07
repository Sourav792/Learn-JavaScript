// let myName = 'sourav'
let myName = 'sourav     '
// let myName = 'sourav'

let channelName = 'chai      '



// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.truelength());

let myHeroes = ['skhtiman', 'spiderman', 'maharaja', 'saho'];

let heroPower = {
    skhtiman: 'skhti',
    spiderman: 'spider',

    getSpiderPower: function() {
        console.log(`spiderman power is ${this.spiderman}`);
    }
}

// fectory function = by default function
Object.prototype.sourav = function() {
    console.log(`sourav is present in all objects`);
}

Array.prototype.heySourav = function() {
    console.log('sourav says hello');
}
// heroPower.sourav()
// myHeroes.sourav()
// myHeroes.heySourav()
// heroPower.heySourav() // error

// inheritance


const user = {
    name: 'sourav',
    email: 'sourav@google.com'
}
const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
   makeAssignment: 'js assignment',
   fullTime: true,
   __proto__: teachingSupport
}

teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = 'chaiAurCode   '

String.prototype.truelength = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true leangth is: ${this.trim().length}`);
}
anotherUserName.truelength()

'sourav'.truelength()
'hello'.truelength()