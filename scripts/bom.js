const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // you need to fill in the blank to reference the HTML element that is a unordered list element.

// Create a li element that will hold each entries chapter title and an associated delete button.
const li = document.createElement('li');

// Create a delete button.
const deleteButton = document.createElement('button')

// Populate the li element variable's textContent or innerHTML with the input value.
//textContent is preferred over innerHTML because it is more secure.
// However, if you need to include HTML tags, then you would use innerHTML.
// textContent will not render HTML tags. It will display the tags as text.

//Why is the value property used?
// Because the input variable references an HTML input text field and that is what is wanted, i.e., the user's entry. Here is the HTML that was provided: <input type="text" id="favchap" placeholder="Alma 5">
li.textContent = input.value

// Populate the button textContent with a ❌
deleteButton.textContent = '❌';

// Append the li element variable with the delete button
li.append(deleteButton);

// Append the li element variable to the unordered list in your HTML.
list.append(li)

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function () {
    list.appendChild(input.value);
    console.log(list);
})