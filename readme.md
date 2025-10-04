<!-- 1 no question -->
=>getElementById is specific to IDs and returns one element.

=>getElementsByClassName targets classes and returns a live collection.

=>querySelector/querySelectorAll use CSS selectors, offering more flexibility but slower performance.

=>querySelector returns one element; querySelectorAll returns all matching elements.
<!-- 2 no question -->
=>To create and insert a new element into the DOM, follow these steps:
Create the Element:Use document.createElement(tagName) to create a new element.
innerText or innerHTML ==> add content.

appendChild() / append() ==> insert into DOM.

<!-- 3 no question -->
=>Event bubbling is when an event starts from the innermost element and bubbles up to its parent elements.
=>How it Works:

When an event (click) occurs on an element, it first triggers the event handlers on that element (target phase).
Then, it triggers handlers on its parent, grandparent, and so on, up to the document or window (bubbling phase).
This happens because events are designed to propagate upward unless explicitly stopped.
<!-- 4 no question -->
=>Event delegation is attaching a single event listener to a parent element to handle events on its child elements.

=>Useful when you have dynamic elements added later or many child elements.
=>Only one listener, works for current and future children.
<!-- 5 no question -->
preventDefault() ==> Stops the default browser action (like form submit or link navigation).

stopPropagation() ==> Stops the event from bubbling up to parent elements.