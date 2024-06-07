const date = new Date().getFullYear();
const dateElement = document.querySelector("#year");

let lastModified = new Date(document.lastModified);
const lastModifiedElement = document.querySelector("#lastmodified");

dateElement.innerHTML = date;
lastModifiedElement.innerHTML = lastModified;
// alert(document.LastModif);