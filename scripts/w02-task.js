/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Daniel Zeniff Espitia Ramirez";

const currentYear = new Date().getFullYear();

const profilePicture = "images/me.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = "<strong>${fullName}</strong>";

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", "Profile image of ${fullName}");

/* Step 5 - Array */

nameElement.innerHTML = "<strong>Daniel Espitia</strong>";

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", "Profile image of ${fullName}");

const favFoods = ["Pizza", "Burger", "Hot Dog", "Rice", "Orange"];

foodElement.innerHTML = favFoods.join(", ");

const newFavoriteFood = "Ice Cream";

favFoods.push(newFavoriteFood); 

foodElement.innerHTML += `<br>${favFoods.join(", ")}`;

favFoods.shift();

foodElement.innerHTML += `<br>${favFoods.join(", ")}`;

favFoods.pop();

foodElement.innerHTML += `<br>${favFoods.join(", ")}`;