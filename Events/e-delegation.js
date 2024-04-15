// ------------- Event Delegation ------------------
 
// Event delegation is a powerful technique in web development. you attach a single event listener to a parent element.
//  This listener then watches for events bubbling up from the children, and based on the event target, decides what action to take. 
// This approach is particularly useful when you have a large number of elements that share the same event handling logic.

// Example :---
document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      console.log('You clicked on:', event.target.textContent);
    }
  });
  
// How It Works:
// Event Bubbling: When an event occurs on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

// Event Object: The event object contains information about the event, including the target property, which is the element that triggered the event.

// Conditional Logic: In the event handler, you check if the event's target matches the specific child element you're interested in. If it does, you perform the desired action.


// Example 2:--  with Dynamic Content:

// Let's say you have a button that adds new items to the list dynamically.
document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      console.log('You clicked on:', event.target.textContent);
    }
  });
  
  document.getElementById('addItemBtn').addEventListener('click', function() {
    let newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    document.getElementById('myList').appendChild(newItem);
  });

//   In this example, even though the new list items are added dynamically, they automatically inherit the click event listener attached to their parent <ul> element.

// Event delegation is a technique that leverages the natural behavior of event propagation in the DOM to simplify event handling, improve performance, and streamline code maintenance, especially in scenarios involving dynamic content or large numbers of elements.





  