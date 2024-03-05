// Question one
// console.log("Hello, World!");

// Question two 
// let myname = "Ali";
// let message = = "is a good person";
// console.log(myname+" "+myage);

// Exercise two
let personName = "Eric";
let personNameMessage: string = `Hello ${personName}, would you like to learn some Python?`; 

console.log(personNameMessage); 

// Exercise three
let personName: string = prompt("Enter your name:"); 

console.log(`Lowercase: ${personName.toLowerCase()}`);

console.log(`Uppercase: ${personName.toUpperCase()}`);

console.log(`Titlecase: ${personName.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")}`);

// Exercise four 
let personName = "Albert Einstein";
let personQuote: string = `${personName} once said, A person who never made a mistake never tried anything new`; 

console.log(personQuote);

// Exercise five 
let famous_person = "Albert Einstein";
let personQuote: string = `${famous_person} once said, A person who never made a mistake never tried anything new`; 

console.log(personQuote);

// Exercise six
const nameWithWhitespace: string = "\t John Doe \n";


console.log("Name with whitespace:", nameWithWhitespace);

const trimmedName: string = nameWithWhitespace.trim();

console.log("Stripped name:", trimmedName);

// Exercise seven
console.log("Addition:", 4 + 4); 
console.log("Subtraction:", 12 - 4); 
console.log("Multiplication:", 2 * 4); 
console.log("Division:", 64 / 8); 
console.log("Modulus:", 13 % 5); 

console.log("Exponentiation:", 2 ** 3); 

// Exercises eight 

console.log("---------------------");
console.log("console.log(5 + 3)");
console.log("---------------------");

// Exercise nine 

let FavoriteNumber = 76;
let Numbermessage : string = `${FavoriteNumber} is my favorite number`;
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
const friends: string[] = ["Eric", "Bob", "Peter", "Jason"];

console.log(friends[0]); 
console.log(friends[1]); 
console.log(friends[2]); 
console.log(friends[3]); 

// Exercise twelve 
const friends: string[] = ["Eric", "Bob", "Peter", "Jason"];

const message = "Hi there, ";

for (const friend of friends) {
  console.log(`${message}${friend}!`);
}

// Exercise thirteen
const cars: string[] = ["Suzuki Alto", "Kia Sportage", "Nissan Sunny", "Honda Civic", "Honda City"];

console.log("Cars are a convenient and versatile mode of transportation.");
console.log("I appreciate the freedom and flexibility that cars offer.");

console.log("The Suzuki Alto is a fuel-efficient option for city driving.I would love to have it");
console.log("The Kia Sportage offers ample space and practicality for families.I would love to have it");
console.log("The Nissan Sunny is a reliable and affordable choice for everyday needs.I would love to have it");
console.log("The Honda Civic is known for its performance and sporty design.I would love to have it");
console.log("The Honda City is a comfortable and well-equipped sedan for urban commutes.I would love to have it");

// Exercise fourteen
// List of guest names
const guests: string[] = ["Babar Azam", "Michael Phelps", "Cristiano Ronaldo", "Michael Jackson", "Elvis Presley", "Muhammad Ali"];

const message: string = "We'd love to invite you to a dinner to celebrate ";

const reason: string = "the achievements of incredible individuals across various fields.";

for (const guest of guests) {
  console.log(`${message}${reason}, dear ${guest}.`);
}

// Exercise fifteen 
const guests: string[] = ["Babar Azam", "Michael Phelps", "Cristiano Ronaldo", "Michael Jackson", "Elvis Presley", "Muhammad Ali"];

const message: string = "We'd love to invite you to a dinner to celebrate ";

const reason: string = "the achievements of incredible individuals across various fields.";

for (const guest of guests) {
  console.log(`${message}${reason}, dear ${guest}.`);
}

const ATTENTION: string ="We are sorry to announce that Babar won't be able to make it as he is busy in cricket league.";
console.log(ATTENTION);

const guests: string[] = ["Sachin Tendulkar", "Michael Phelps", "Cristiano Ronaldo", "Michael Jackson", "Elvis Presley", "Muhammad Ali"];

const message: string = "We'd love to invite you to a dinner to celebrate ";

const reason: string = "the achievements of incredible individuals across various fields.";

for (const guest of guests) {
  console.log(`${message}${reason}, dear ${guest}.`);
}

// Exercise sixteen

const guests: string[] = ["Babar Azam", "Michael Phelps", "Cristiano Ronaldo", "Michael Jackson", "Elvis Presley", "Muhammad Ali"];
guests.push("Donald Trump");
const message: string = "We'd love to invite you to a dinner to celebrate ";

const reason: string = "the achievements of incredible individuals across various fields.";

for (const guest of guests) {
  console.log(`${message}${reason}, dear ${guest}.`);
}

// Exercise seventeen

const guests: string[] = ["Babar Azam", "Michael Phelps", "Cristiano Ronaldo", "Michael Jackson", "Elvis Presley", "Muhammad Ali"];

console.log("Unfortunately, my new dinner table won't arrive in time. I can only invite two guests!");

while (guests.length > 2) {
  const removedGuest = guests.pop(); 
  if (removedGuest) {
    console.log(`Sorry, ${removedGuest}, but due to limited seating, I won't be able to invite you to dinner.`);
  }
}

console.log("Congratulations,", guests[0], "and", guests[1], ", you're still invited to dinner!");

guests.length = 0;

console.log("Remaining guests:", guests); 

// Exercise eighteen 
const travelWishlist: string[] = ["Amsterdam", "Tokyo", "Jakarta", "Dhaka", "Kuala Lumpur"];

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
console.log("List sorted reverse alphabetically:", travel

  const numberOfGuests = guests.length;
  
  console.log(`You are inviting ${numberOfGuests} people to dinner:`);
  
  for (const guest of guests) {
    console.log(guest);
  }

  // Exercise twenty 

const mountains: string[] = [
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
  
  const rivers: string[] = [
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
  
  const countries: string[] = [
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
  
  const cities: string[] = [
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
  
  const languages: string[] = [
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
  

  const fruits: string[] = [
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
  for (const mountain of mountains) {
    console.log(mountain);
  }
  
  console.log("\nRivers:");
  for (const river of rivers) {
    console.log(river);
  }
  
  console.log("\nCountries:");
  for (const country of countries) {
    console.log(country);
  }
  
  console.log("\nCities:");
  for (const city of cities) {
    console.log(city);
  }
  
  console.log("\nLanguages:");
  for (const language of languages) {
    console.log(language);
  }
  
  console.log("\nFruits:");
  for (const fruit of fruits) {
    console.log(fruit);
  }
  
// Exercise twenty one 

interface ClothingItem {
    brand: string;
    size: string;
    color: string;
    material: string;
  }
  

  const pants: ClothingItem = {
    brand: "Levi's",
    size: "32",
    color: "Blue",
    material: "Denim",
  };
  
  const shirt: ClothingItem = {
    brand: "Uniqlo",
    size: "Medium",
    color: "White",
    material: "Cotton",
  };
  
  const shoes: ClothingItem = {
    brand: "Nike",
    size: "9",
    color: "Black",
    material: "Leather",
  };
  
  const trousers: ClothingItem = {
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
  
  

















