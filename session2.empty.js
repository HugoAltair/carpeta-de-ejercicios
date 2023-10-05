// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  let str = sen.split(" ");
  let a = 0;
  let b = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > a) {
      a = str[i].length;
      b = str[i];
    }
  }
  return `In the sentence ${sen} the longest word is ${b}`;
}

console.log(longestWord("Hi there, my name is Brad"));
console.log(longestWord("Hi there, my name is Brady"));
console.log(longestWord("Hi there, my name is Furer King Brady"));

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  let newArr = arr.length / len;
  if (newArr % 1 === 0) {
    newArr -= 1;
  } else {
    let numberFloor = Math.floor(newArr);
    newArr = numberFloor;
  }
  let newArr2 = [[]],
    newArr3 = [[]],
    a = 0;
  for (let i = 0; i <= newArr; i++) {
    for (let j = 0; j < len; j++) {
      if (a <= arr.length) {
        //console.log(j, a);
        newArr3[j] = arr[a];
        a++;
      }
    }
    //console.log(newArr3);
    newArr2[i] += new Array(newArr3);
    console.log(newArr2);
  }
  return newArr2;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}

// console.log(flattenReduce([[1, 2], [3, 4], [5, 6], [7]]));
// console.log(flattenReduce([[1, [2, [2.5, 2.6], 2.75]], [3, 4], [5, 6], [7]]));

// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));
// console.log(flattenArray([[1, [2, [2.5, 2.6], 2.75]], [3, 4], [5, 6], [7]]));

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// console.log(isAnagram("Dormitory", "dirty room##"));
// console.log(isAnagram("BELOW", "elbow"));

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// console.log(letterChanges("Hello there"));
