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
	var farentheit;

	return farenheit
}
// 2. write a function that takes in persons birth year and returns their
//  age 
// *****hint what is "a" when I do this: " var a = new Date(); "?
var calculateAge = function(birthYear){
	var age;

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
