/* W05: Programming Tasks */
/* Declare and initialize global variables */
const templeElement = document.querySelector("#temples");
let templelist = [];

/* async displayTemples Function */
const displayTemples = function (temples) {
  let article = document.createElement("article");
  let h3 = document.createElement("h3");
  h3.innerHTML = temples.templeName;
  let img = document.createElement("img");
  img.setAttribute("src", temples.imageUrl);
  img.setAttribute("alt", temples.location);
  article.appendChild(h3);
  article.appendChild(img);
  templeElement.appendChild(article);
};

/* async getTemples Function using fetch() */
const getTemples = async () => {
  try {
    const response = await fetch(
      "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );
    if (response.ok) {
      const data = await response.json();
      templelist = data; // Store data in templelist
      data.forEach(displayTemples);
    }
    console.log(templelist);
  } catch (error) {
    console.log(error);
  }
};

getTemples();

/* reset Function */
function reset() {
  templeElement.textContent = "";
  // templelist.forEach(displayTemples); // Redisplay all temples
}

/* sortBy Function */
const sortBy = function () {
  let filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "utah":
      const utahTemples = templelist.filter((temple) =>
        temple.location.toLowerCase().includes("utah")
      );
      reset(); // Clear the display
      console.log(utahTemples);
      utahTemples.forEach(displayTemples); // Display filtered temples
      break;

    case "notutah":
      const nonUtahTemples = templelist.filter(
        (temple) => !temple.location.toLowerCase().includes("utah")
      );
      // console.log(nonUtahTemples);
      reset(); // Clear the display
      nonUtahTemples.forEach(displayTemples); // Display filtered temples
      break;
    case "older":
      let older = templelist.sort((a, b) => {
        const dateStringA = a.dedicated;
        const datePartsA = dateStringA.split(", ");
        const yearA = parseInt(datePartsA[0]);
        const monthNameA = datePartsA[1];
        const dayA = parseInt(datePartsA[2]);
        const formattedDateA = `${yearA}-${monthNameA}-${dayA}`;
        const aDate = new Date(formattedDateA);

        const dateStringB = b.dedicated;
        const datePartsB = dateStringB.split(", ");
        const yearB = parseInt(datePartsB[0]);
        const monthNameB = datePartsB[1];
        const dayB = parseInt(datePartsB[2]);
        const formattedDateB = `${yearB}-${monthNameB}-${dayB}`;
        const bDate = new Date(formattedDateB);
        return aDate - bDate;
      });
      reset();
      older.forEach(displayTemples);
      break;
    case "all":
      templelist.forEach(displayTemples);
      break;
    default:
      break;
  }
};
/* Event Listeners */
document.querySelector("#sortBy").addEventListener("change", sortBy);

const dateString = "2005, August, 7";
const dateParts = dateString.split(", ");
const year = parseInt(dateParts[0]);
const monthName = dateParts[1];
const day = parseInt(dateParts[2]);

// Create a date string in the format "YYYY-MM-DD"
const formattedDate = `${year}-${monthName}-${day}`;
const dateObject = new Date(formattedDate);

console.log(dateObject);
