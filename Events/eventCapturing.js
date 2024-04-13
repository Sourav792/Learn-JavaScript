// ------------------------   Event Capturing   ----------------------

// Event capturing is the phase of event propagation. During event capturing, the event moves from the outermost ancestor down to the target element.

// To use event capturing, you need to set the third parameter of the addEventListener method to true. By default, this parameter is false, which means the event handler listens for events during the bubbling phase.

// Here's a simple example to illustrate event capturing:

document.getElementById('outer').addEventListener('click', function() {
    console.log('Outer Div Capturing Phase');
  }, true); // specifying true activates the capturing phase
  
  document.getElementById('inner').addEventListener('click', function() {
    console.log('Inner Div Capturing Phase');
  }, true); // specifying true activates the capturing phase

// In this example, when you click on the inner <div>, first the capturing phase occurs, and the event is captured by the outer <div> and then the inner <div>.