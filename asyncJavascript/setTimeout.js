// --------------------- SetTimeout ------------------
// SetTimeout is a JavaScript function used to execute a specified code snippet or function after a specified delay. 
// It's commonly used for tasks that need to be performed once, after a certain period of time.

// syntax 
setTimeout(callback, delay, [arg1, arg2]);

// 2. Parameters:
// callback: This is the function that will be executed after the specified delay. It can be a reference to an existing function or an inline function.
// delay: This is the time (in milliseconds) to wait before executing the callback function.
// [arg1, arg2, ...]: Optional. Additional arguments to pass to the callback function.

// 3. Return value:
// setTimeout returns a timer ID value that can be used with the clearTimeout function to cancel the execution of the callback before it happens.

// Execution:
// Once setTimeout is called, it schedules the execution of the callback function after the specified delay.
// The delay is measured in milliseconds, so a delay of 1000 would mean the callback will execute after 1 second.
// After the specified delay, the JavaScript runtime will add the callback function to the execution queue, and it will be executed when the main thread is free.

// Stopping the Timer:
// If you want to cancel the execution of the callback before it happens, you can use the clearTimeout function, passing it the timer ID returned by setTimeout
clearTimeout(timerID);

// Define the callback function
function sayHello() {
    console.log('Hello!');
}

// Call setTimeout to execute sayHello() after 2 seconds
const timerID = setTimeout(sayHello, 2000);

// After 1 second, cancel the timeout
setTimeout(() => {
    clearTimeout(timerID);
    console.log('Timeout canceled.');
}, 1000);

// In this example:
// The sayHello function is defined to log "Hello!" to the console.
// setTimeout is called with sayHello as the callback function and a delay of 2000 milliseconds (2 seconds).
// The timer ID returned by setTimeout is stored in timerID.
// After 1 second (1000 milliseconds), clearTimeout is called with timerID to cancel the execution of the callback.
// As a result, "Timeout canceled." will be logged to the console after 1 second, and "Hello!" will not be logged at all because the timeout was canceled before it could execute.