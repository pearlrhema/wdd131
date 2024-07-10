const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const templesElement = document.querySelector('#temples');
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Cedar City Utah",
    location: "Cedar City, Utah, United States",
    dedicated: "2017, December, 10",
    area: 42657,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
  },
  {
    templeName: "Provo Utah",
    location: "Provo, Utah, United States",
    dedicated: "1972, February, 9",
    area: 130825,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/400x250/provo-temple-lds-890642-wallpaper.jpg"
  },
  {
    templeName: "Winter Quarters Nebraska",
    location: "Florence, Nebraska, United States",
    dedicated: "2001, April, 22",
    area: 16000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-nebraska-temple-detail-772766.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 403000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
  {
    templeName: "The Hague Netherlands",
    location: "Zoetermeer, Netherlands",
    dedicated: "2019, September, 8",
    area: 10500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-hague-netherlands/2019/400x250/3-hague-netherlands-temple-1088316.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 142000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/1280x800/st-george-temple-lds-149536-wallpaper.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Jordan River Utah",
    location: "South Jordan, Utah, United States",
    dedicated: "1981, November, 16",
    area: 148236,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/CWD_f5579d41-7344-4498-a589-4017ba5fcc91.jpg"
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 25300,
    "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg"
  },
  {
    templeName: "Vernal Utah",
    location: "Vernal, Utah, United States",
    dedicated: "1997, November, 2",
    area: 38771,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vernal-utah/400x250/vernal-temple-lds-82531-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  }
];

  // Loop through the array and create "temple cards" for each temple by displaying
  // name, location, date,  total area, image, native lazy loading 

  document.querySelector(".home").innerHTML = "<h2>Home | All Temples</h2>";
  createTempleCards(temples);

/* let oldTemples = temples => {
    return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10);
        return year < 2000;
    });
}; */
const homeLink = document.getElementById("all temples");
const oldLink = document.getElementById("old temples");
const newLink = document.getElementById("new temples");
const largeLink = document.getElementById("large temples");
const smallLink = document.getElementById("small temples");

/* EventListener to Home Button */
homeLink.addEventListener('click', () => {

  document.querySelector(".home").innerHTML = "<h2>Home | All Temples</h2>";
  createTempleCards(temples);
})


/* EventListener to Old Button */
oldLink.addEventListener("click", () => {
  let oldTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0], 10);
      return year < 1900;
  });

  document.querySelector(".home").innerHTML = "<h2>Old Temples</h2>";
  createTempleCards(oldTemples);
  /* console.log(oldTemples); */
});


/* EventListener to New Button */
newLink.addEventListener("click", () => {
  let newTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0], 10);
      return year > 2000;
  });

  document.querySelector(".home").innerHTML = "<h2>New Temples</h2>";
  createTempleCards(newTemples);
/*     console.log(newTemples);
*/  });


/* EventListener to Large Button */
largeLink.addEventListener("click", () => {
  let largeTemples = temples.filter(temple => temple.area > 90000);
  
  document.querySelector(".home").innerHTML = "<h2>Large Temples</h2>";
  createTempleCards(largeTemples);
/*     console.log(largeTemples);
*/  });


/* EventListener to Large Button */
smallLink.addEventListener("click", () => {
  let smallTemples = temples.filter(temple => temple.area < 10000);
  
  document.querySelector(".home").innerHTML = "<h2>Small Temples</h2>";
  createTempleCards(smallTemples);
  console.log(smallTemples);
});


function createTempleCards(templearray) {
  

  templearray.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<span class="infoLabel">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span>Size:</span> ${temple.area} sq ft`;
      card.className = 'imgBox';
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      // img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector(".home").appendChild(card);

  });
  };