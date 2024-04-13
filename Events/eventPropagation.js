// ------------------   Event Propagation    ------------------
// Event propagation refers to the mechanism by which events traverse through the DOM hierarchy. There are (two phases) of event propagation: (capturing phase)and (bubbling phase.)

// 1-- Capturing Phase:

// During the capturing phase, the event is first captured by the (outermost ancestor) of the target element and then propagated downwards to the target element. Most commonly used events like (click, mouseover, and keydown) have both (capturing and bubbling phases).

// Here's an example demonstrating capturing phase:

document.getElementById('outerDiv').addEventListener('click', function(e) {
    console.log('Outer Div Capturing Phase');
  }, true); // specifying true activates the capturing phase
  
  document.getElementById('innerDiv').addEventListener('click', function(e) {
    console.log('Inner Div Capturing Phase');
  }, true); // specifying true activates the capturing phase

// In this example, when you click on the inner <div>, first the capturing phase occurs, and the event is captured by the outer <div> and then the inner <div>.


// 2 - Bubbling Phase:

//  where it travels back up the DOM from the target element to the outermost ancestor. This phase is often used and makes event delegation possible.

// Here's an example demonstrating bubbling phase:

document.getElementById('outerDiv').addEventListener('click', function() {
    console.log('Outer Div Bubbling Phase');
  });
  
  document.getElementById('innerDiv').addEventListener('click', function() {
    console.log('Inner Div Bubbling Phase');
  });

//  In this example, when you click on the inner <div>, first the capturing phase occurs, and the event is captured by the inner <div> and then the outer <div>.

// -------------- Stopping Propagation: --------

// You can stop the propagation of an event using (event.stopPropagation() method). This can be useful if you want to prevent further propagation of the event either in the capturing or bubbling phase.

document.getElementById('inner').addEventListener('click', function(e) {
    console.log('Inner Div Bubbling Phase');
    e.stopPropagation(); // Stops further propagation of the event
  });
  