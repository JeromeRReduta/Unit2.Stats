/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  console.log(`numbers[0] is ${numbers[0]}`);
  console.log("numbers: " + numbers);
  let sum = 0;
  for (i in numbers) {
    // for in = iterating through keys - for arrays, this means indices
    console.log(`i: ${i}\tnumbers[i]: ${numbers[i]}`);
    sum += numbers[i];
  }
  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  return getSum(numbers) / getLength(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  if (numbers.length === 0) {
    console.log(`error in getMin(${numbers}) - returning -1`);
    return -1;
  }
  let min = numbers[0];
  for (i in numbers) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  if (numbers.length === 0) {
    console.log(`error in getMax(${numbers}) - returning -1`);
    return -1;
  }
  let max = numbers[0];
  for (i in numbers) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  evens = [];
  for (i in numbers) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  odds = [];
  for (i in numbers) {
    if (numbers[i] % 2 !== 0) {
      odds.push(numbers[i]);
    }
  }
  return odds;
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
