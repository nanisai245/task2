"use strict";

//                         TASK-1

//finding nth term in fibonacci
function fibonacciNum(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacciNum(n - 1) + fibonacciNum(n - 2);
}

console.log(fibonacciNum(5));

//finding n terms

function getFibonacciSeries(num) {
  const series = [];
  for (let i = 0; i < num; i++) {
    const getNumber = fibonacciNum(i);
    console.log(getNumber);
    series.push(getNumber);
  }

  return series;
}

console.log(getFibonacciSeries(5));

//                        TASK-2

function convertToF(temp) {
  const calcF = temp * (9 / 5) + 32;
  console.log(calcF);
}

convertToF(30);
convertToF(45);

//                       TASK-3

function squareRoot(number) {
  return number ** 0.5;
}

console.log(squareRoot(100));
console.log(squareRoot(25));

//                      TASK-4

const randomNum = (min, max) => {
  // const result = Math.floor(Math.random() * (max - min) + 1) + min;  //min exclude nd max include
  const result = Math.floor(Math.random() * (max - min + 1)) + min; //min and max include
  return result;
};

console.log(randomNum(5, 15));

//                     TASK-5

function isPalindrome(string) {
  string = string.toLowerCase();
  let length = string.length;

  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("vinay"));
console.log(isPalindrome("rotator"));
