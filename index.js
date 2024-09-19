// 1) Function to calculate the difference between two numbers
function calculateDifference(num1, num2) {
    return num1 - num2;
}

// 2) Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3) Function to find the smallest number in an array
function findMin(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}

// 4) Function to filter out even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5) Function to sort an array in descending order
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// 6) Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7) Function to count the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

// 8) Function to find the average of an array of numbers
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}
