function moveZeros(arr) {
  let zerosArr = [];
  const nonZeroArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr1[i] === 0) {
      zerosArr.push(arr1[i]);
    } else {
      nonZeroArr.push(arr1[i]);
    }
  }
  return [...nonZeroArr, ...zerosArr];
}

const arr1 = [1, 2, 0, 3, 12, 0, 1, 0, 4, 0];
console.log(moveZeros(arr1)); // [1, 2, 3, 12, 1, 4, 0, 0, 0, 0]
