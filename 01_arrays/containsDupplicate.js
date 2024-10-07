function containsDuplicate(arr) {
  let duplicate = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      duplicate = true;
    }
  }
  return duplicate;
}

const arr = [1, 2, 3, 4, 5, 5];
console.log(containsDuplicate(arr)); // true
