var myName = "Krysten Yates";
var currentYear = 2014;
var birthYear = 1985;
var myAge = currentYear - birthYear;
var decades = Math.floor(myAge / 10);
var yearRemainder = myAge % 10;
var birthPlace = "Wellington, KS";
var mom = "Linda";
var dad = "Jim";

console.log("Hi! I'm " + myName + "!");
console.log("This year I turn " + myAge + ".");
console.log("That will make me " + decades + " decades and " + yearRemainder + " years old.");
console.log("Here are some more facts about me: \n\t My dad's name is " + dad + "." + "\n\t My mom's name is " + mom + "." + " \n\t I was born in " + birthPlace + ".");

if (myAge > 30) {console.log('Oh my, how the years have passed.')};