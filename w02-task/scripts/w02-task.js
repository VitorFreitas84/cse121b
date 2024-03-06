/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
let fullName = 'Vitor Hugo Santos de Freitas';

/* Step 2 - Variables */

// Declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();

// Declare and instantiate a variable to hold the file path of the image
const profilePicture = 'images/IMG_6311.png'; // Replace "yourprofileimagename.png" with your actual image file name

/* Step 3 - Element Variables */

// Use the document.getElementById() method to get the HTML element with the id of name
const nameElement = document.getElementById('name');

// Use the document.getElementById() method to get the HTML element with the id of food
const foodElement = document.getElementById('food');

// Use the document.querySelector() method to get the element with the id of "year"
const yearElement = document.querySelector('#year');

// Use any viable method to get the profile image element
const imageElement = document.querySelector('img'); // Assuming there is only one <img> tag in the HTML document

/* Step 4 - Adding Content */

// Add the full name to the name element with <strong> tags
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Add the current year to the year element
yearElement.textContent = currentYear;

// Set the src attribute of the image element with the image file path
imageElement.setAttribute('src', profilePicture);

// Set the alt attribute of the image element
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

// Declare an array variable to store favorite foods
const favFoods = ['Pizza', 'Sushi', 'Burgers'];

// Append the favorite foods array onto the displayed content of the food element
foodElement.innerHTML = favFoods.join('<br>');

// Declare and instantiate a variable to hold another favorite food item
const additionalFood = 'Ice Cream';

// Add the additional food item to the favorite foods array
favFoods.push(additionalFood);

// Append the modified favorite foods array onto the displayed content of the food element
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the first element from the favorite foods array
favFoods.shift();

// Append the modified favorite foods array onto the displayed content of the food element
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the last element from the favorite foods array
favFoods.pop();

// Append the final modified favorite foods array onto the displayed content of the food element
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
