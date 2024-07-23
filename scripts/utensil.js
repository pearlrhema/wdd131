/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("Delicacies");
let foodList = [];

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
        myArticle.appendChild(img);
        myArticle.appendChild(h3);
        templesElement.appendChild(myArticle);
    };
}


/* async getTemples Function using fetch()*/
const getFoodListFromJsonFile = async () => {
    const myresponse = await fetch("https://pearlrhema.github.io/wdd131/utensils.json");
    let foodData = await myresponse.json();
    foodList = foodData;
    displayFoodList(foodList);
    // console.log(foodList);
}

/* reset Function */
const reset = () => {
    templesElement.textContent = "";
}

/* sortBy Function */
const sortCategories = (Delicacies) => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "cylinder":
            displayFoodList(Delicacies.filter(food => food.category.includes("cylinder")));
            break;
        case "burner":
            displayFoodList(Delicacies.filter(food => food.category.includes("burner")));
            break;
        case "stove":
            displayFoodList(Delicacies.filter(food => food.category.includes("stove")));
            break;
        default:
            displayFoodList(foodList);
            break;
    }
}


getFoodListFromJsonFile();
reset();

/* Event Listener */
document.getElementById("sortBy").addEventListener('change', () => {sortCategories(foodList)});