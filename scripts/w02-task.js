/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Omotoso David";
const currentYear = "";
const profilePicture = "images/WIN_20230530_11_07_25_Pro.jpg";
const favouriteFood = ['Yam and Egg Sauce','Rice and Stew','Beans'];

//

/* Step 3 - Element Variables */
const img = document.querySelector('img');
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
//

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
img.setAttribute('src',profilePicture);
img.setAttribute('alt',`profile image of ${fullName}`);
// yearElement.textContent = 

/* Step 5 - Array */
const moreFood = 'Pounded Yam';
favouriteFood.push(moreFood);

foodElement.innerHTML += `${favouriteFood}<br>`;




