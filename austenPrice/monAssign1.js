var myName = 'Austen Price';

var currentYear = 2014;

var birthYear = 1987;

var myAge = currentYear - birthYear;

var decades = Math.floor(myAge / 10);

var yearRemainder = myAge % 10;

var birthPlace = 'Portland, OR';

var mom = 'Brenda Baldwin';

var dad = 'Edward Price';

console.log ("Hello my name is " + myName + " and I enjoy coding.")

console.log ("This year I will turn " +  myAge + ".")

console.log ("I will be " + decades + " decades and " + yearRemainder + " years old.");

console.log ("Here are my vital stats..." + '\n' + "	" + 'Birthplace: ' + birthPlace + '\n' + "	" + "Mother's Name: " + mom + '\n' + "	" + "Father's Name: " + dad )



if (myAge > 30) {console.log('Oh my, how the years have passed.')};
