// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // 1.- logica de programación
  let newStr = "";
  for (let i = 1; i <= str.length; i++) {
    newStr += str[str.length - i];
  }

  return newStr;
  // 2.- conocimiento del lenguaje
  // return str.split("").reverse().join("");
}

//console.log(reverseString("hello") === "olleh");

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
let juntar = "";
let juntarOtraVez = '';
  //const reverse = str.split("").reverse().join("");
  for (let i = 1; i <= str.length; i++) {
    /*if(str[str.length-i]!==' '){
      juntar += str[str.length - i];
    }
    if(str[i-1]!==' '){
      juntarOtraVez += str[i-1];
    }*/
      juntar += str[str.length - i];
      juntarOtraVez += str[i-1];
    
  }
  let juntar2 = juntar.replace(/[^a-z0-9]/gi,'');
  let juntarOtraVez2 = juntar.replace(/[^a-z0-9]/gi,'');
  //console.log(juntarOtraVez2);
  //console.log(juntar2);
  return (juntar2===juntarOtraVez2);
}
//isPalindrome('hello lleh');

// Tests
 //console.log(isPalindrome("taco cat"));
 //console.log(isPalindrome("red rum, sir, is murder"));
 //console.log(isPalindrome("abcdcba"));
 //console.log(isPalindrome("1 2 3, 3 2, 1"));
 //console.log(isPalindrome("Was it a cat I saw?"));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  console.log(int);
  return parseFloat(int.toString().split("").reverse().join(""));
}

 //console.log(reverseInt(123));
 //console.log(reverseInt(321));
 //console.log(reverseInt(5579));

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  let newStr = str.split(' ');
   for(let i = 0; i < newStr.length; i++) {
  newStr[i]=newStr[i].charAt(0).toUpperCase()+newStr[i].slice(1);
    /*
  if(i===0){
    newStr[0] = str[0].toUpperCase();
  }else
  {if(newStr[i]===' '){
    newStr += str[i+1].toUpperCase();
    
  }
  newStr += str[i];*/
}
let strTwo = newStr.join(' ');
return strTwo;
}

 console.log(capitalizeLetters("i love javascript"));
 console.log(capitalizeLetters("capitalize me"));

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let newStr='';
  let max=0;
  str.split('').forEach(char => {
    if(str.split(char).length > max) {
      max = str.split(char).length;
      newStr = char;
   }
  });
  return (newStr);
}
 console.log(maxCharacter("jaaaaaavascript")); // -> 7 a's
 console.log(maxCharacter("something in the way")); // -> 3 spaces
 console.log(maxCharacter("I don't know")); // -> 2 spaces
 console.log(maxCharacter("uwu owo uwu"));
// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(i = 1; i<=100;i++){
    if(i%15===0){
      console.log('FizzBuzz');
    }else if(i%5===0){
      console.log('Buzz');
    }else if(i%3===0){
      console.log('Fizz');
    }else{
      console.log(i);
    }
  }
}
//fizzBuzz();

// fizzBuzz();
