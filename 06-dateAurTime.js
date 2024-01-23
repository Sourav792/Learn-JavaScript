// dates

let myDate = new Date();
// console.log(myDate); // 2024-01-23T04:16:21.200Z
// console.log(myDate.toString()); // IST = indian standard time
// console.log(myDate.toDateString()); // returns a date (mm/dd/yy)
// console.log(myDate.toISOString());  // 2024-01-23T04:20:09.504Z
// console.log(myDate.toJSON()); // 2024-01-23T04:20:09.504Z
// console.log(myDate.toLocaleDateString()); // returns local date format ( 1/23/2024) (mm/dd/yy) 
// console.log(myDate.toLocaleString()); // returns local date & time format ( 1/23/2024, 9:50:09 AM) (mm/dd/yy hr/min/sec) 
// console.log(typeof myDate);  // returns a date type of  = object

// let createDate = new Date(2025, 0, 1);
// console.log(createDate); // 2024-12-31T18:30:00.00Z
// console.log(createDate.toDateString()); // WED Jan 01 2025
// let createDate = new Date("2024-01-23"); // yy-mm-dd
let createDate = new Date("01-23-2024"); // mm-dd-yy

// console.log(createDate.toLocaleString()); // 1/23/2024, 5:30:00 AM
// console.log(createDate.toLocaleDateString()); // 1/23/2024
// console.log(createDate.toLocaleTimeString()); // 5:30:00 AM

// ==============================  TimeStamp ==================

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // returns time in milliseconds for this date
// console.log(createDate.getTime()); // Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC

// console.log(Date.now()/1000); // returns time in seconds
// console.log(Math.floor(Date.now()/1000)); // returns time in seconds

let date = new Date();

// console.log(date.getDate()); // returns current date (23)
// console.log(date.getDay()); // returns  current day (tuesday)
// console.log(date.getFullYear()); // returns current year (2024)
// console.log(date.getHours()); // returns current hour (12 PM)
// console.log(date.getMonth()); // returns current month (Jan = 0)
// console.log(date.getMonth() + 1); // returns current month
// console.log(date.getMinutes()); // returns current minute (16)
// console.log(date.getTimezoneOffset()); // returns the difference, in minutes, between date as evaluated in the UTC time zone and as evaluated in the local time zone
// console.log(date.getUTCDate()); // returns date = 23
// console.log(date.getUTCDay()); // returns 2 = tuesday


// date.toLocaleString('default', {
//     era: 'long',
//     hourCycle: 'h24',
//     numberingSystem: 'roman'
// })

console.log(date.toLocaleString('default', {
    era: 'long',
    hourCycle: 'h24',
    numberingSystem: 'roman'
})); // returns 1/23/2024 Anno Dominni, 12:35:55


// getTimeZoneOffSet() method

const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-02:00');

// console.log(date1.getTimezoneOffset());
// Expected output: your local timezone offset in minutes
// (e.g., -120). NOT the timezone offset of the date object.

// console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
// Expected output: true
