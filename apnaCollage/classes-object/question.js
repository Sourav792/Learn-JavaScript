/* ques -1  you are creating a website for your collage . create a class user with 2 properties , name and email . it also has a method called viewData() that allow user to view website data */

/* ques -2  create a new class called admin which inhertance from user. add a new method called editdata to admin that allows it to edit website data */
let Data = "secret information";
class user {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data = ", Data);
    }
}

class admin extends user {
    constructor(name,email) {
        super(name,email);
    }
    editData() {
        Data = "some new value data"
    }
}

let person1 = new user("sourav", "sou760@gmail.com");
let person2 = new user("gourav", "gourav45@gmail.com");
let teacher1 = new user("anuj", "anuj2333@gmail.com");

let admin1 = new admin("saho", "saho796@gmail.com");

// error handling 

