let students = [
  { id: "001", name: "anuj", sport: "criket" },
  { id: "002", name: "sahil", sport: "football" },
  { id: "003", name: "monu", sport: "criket" },
  { id: "004", name: "ankit", sport: "hockey" },
  { id: "005", name: "amit", sport: "basketball" },
  { id: "006", name: "rahul", sport: "criket" },
  { id: "007", name: "reenu", sport: "hockey" },
  { id: "008", name: "sourav", sport: "tannis" },
];

const names = students
// error
  .filter((curvalue) => curvalue.sport === "criket")
  .map((curvalue, index, array) => {
    return "<li>${curvalue.name}</li>";
  });

console.log(names);

const div = document.getElementById("container");
// error
div.innerHTML = "<ul>${names.join('')} </ul>";

console.log(div);

const newarray = students.filter((curvalue) => {
    if(curvalue.id % 2 == 0) return true;
    else return false;
})

console.log('new array is here...');
console.log(newarray);
