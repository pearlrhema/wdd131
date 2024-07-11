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


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tijuana Mexico",
        location: "Tijuana, Mexico",
        dedicated: "2015, December, 13",
        area: 33367,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tijuana-mexico/400x250/tijuana-mexico-temple-exterior-1603896-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Ciudad Evita, Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Atsubetsu-ku Sapporo, Hokkaido, Japan",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg"
    }
];

// Declare and initialize variables
const allTemples = document.querySelector("#all");
const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");
const titleH2 = document.querySelector("#page-title");

// createTempleCard Function
const createTempleCard = (filteredTemples) => {
    document.querySelector(".res-grid").innerHTML = ``;
    filteredTemples.forEach(temple => {
        const card = document.createElement("section");
        const h3 = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        h3.textContent = temple.templeName;
        location.innerHTML = `<span>Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span>Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", 400);
        img.setAttribute("height", 250);

        card.appendChild(h3);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}

createTempleCard(temples);

// Event Listener
allTemples.addEventListener("click", () => {
    titleH2.textContent = "Home / All Temples";
    createTempleCard(temples);
});
oldTemples.addEventListener("click", () => {
    titleH2.textContent = "Old Temples";
    const filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) < 1900);
    createTempleCard(filteredTemples);
});
newTemples.addEventListener("click", () => {
    titleH2.textContent = "New Temples";
    const filteredTemples = temples.filter(temple => temple.dedicated.match(/\d+/g)[0] > 2000);
    createTempleCard(filteredTemples);
});
largeTemples.addEventListener("click", () => {
    titleH2.textContent = "Large Temples";
    const filteredTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(filteredTemples);
});
smallTemples.addEventListener("click", () => {
    titleH2.textContent = "Small Temples";
    const filteredTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(filteredTemples);
});