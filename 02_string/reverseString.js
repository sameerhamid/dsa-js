// ------------------one way
// function reverseString(str) {
//   if (str === undefined || str.length < 2 || typeof str !== "string") {
//     return str;
//   }
//   let reversedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     reversedStr = str[i] + reversedStr;
//   }

//   return reversedStr;
// }

// -------------------second way
function reverseString(str) {
  if (str === undefined || str.length < 2 || typeof str !== "string") {
    return str;
  }
  const backwords = [];

  const length = str.length - 1;
  for (let i = length; i >= 0; i--) {
    backwords.push(str[i]);
  }

  return backwords.join("");
}

console.log(reverseString("Hello World!"));

// ----------------------- third way

function reverseString3(str) {
  if (str === undefined || str.length < 2 || typeof str !== "string") {
    return str;
  }

  // return [...str].reverse().join("");
  // or

  return str.split("").reverse().join("");
}

console.log(reverseString3("Hello World!"));
