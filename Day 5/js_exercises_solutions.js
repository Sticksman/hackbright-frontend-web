// JavaScript Excercises
// How to write a function:
var myReallyCoolFunc = function(arg1, arg2){
	var var1 = "declare variables at the top of your function",
		var2 = "always write js variables and funcs in camelCase",
		var3 = "you can chain together variable decloration like I'm doing here",
		var4 = "notice how I have a comma at the end and tab the next variable",
		var5 = "when you are done, put a semicolon",
		var6;

	// you can also declar all of your variables like this:
	var a = 1;
	var b = 2;
	var c = 3;

	var6 = "I wanted to wait to assign this variable BUT I still declared it at the top!";
	var6 = "It's a good way to keep track of all the variables you are using";

	var1 = "you can always reassign them later if you'd like";

	//you can pass a function arguments and use them throughout your function
	var2 = arg1 + arg2;

	return var2;
}
// Where to test your functions:
// http://repl.it/languages/JavaScript
// copy paste the function below and hit the play button
// always remember to actually call your function not just create it :)
var myFunction = function(){
    return "hi";
}
myFunction();
// 1. Write a function that takes in a degree in celsius and returns
// 	what it would be in farenheit ex. celsiusToFarenheit(0); --> 32
var celsiusToFarenheit = function(celsius){
	// Formula for conversion from celcius to F:
	// http://www.metric-conversions.org/temperature/celsius-to-fahrenheit.htm
	var farentheit = 1.8 * celsius + 32.00;

	return farenheit
}
// 2. write a function that takes in persons birth year and returns their
//  age
// *****hint what is "a" when I do this: " var a = new Date(); "?
var calculateAge = function(birthYear){
    // This requires you to look up how date works.
    // http://www.w3schools.com/jsref/jsref_obj_date.asp
	var age,
        // Create a date object. By default that's today
		today = new Date(),
        // Get the year from the date.
        thisYear = today.getFullYear();

    age = thisYear - birthYear;
	return age
}

// 3. Write a function that counts the number of vowels in a word
//  ex. countVowels("Sara") --> 2
// time to write out that function yourself!



	// SUPERBONUS: return how many of each!
	// ex. countVowels("House") --> {"o": 1, "u": 1, "e":1}
	// What the hell is that ---> {0:1, a:b}?
	// Look here:
	//  1.http://www.w3schools.com/js/js_objects.asp
	// 	2.http://blog.xkoder.com/2008/07/10/javascript-associative-arrays-demystified/

// 4. Write a function that returns the number of words that are in a phrase
// 	ex. numOfWords("Hello World!") --> 2
// *****hint:
//  What do these this return?
// var littleFunc = function(){
// 		var a = "hello world!";
// 		a.toUpperCase();
// 		return a;
// }
// var littleFunc = function(){
// 		var a = "hello world!";
// 		return a[1];
// }

// SUPERBONUS QUESTION:
// Write a function that will return the reverse
// ex. reverseString("hello") --> "olleh"


// *****hint remember this?
// 			"Hello" += "World" --> "HelloWorld"
// you will need to write a for loop!

// Normal version
var countVowels = function(name) {
    var i = 0,
        letter,
        count;

    for (i=0; i < name.length; i+=1) {
        // Gets the letter at index i
        letter = name.substring(i, i+1);
        // Transforms the letter to lowercase
        letter = letter.toLowerCase();
        if ((letter === 'a') || (letter === 'e') ||
            (letter === 'i') || (letter === 'o') ||
            (letter === 'u')) {
            count += 1;
        }
    }
    return count;
};


var countVowelsBonus = function(name) {
    var i = 0,
        vowelObj,
        letter;

    // Creates an obj that have indexes of a, e, i, o u
    // you can access obj indexes with either the . operator or []
    vowelObj = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    for (i=0; i < name.length; i+=1) {
        // Gets the letter at index i
        letter = name.substring(i, i+1);
        // Transforms the letter to lowercase
        letter = letter.toLowerCase();
        // Very important to check undefined here!
        // If you just check that a vowel exists in the obj,
        // it might evaluate to 0 which is false.
        if (vowelObj[letter] !== undefined) {
            vowelObj[letter] += 1;
        }
    }
    return vowelObj;
};
