// Question one
// console.log("Hello, World!");
// Question two 
// let myname = "Ali";
// let message = = "is a good person";
// console.log(myname+" "+myage);
// Exercise two
var personName = "Eric";
var personNameMessage = "Hello ".concat(personName, ", would you like to learn some Python?");
console.log(personNameMessage);
// Exercise three
var personName = prompt("Enter your name:");
console.log("Lowercase: ".concat(personName.toLowerCase()));
console.log("Uppercase: ".concat(personName.toUpperCase()));
console.log("Titlecase: ".concat(personName.split(" ").map(function (word) { return word[0].toUpperCase() + word.slice(1).toLowerCase(); }).join(" ")));
// Exercise four 
var personName = "Albert Einstein";
var personQuote = "".concat(personName, " once said, A person who never made a mistake never tried anything new");
console.log(personQuote);
// Exercise five 
var famous_person = "Albert Einstein";
var personQuote = "".concat(famous_person, " once said, A person who never made a mistake never tried anything new");
console.log(personQuote);
// Exercise six
var nameWithWhitespace = "\t John Doe \n";
console.log("Name with whitespace:", nameWithWhitespace);
var trimmedName = nameWithWhitespace.trim();
console.log("Stripped name:", trimmedName);
// Exercise seven
console.log("Addition:", 4 + 4);
console.log("Subtraction:", 12 - 4);
console.log("Multiplication:", 2 * 4);
console.log("Division:", 64 / 8);
console.log("Modulus:", 13 % 5);
console.log("Exponentiation:", Math.pow(2, 3));
// Exercises eight 
console.log("---------------------");
console.log("console.log(5 + 3)");
console.log("---------------------");
// Exercise nine 
var FavoriteNumber = 76;
var Numbermessage = "".concat(FavoriteNumber, " is my favorite number");
console.log(Numbermessage);
// Exercise ten
/*let FavoriteNumber = 76;
let Numbermessage : string = `${FavoriteNumber} is my favorite number`;
console.log(Numbermessage);
*/
/*In this program favoritenumber holds the value 76 and in the message I have written that 76 is my favorite number*/
/*
let personName = "Albert Einstein";
let personQuote: string = `${personName} once said, A person who never made a mistake never tried anything new`;
*/
/* In this code I chose Einstein and one of his famous quote put it together */
// Exercise eleven 
var friends = ["Eric", "Bob", "Peter", "Jason"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
// Exercise twelve 
var friends = ["Eric", "Bob", "Peter", "Jason"];
var message = "Hi there, ";
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    console.log("".concat(message).concat(friend, "!"));
}
// Exercise thirteen
var cars = ["Suzuki Alto", "Kia Sportage", "Nissan Sunny", "Honda Civic", "Honda City"];
console.log("Cars are a convenient and versatile mode of transportation.");
console.log("I appreciate the freedom and flexibility that cars offer.");
console.log("The Suzuki Alto is a fuel-efficient option for city driving.I would love to have it");
console.log("The Kia Sportage offers ample space and practicality for families.I would love to have it");
console.log("The Nissan Sunny is a reliable and affordable choice for everyday needs.I would love to have it");
console.log("The Honda Civic is known for its performance and sporty design.I would love to have it");
console.log("The Honda City is a comfortable and well-equipped sedan for urban commutes.I would love to have it");
// Exercise fourteen
// List of guest names
var guests = ["Babar Azam", "Michael Phelps", "Cristiano Ronaldo", "Michael Jackson", "Elvis Presley", "Muhammad Ali"];
var message = "We'd love to invite you to a dinner to celebrate ";
var reason = "the achievements of incredible individuals across various fields.";
for (var _a = 0, guests_1 = guests; _a < guests_1.length; _a++) {
    var guest = guests_1[_a];
    console.log("".concat(message).concat(reason, ", dear ").concat(guest, "."));
}
// Exercise fifteen 
var guests = ["Babar Azam", "Michael Phelps", "Cristiano Ronaldo", "Michael Jackson", "Elvis Presley", "Muhammad Ali"];
var message = "We'd love to invite you to a dinner to celebrate ";
var reason = "the achievements of incredible individuals across various fields.";
for (var _b = 0, guests_2 = guests; _b < guests_2.length; _b++) {
    var guest = guests_2[_b];
    console.log("".concat(message).concat(reason, ", dear ").concat(guest, "."));
}
var ATTENTION = "We are sorry to announce that Babar won't be able to make it as he is busy in cricket league.";
console.log(ATTENTION);
var guests = ["Sachin Tendulkar", "Michael Phelps", "Cristiano Ronaldo", "Michael Jackson", "Elvis Presley", "Muhammad Ali"];
var message = "We'd love to invite you to a dinner to celebrate ";
var reason = "the achievements of incredible individuals across various fields.";
for (var _c = 0, guests_3 = guests; _c < guests_3.length; _c++) {
    var guest = guests_3[_c];
    console.log("".concat(message).concat(reason, ", dear ").concat(guest, "."));
}
// Exercise sixteen
var guests = ["Babar Azam", "Michael Phelps", "Cristiano Ronaldo", "Michael Jackson", "Elvis Presley", "Muhammad Ali"];
guests.push("Donald Trump");
var message = "We'd love to invite you to a dinner to celebrate ";
var reason = "the achievements of incredible individuals across various fields.";
for (var _d = 0, guests_4 = guests; _d < guests_4.length; _d++) {
    var guest = guests_4[_d];
    console.log("".concat(message).concat(reason, ", dear ").concat(guest, "."));
}
// Exercise seventeen
var guests = ["Babar Azam", "Michael Phelps", "Cristiano Ronaldo", "Michael Jackson", "Elvis Presley", "Muhammad Ali"];
console.log("Unfortunately, my new dinner table won't arrive in time. I can only invite two guests!");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", but due to limited seating, I won't be able to invite you to dinner."));
    }
}
console.log("Congratulations,", guests[0], "and", guests[1], ", you're still invited to dinner!");
guests.length = 0;
console.log("Remaining guests:", guests);
// Exercise eighteen 
var travelWishlist = ["Amsterdam", "Tokyo", "Jakarta", "Dhaka", "Kuala Lumpur"];
console.log("Original list:", travelWishlist);
console.log("Alphabetical order (copy):", travelWishlist.slice().sort()); // Sorts a copy
console.log("Original list (unchanged):", travelWishlist);
console.log("Reverse alphabetical order (copy):", travelWishlist.slice().sort().reverse());
console.log("Original list (unchanged):", travelWishlist);
travelWishlist.reverse();
console.log("List reversed:", travelWishlist);
travelWishlist.reverse();
console.log("List back to original:", travelWishlist);
travelWishlist.sort();
console.log("List sorted alphabetically:", travelWishlist);
travelWishlist.sort().reverse();
console.log("List sorted reverse alphabetically:", travel);
var numberOfGuests = guests.length;
console.log("You are inviting ".concat(numberOfGuests, " people to dinner:"));
for (var _e = 0, guests_5 = guests; _e < guests_5.length; _e++) {
    var guest = guests_5[_e];
    console.log(guest);
}
// Exercise twenty 
var mountains = [
    "K2",
    "Mount Everest",
    "Kangchenjunga",
    "Lhotse",
    "Makalu",
    "Denali",
    "Aconcagua",
    "Mont Blanc",
    "Mount Fuji",
    "Elbrus",
];
var rivers = [
    "Nile",
    "Amazon",
    "Yangtze",
    "Mississippi-Missouri-Red-Arkansas",
    "Ob-Irtysh",
    "Congo",
    "Parana",
    "Amur",
    "Mekong",
    "Huanghe",
];
var countries = [
    "Japan",
    "Italy",
    "Mexico",
    "Canada",
    "India",
    "France",
    "Brazil",
    "Spain",
    "Germany",
    "Australia",
];
var cities = [
    "New York City",
    "London",
    "Paris",
    "Tokyo",
    "Rio de Janeiro",
    "Shanghai",
    "Mumbai",
    "Moscow",
    "São Paulo",
    "Beijing",
];
var languages = [
    "Spanish",
    "English",
    "Mandarin Chinese",
    "Hindi",
    "Arabic",
    "Portuguese",
    "Bengali",
    "Russian",
    "Japanese",
    "French",
];
var fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Strawberry",
    "Blueberry",
    "Watermelon",
    "Avocado",
];
console.log("Mountains:");
for (var _f = 0, mountains_1 = mountains; _f < mountains_1.length; _f++) {
    var mountain = mountains_1[_f];
    console.log(mountain);
}
console.log("\nRivers:");
for (var _g = 0, rivers_1 = rivers; _g < rivers_1.length; _g++) {
    var river = rivers_1[_g];
    console.log(river);
}
console.log("\nCountries:");
for (var _h = 0, countries_1 = countries; _h < countries_1.length; _h++) {
    var country = countries_1[_h];
    console.log(country);
}
console.log("\nCities:");
for (var _j = 0, cities_1 = cities; _j < cities_1.length; _j++) {
    var city = cities_1[_j];
    console.log(city);
}
console.log("\nLanguages:");
for (var _k = 0, languages_1 = languages; _k < languages_1.length; _k++) {
    var language = languages_1[_k];
    console.log(language);
}
console.log("\nFruits:");
for (var _l = 0, fruits_1 = fruits; _l < fruits_1.length; _l++) {
    var fruit = fruits_1[_l];
    console.log(fruit);
}
var pants = {
    brand: "Levi's",
    size: "32",
    color: "Blue",
    material: "Denim",
};
var shirt = {
    brand: "Uniqlo",
    size: "Medium",
    color: "White",
    material: "Cotton",
};
var shoes = {
    brand: "Nike",
    size: "9",
    color: "Black",
    material: "Leather",
};
var trousers = {
    brand: "Hugo Boss",
    size: "30",
    color: "Grey",
    material: "Wool",
};
console.log("Pants:");
console.log(pants);
console.log("\nShirt:");
console.log(shirt);
console.log("\nShoes:");
console.log(shoes);
console.log("\nTrousers:");
console.log(trousers);
// Exercise twenty two
