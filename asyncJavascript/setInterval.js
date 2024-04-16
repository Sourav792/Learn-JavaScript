// ---------------------- SetInterval ----------------------
// setInterval is a JavaScript function used for repeatedly executing a specified code snippet at a set interval. 
// It's commonly used for tasks that need to be performed periodically, such as updating a clock, polling for new data from a server, or creating animations.

// Here's a breakdown of how setInterval works:
// 1. syntax
setInterval(callback, delay, [arg1, arg2]);

// 2. Parameters:
// callback: This is the function that will be executed repeatedly. It can be a reference to an existing function or an inline function.
// delay: This is the time (in milliseconds) between each execution of the callback function.
// [arg1, arg2, ...]: Optional. Additional arguments to pass to the callback function.

// Return value:
// setInterval returns an ID value that uniquely identifies the interval timer. This ID can be used later with the clearInterval function to stop the interval from running.

// Execution:
// Once setInterval is called, the callback function is executed repeatedly at intervals defined by the delay parameter.
// The first execution of the callback function begins after the initial delay.
// Subsequent executions occur after each delay milliseconds.

// Stopping the Interval:
// To stop the interval, you can use the clearInterval function, passing it the ID returned by setInterval.
clearInterval(intervalID);

// Example:---
// Define the callback function
function sayHello() {
    console.log('Hello!');
}

// Call setInterval to execute sayHello() every 2 seconds
const intervalID = setInterval(sayHello, 2000);

// After 10 seconds, stop the interval
setTimeout(() => {
    clearInterval(intervalID);
    console.log('Interval stopped.');
}, 10000);

// In this example:---

// The sayHello function is defined to log "Hello!" to the console.
// setInterval is called with sayHello as the callback function and a delay of 2000 milliseconds (2 seconds).
// The interval ID returned by setInterval is stored in intervalID.
// After 10 seconds (10000 milliseconds), clearInterval is called with intervalID to stop the interval.
// You'll see "Hello!" logged to the console every 2 seconds until the interval is stopped after 10 seconds.
