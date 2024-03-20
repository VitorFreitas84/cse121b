/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Vitor Hugo Santos de Freitas",
    photo: "images/IMG_6311.png",
    favoriteFood: ["Pizza", "Burger", "Beef Stroganoff"],
    hobbies: ["Rc Airplane", "Hiking", " Football", "Tv Shows"],
    placeLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placeLived.push(
    {
        place: "Resende, Brazil",
        length: "10 years"
    },
    {
        place: "Belém do Pará, Brazil",
        length: "2 years",
    },
    {
        place: "Rio de Janeiro, Brazil",
        length: "10 years"
    },
    {
        place: "Houston TX, USA",
        length: "8 months"
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    let bullets =  document.createElement("li");
    bullets.textContent = food;
    document.querySelector("#favorite-foods").appendChild(bullets);   
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby=> {
    let bullets = document.createElement("li");
    bullets.textContent = hobby;
    document.querySelector("#hobbies").appendChild(bullets);
})
/* Places Lived DataList */
myProfile.placeLived.forEach(places=>{
    let place = document.createElement("dt");
    place.textContent = places.place;
    document.querySelector("#places-lived").appendChild(place);
    
    let length = document.createElement("dd");
    length.textContent = places.length;
    document.querySelector("#places-lived").appendChild(length);
})