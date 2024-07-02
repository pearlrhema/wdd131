let firstName = 'Antonia';
let lastName = 'Essien';

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const fullName = function (first, last) {
    return `${first} ${last}`;
}

const fullName = (firstName, lastName) => `${firstName}${lastName}`;

//this expression calls the fullName function declaration and writes the result to an existing HTML element's text node with the ID of fullName
document.querySelector('#fullname').innerHTML =fullName(firstName, lastName)