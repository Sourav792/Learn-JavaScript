// ---------------------  Event Bubbling   -----------------

// Event bubbling is the phase of event propagation. During event bubbling, the event moves from the  target element top to the outermost ancestor.

// Here's an example demonstrating bubbling phase:

document.getElementById('outerDiv').addEventListener('click', function() {
    console.log('Outer Div Bubbling Phase');
  });
  
  document.getElementById('innerDiv').addEventListener('click', function() {
    console.log('Inner Div Bubbling Phase');
  });

//  In this example, when you click on the inner <div>, first the capturing phase occurs, and the event is captured by the inner <div> and then the outer <div>.

document.getElementById('outer').addEventListener('click', function() {
    console.log('Outer Div Clicked');
  });
  
  document.getElementById('inner').addEventListener('click', function() {
    console.log('Inner Div Clicked');
  });
  
  document.getElementById('button').addEventListener('click', function() {
    console.log('Button Clicked');
  });

//  In this example, when you click on the button, first the capturing phase occurs, and the event is captured by the button and then the inner <div> and then outer <div>.
