// ----------------------  E.Target  ---------------
// e.target is a property often encountered when (dealing with events). It represents the element that triggered the event. Understanding it requires the concept of (event propagation), which involves how events traverse through the DOM (Document Object Model) hierarchy.

// When an event occurs on an element in the DOM, it doesn't necessarily mean that only that element is affected. The event can propagate through its ancestors (event bubbling) or descendants (event capturing), depending on how event listeners are set up. The target property helps identify which element actually triggered the event.

// e.target refers to the element that triggered the event.
// It's especially useful in scenarios like event delegation or when dealing with nested elements.
// Understanding event propagation (bubbling and capturing) is crucial for correctly interpreting e.target in different scenarios.

// Example 1: Click Event

document.getElementById('outerDiv').addEventListener('click', function(e) {
    console.log('Outer Div Clicked');
    console.log('Event Target:', e.target);
  });
  
  document.getElementById('innerDiv').addEventListener('click', function(e) {
    console.log('Inner Div Clicked');
    console.log('Event Target:', e.target);
  });

//   In this example, there are two nested <div> elements, one inside the other. Each has its own click event listener. When you click on the inner <div>, both event listeners fire due to event bubbling. However, e.target in each event handler will point to the actual element that was clicked.

// Example 2: Event Delegation

document.getElementById('ul-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      console.log('li Item Clicked:', e.target.textContent);
    }
  });

//   In this example, instead of attaching event listeners to each <li> element, we attach a (single event listener) to the parent <ul> element. This is called (event delegation.) When an <li> element is clicked, the event bubbles up to the <ul>, and we can use e.target to identify which <li> was clicked
