// ------------ Event Important Methods --------------

// 1. event timestamp

// In JavaScript, there's no e.timestamp() function, but there is an Event.timestamp property. This property returns the time at which the event was created, measured in milliseconds since the Unix epoch.

document.addEventListener("mousemove", function(event) {
    console.log("Mouse move event timestamp:", event.timestamp);
});

// In this example, whenever the mouse moves on the webpage, the timestamp of the mousemove event is logged to the console. The event.timestamp property provides the time when the event occurred, which can be useful for various purposes such as measuring the time between events or tracking user interaction timings.

// 2. event e.stopPropagation

// In JavaScript, e.stopPropagation() is a method used in event handling to prevent the further propagation of an event. When an event occurs on an element, such as a click or a keypress, it typically triggers handlers attached to that element and then bubbles up through its ancestors. 
// e.stopPropagation() stops this bubbling process, preventing any parent elements from handling the event.

document.getElementById("child").addEventListener("click", function(e) {
    e.stopPropagation();
    console.log("Child element clicked");
});

document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent element clicked");
});

// Event Delegation:
document.getElementById("parent").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        console.log("Clicked on list item: " + e.target.textContent);
    }
});


