//something spelled the same backwards and forewards
// radar, racecar, kayak, redder
//whatever the length is we want the same number 
//take length of string and divide by two and round down

let palindrome = function (word) {
  
let len = word.length;
let start = word.substring(0, Math.floor(len/2)).toLowerCase();
let end = word.substring(len - Math.floor(len/2)).toLowerCase();
console.log(start, end);

let flip = end.split('').reverse().join('');
return (start === flip);
}

console.log(palindrome('radar')); //true
console.log(palindrome('redder')); //true
console.log(palindrome('window')); //false
