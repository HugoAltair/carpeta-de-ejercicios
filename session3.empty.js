// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {
  sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
function addAll2(numbers) {
  let initialValue = 0;
  let sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sum;
}
console.log(addAll(2, 5, 6, 7, 8));
//console.log(addAll2(2, 5, 6, 7, 8));
// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(limit) {
  let sumPrimes = 0,
    primes = [];
  for (i = 1; i <= limit; i++) primes.push(i); //transform the limit into an array
  primes.forEach((el) => {
    let acum = 0;
    for (j = 1; j <= limit; j++) {
      if (el % j === 0) acum += 1;
    }
    if (acum === 2) {
      // a prime number is a whole number greater than 1 whose only factors are 1 and itself
      sumPrimes += el;
    }
  });
  return sumPrimes;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(15));
console.log(sumAllPrimes(21));

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(input, ...params) {
  let newInput = input.join(" ");
  console.log(typeof newInput);
  for (i = 0; i < params.length; i++) {
    //newInput.replace(new RegExp(JSON.stringify(params[i]), "ig"), "");
    let newParams = params[i].toString();
    newInput.replace(new RegExp(newParams, "ig"), "");
    console.log(newParams);
  }
  return newInput;
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));
// console.log(seekAndDestroy([1, 2, 2, 6, 6, "hello"], 2, 6));
//console.log(seekAndDestroy([9, 8, 7, 5, 5, "hello"], 5));

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(array) {}

// console.log(sortByHeight([-1, -1, 190, 175, 160, -1, 172, -1]));

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(sentence) {}

// console.log(missingLetters("cdefh"));
// console.log(missingLetters("cdefgh"));
// console.log(missingLetters("abcdefghjklmno"));
// console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {}

// const output = evenOddSums([50, 60, 60, 45, 71]);
// console.log(output);
const eliminarPatron = (str = "", patron = "") => {
  if (!str) return console.warn("No ingresaste texto");
  if (!patron) return console.warn("no ingresaste el patron");
  console.info(str.replace(new RegExp(patron, "ig"), "")); //la bandera i es para que no distinga de mayusculas y minusculas, la g para una busqueda global
};
//eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
