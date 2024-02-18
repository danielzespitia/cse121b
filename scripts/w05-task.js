/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    h3.textContent = temple.templeName;
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch() */
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  const json = await response.json();
  templeList.push(...json);
  displayTemples(templeList);
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = (temples) => {
  reset();
  const filterValue = document.querySelector("#filtered").value;
  switch (filterValue) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
    case "old":
      displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case "all":
    default:
      displayTemples(temples);
      break;
  }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});

getTemples();