function rotateArray(arr, steps) {
  let tempArr = [];
  let n = arr.length;
  steps = steps % n; // Ensure steps do not exceed array length

  // Push the last 'steps' elements to the front
  for (let i = n - steps; i < n; i++) {
    tempArr.push(arr[i]);
  }

  // Push the remaining elements from the beginning of the array
  for (let j = 0; j < n - steps; j++) {
    tempArr.push(arr[j]);
  }

  return tempArr;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(rotateArray(arr, 2));
