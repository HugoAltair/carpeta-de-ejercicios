// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
function longestWord(sen) {
  let str = sen.split(" ");
  console.log(str);
  let a = 0;
  let b = "";
  for (let i = 0; i > str.length; i++) {
    if (str[i].length > a) {
      a = str[i].length;
      b = str[i];
    }
  }
  console.log(`In the sentence ${sen}, the longest word is ${b}`);
}
