/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {}


/* Populate Profile Object with placesLive objects */

myProfile.name = 'Omotoso David';
myProfile.photo = "images/WIN_20230530_11_07_25_Pro.jpg";
myProfile.favouriteFoods = ['Yam and Egg Sauce','Rice and Stew','Beans'];
myProfile.hobbies = ['Writing Codes','Listening to music'];
myProfile.placeLived = [];
myProfile.placeLived.push({
    place:"Osun",
    length:"6 years"
});
myProfile.placeLived.push({place:"Lagos",
length:"1 year"});
myProfile.placeLived.push({
    place:"Jos",
    length:"4 months"
});
myProfile.placeLived.push({
    place:"Oyo",
    length:"8 months"
})
myProfile.placeLived.push({place:"Abuja",length:"1 year"})
console.log(myProfile)
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').innerHTML = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute('src',myProfile.photo);

/* Favorite Foods List*/

myProfile.favouriteFoods.forEach(food=>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby=>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placeLived.forEach(place=>{
let dt = document.createElement('dt');
let dd = document.createElement('dd');
dt.innerHTML = `<b>${place.place}</b>`;
dd.textContent = place.length;
document.querySelector('#places-lived').appendChild(dt);
document.querySelector('#places-lived').appendChild(dd);
})
