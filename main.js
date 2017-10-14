// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(a, b) {
  if (a > b) {
    return a
  } else if (a < b) {
    return b
  }
}
let a = 88
let b = 50

console.log(max(a, b))


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(c, d, e) {
  if (c > d) {
    return Math.max(c, d, e)
  }
}

let c = 76
let d = 39
let e = 93

console.log(maxOfThree(c, d, e));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(x) {
  if (x === "a") {
    return true
  } if (x === "e") {
    return true
  } if (x === "i") {
    return true
  } if (x === "o") {
    return true
  } if (x === "u") {
    return true
  } {
    return false
  }
}

let vowelResult = isVowel("a")
let vowelResult1 = isVowel("e")
let vowelResult2 = isVowel("i")
let vowelResult3 = isVowel("o")
let vowelResult4 = isVowel("u")
console.log(vowelResult)
console.log(vowelResult1)
console.log(vowelResult2)
console.log(vowelResult3)
console.log(vowelResult4)


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum (num1,num2) {
  return num1 + num2;
}
let answer = sum(25, 30)
console.log(answer)


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(d, u, h) {
  return (d + u + h) / 3;
}
console.log(avg(1,2,3));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(i) {
  return i.length;
}
console.log(getLength('Hello World'));


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan (b, e) {
  if (b>e){
    return false;
  } else if (b<e){
    return true;
  }
}
console.log(greaterThan(2,4));


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(z) {
  return 'Hello, ' + z + '!'
}
console.log(greet('Danielle'))


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madLib(l, m, a, o) {
  return 'This ' + l + 'hates ' + m + ' code, ' + a + 'functions' + o
}

console.log(madLib('girl ', 'writing', 'specifically ', '!'))
