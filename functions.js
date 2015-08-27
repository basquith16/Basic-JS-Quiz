/**
 * Part 1
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

 function reverse(str){

     var word = str.split('').reverse().join('');
     return word;
 }

 console.assert(reverse("books") === "skoob")
 console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

 //My reverse(str) began this way
 // var word = str.split('');
 // word_reverse = word.reverse().join('');
 // return word_reverse;
 // Then I condensed to one line.

/**
 * Part 2
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    var seprt = sentence.split(' ');
    var big_word = ''
    for(i = 0; i < seprt.length; i++) {
    if(seprt[i].length > big_word.length) {
      big_word = seprt[i];
    }
  }
  return big_word;
  }

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Florida") === "Florida")

/**
 * Part 3
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(arr){
    var sum = 0
    for(i = 0; i < arr.length; i++) {
      arr[i] + arr[i];
    sum = sum + arr[i];
    }
    return sum;
  }

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

/**
 * Part 4
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b){
    answer = a + b;
    return answer;
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * Part 5
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

 function GCD(a, b) {
    if(a === 0) return b;
    if(b === 0) return a;
    if(a > b) {
      return GCD(b, a % b);
    } else {
      return GCD(a, b % a);
  }
}

//Using recursion, I created a loop by essentially placing the
//function within itself. Because zero cannot be the GCD, the
//function will end when one side reaches zero and the other
//argument is returned. Each run through the function will keep
//the smaller of the two numbers while calculating the remainder
//arguments (as said, until one side is zero).

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

/**
 * Part 6
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */


//for this problem I can get LCM by using my function from Part 5.
//LCM can be calculated by multiplying the two numbers and dividing
//by their GCD. The same concept applies for LCM in that zero
//cannot be the LCM, therefore, I set the conditions to avoid this
//before running the calculation.

function LCM(a, b){
  if(a === 0) {
    return b;
  } else if(b === 0) {
    return a;
  }
  greatCD = GCD(a, b);
  lowCM = (a*b)/greatCD;
  return lowCM;
}

console.assert(LCM(1,10) === 10)
console.assert(LCM(2,5) === 10)
console.assert(LCM(3,6) === 6)
console.assert(LCM(0,1) === 1)
