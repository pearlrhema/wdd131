const date = new Date().getFullYear();
const dateElement = document.querySelector("#year");

let lastModified = new Date(document.lastModified);
const lastModifiedElement = document.querySelector("#lastmodified");

dateElement.innerHTML = date;
lastModifiedElement.innerHTML = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
 

// Declare and initialize variables
/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("Delicacies");
const foodList = [];

/* async displayTemples Function */
const displayFoodList = (foods) => {
    for (const food of foods) {
        const myArticle = document.createElement("article");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        h3.textContent = food.productName;
        h4.textContent = food.Description;
        const img = document.createElement("img");
        img.src = food.imageUrl;
        img.setAttribute('alt', `${food.productName}`);
        myArticle.appendChild(h4);
        myArticle.appendChild(h3);
        myArticle.appendChild(img);
        templesElement.appendChild(myArticle);
    };
}


/* async getTemples Function using fetch()*/

displayFoodList(foodList);

/* reset Function */
const reset = () => {
    templesElement.textContent = "";
};

/* sortBy Function */
const sortCategories = (Delicacies) => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "stove":
            displayFoodList(Delicacies.filter(food => food.category.includes("stove")));
            break;
        case "cylinder":
            displayFoodList(Delicacies.filter(food => food.category.includes("cylinder")));
            break;
        case "burner":
            displayFoodList(Delicacies.filter(food => food.category.includes("burner")));
            break;
        default:
            displayFoodList(foodList);
            break;
    }
}


// getFoodListFromJsonFile();
//reset();

/* Event Listener */
document.getElementById("sortBy").addEventListener('change', () => {sortCategories(foodList)});