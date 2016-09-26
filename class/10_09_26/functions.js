// call a function when a button is clicked
// ==============================================

// HTML code
// <button onclick="myFunction(parameter)">

// JS code
function myFunction(parameter) {
    // do something
}

// get value from an input field
// ==============================================
var val = document.getElementById('id').value;

// transform string into integer / float
// ==============================================

val = parseInt(val);
val = parseFloat(val);
isNaN(number)

// change innerHTML of an HTML element
// ==============================================
document.getElementById("demo").innerHTML = "Paragraph changed!";

// append text inside an element
// ==============================================
var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

/*
    before appending:
     * Coffee
     * Tea

    after appending:
     * Coffee
     * Tea
     * Water
*/

// add a class to an HTML element (for e.g. styling)
// ==============================================
var d = document.getElementById("div1");
d.className += " MyID";

// remove a class to an HTML element
// ==============================================
document.getElementById("MyID").className =
    document.getElementById("MyID").className
    .replace(/\bMyClass\b/,'');

// or (newer browsers):

document.getElementById("MyID").classList.remove("MyClass");

// remove all classes of a HTML element
// ==============================================
document.getElementById("MyID").className = '';