let date = document.querySelector('#date');
let day = document.querySelector('#day');
let month = document.querySelector('#month');
let year = document.querySelector('#year');


let dateObject = new Date();
let dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let MonthName = ['January','February','March','April','May','June','July','August','September','October','November','December']

date.innerHTML = dateObject.getDate();
day.innerHTML = dayName[dateObject.getDay()];
month.innerHTML = MonthName[dateObject.getMonth()];
year.innerHTML = dateObject.getFullYear();
