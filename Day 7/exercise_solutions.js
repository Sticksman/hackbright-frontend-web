/* This will be a review of different objects we learned about in class.
 * First up Strings
 * Second is Arrays
 * Third are objects
 */

// String exercise 1
// A palindrome is a string that reads forwards and backwards the same.
// Cat is not a palindrome
// Ana is a palindrome
// racecar is a palindrome
// A man a plan a canal is a palindrome.
// Write a method that takes a string and determines whether or not it's a palindrome
//
var palindrome = function (word) {
    // Naive implementation
    var reversedWord = '';
    // Remove spaces and lower case the word.
    word = word.toLowerCase().replace(' ', '');
    // This loop will reverse the word.
    // Get one letter at a time starting from the last
    for (var i = word.length - 1; i >= 0; i -= 1) {
        reversedWord += word.substring(i, i+1);
    }
    // Compare the reversed word to the word.
    if (reversedWord === word) {
        return true;
    }
    return false;
};

var smartPalindrome = function (word) {
    // More advanced implementation
    var letter1, letter2;
    // Remove spaces and lower case the word.
    word = word.toLowerCase().replace(' ', '');
    for (var i=0; i < Math.floor(word/2); i+=1) {
        // Start with the first letter, compare it to the last letter
        // Then work inwards.
        letter1 = word.substring(i, i+1);
        letter2 = word.substring(word.length - (i+1), word.length - i);
        // If the two letters are not equivalent then we know that it's not a palindrome.
        if (letter1 !== letter2) {
            return false;
        }
    }
    // If we made it out of the loop then we're good.
    return true;
};
//
// String exercise 2
// Write a function that takes a string and reverses it. You are not allowed to use string reverse.
//
var reverseString = function(word) {
    var reversedWord = '';
    // Start at the last letter, and subtract 1 until i < 0
    for(var i=word.length - 1; i >= 0; i-=1) {
        reversedWord += word.substring(i, i+1);
    }
    return reversedWord;
};
//
// String exercise 3
// Write a function that takes a string and and a number and rotates it right.
// For example of I took cat and rotated it 1 then I would get tca. If I rotated it 2 I'd get atc.
//
var rotateString = function(word, rotationStops) {
    var firstPart, lastPart;
    // Get the actual number of rotations.
    rotationStops = rotationStops % word.length;
    // Include a case for negatives
    if (rotationStops < 0) {
        // cat rotated 1 left would be atc which is the same as rotationg right 2
        rotationStops = word.length - rotationStops;
    }
    // Start at word.length - rotations - 1. No second param means it will go till the end of the string.
    lastPart = word.substring(word.length - rotationStops - 1);
    firstPart = word.substring(0, word.length - rotationStops - 1);
    return lastPart + firstPart;
};
//
// String exercise 4
// Write a function that takes two strings. Then figure out whether or not string 2 is a part of string 1.
// String 2 is a part of string 1 if the entire string is found in a single contiguous block.
// for example: race is in racecar, car is in racecar
//
var stringInString = function(str1, str2) {
    // Remember indexOf gives you the index of a substring, or -1 if it's not found.
    return str1.indexOf(str2) > 0
};
//
// Array exercise 1
// Write a function that takes an array and another variable.
// If the element exists in the array, return its index. Else return -1
//
var elInArray = function(arr, el) {
    // Same question as the above.
    return arr.indexOf(el);
};
//
// Array exercise 2
// Write a function that takes an array. Reverse the array.
// BONUS: can you do this in place?
//
var reverseArray = function(arr) {
    return arr.reverse();
};
//
// Array exercise 3
// Write a function that takes an array and a variable. Add the variable to the end of the array.
// Hint: There's a builtin to do this.
//
var addToEnd = function(arr, el) {
    arr.push(el);
    return arr;
};
//
// Array exercise 4
// Write a function that returns the last element of the array and removes it from the array.
// Hint: there's a built in to do this.
//
var getLast = function(arr) {
    return arr.pop()
};
//
// Array and string exercise 5
// Write a function that takes a string. Split the string on every comma and add it to the list.
//
var splitString = function(str) {
    return str.split(',');
};
//
// Array and String exercise 6
// Write a function that takes an array. Join all the elements of the array together into a string, separated by commas
//
var joinArray = function(arr) {
    return arr.join(',');
}
//
// Array exercise 7
// Write a function that takes two arrays.
// Then find the intersection between the two arrays.
// The intersection of two sets is defined as this:
// if you have set 1 with [1, 2, 3]
// and you have set two with [2, 3, 10]
// then the intersection is [2, 3]
// BONUS: Assume the two arrays are sorted. Does this change how you can do this problem?
// Part 2: write a union function
// A union between two sets.
// If you have set 1 [1, 2, 3] and set 2 [2, 3, 10]
// the union of the two sets is [1, 2, 3, 10]
//
var intersection = function(arr1, arr2) {
    // Naive implementation
    var arr3 = [], el1, el2;
    // Loop through the first array.
    for (var i=0; i < arr1.length; i++) {
        // Get element at index i of array 1
        el1 = arr1[i];
        for (var j=0; j < arr2.length; j++) {
            // Get element of index j from array 2
            el2 = arr2[j];
            // Compare el1 and el2.
            // If they are equal check if we already stored it in arr3
            // if not, add it to arr3.
            if ((el1 === el2) && (arr3.indexOf(el1) < 0)) {
                arr3.push(el1);
            }
        }
    }
    return arr3;
};

var sortedIntersection = function (arr1, arr2) {
    // Assume arr1 and arr2 are sorted in some way.
    var arr3 = [],
        index1 = 0,
        index2 = 0;
    // If index1 is greater than or equal to the length of arr1 stop.
    // This is because the last element of arr1 is arr1.length - 1
    // Also check index2 and array2
    while ((index1 >= arr1.length) || (index2 >= arr2.length)) {
        // We want to increment whichever index contains the lesser number.
        // Hence the if and else if
        if (arr1[index1] < arr2[index2]) {
            index1 += 1;
        } else if(arr1[index1] > arr2[index2]) {
            index2 += 1;
        } else {
            // At this point we know the two numbers must have been equal.
            // Increment both indices and try and add to the set.
            index1 += 1;
            index2 += 1;
            if (arr3.indexOf(arr1[index1]) < 0) {
                arr3.push(arr1[index1]);
            }
        }
    }
    return arr3;
};

var union = function (arr1, arr2) {
    var arr3 = [],
        el;
    // Union is easier. We just need to put everything in set 1
    // and everything into set 2 into a new set and remove all duplicates.
    for (var i=0; i < arr1.length; i++) {
        el = arr1[i];
        if (arr3.indexOf(el) < 0) {
            arr3.push(el);
        }
    }
    for (var i=0; i < arr2.length; i++) {
        el = arr2[i];
        if (arr3.indexOf(el) < 0) {
            arr3.push(el);
        }
    }
    return arr3;
};
//
// Object exercise 1
// Write a function that takes an object. Now return an array of all the keys in that object.
//
var getKeys = function (obj) {
    // The for in loop is an easier way to write a for loop.
    // When you loop over an object you get its keys.
    var keys = []
    for (var key in obj) {
        keys.push(key);
    }
    return keys
};
//
// Object exercise 2
// Redo array exercise 7. This time inside the function use an object to help you with the intersection.
//
var intersectionWithObj = function(arr1, arr2) {
    var lookupTable = {},
        arr3;
    // If index1 is greater than or equal to the length of arr1 stop.
    // This is because the last element of arr1 is arr1.length - 1
    // Also check index2 and array2
    while ((index1 >= arr1.length) || (index2 >= arr2.length)) {
        // We want to increment whichever index contains the lesser number.
        // Hence the if and else if
        if (arr1[index1] < arr2[index2]) {
            index1 += 1;
        } else if(arr1[index1] > arr2[index2]) {
            index2 += 1;
        } else {
            // At this point we know the two numbers must have been equal.
            // Increment both indices and try and add to the set.
            index1 += 1;
            index2 += 1;
            // Use the object and try and lookup if the
            // element we're trying to add has already been added to the obj.
            // If not, then we can add it to the arr3 and the object.
            if (!lookupTable[arr1[index1]]) {
                arr3.push(arr1[index1]);
                lookupTable[arr1[index1]] = true;
            }
        }
    }
    return arr3;
};
//
// Object exercise 3
// Write a function that takes an array of objects. Each object will have the following keys:
// {
//  title: 'foobar',
//  author: 'Toonces',
//  readingStatus: false
// }
// Now print out the title of every book along with its reading status
//
var printReadingStatus = function(readingList) {
    // Use the for in loop we learned above.
    for (var book in readingList) {
        console.log(book.title + ': ' + book.readinStatus);
    }
};
