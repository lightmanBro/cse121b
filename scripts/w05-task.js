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

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await fetch(
      "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );
    if (response.ok) {
      const data = await response.json();
      data.forEach((element) => {
        displayTemples(element);
      });
    }
  } catch (error) {
    console.log(error);
  }
};
getTemples();
/* reset Function */
function reset() {
  templeElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = function (temples) {
  reset();
  let filter = document.querySelector("#sortBy").value;
  switch (filter) {
    case "utah":
      let utah = temples.filter((temp) => temp.location.match("utah"));
      // displayTemples(utah);
      console.log(templelist);
      break;
    case "nonutah":
    default:
      break;
  }
};
/* Event Listener */
