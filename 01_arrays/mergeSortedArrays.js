function mergeSortedItems(arr1, arr2) {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  if (arr2.length === 0) {
    return arr1;
  }
  if (arr1.length === 0) {
    return arr2;
  }

  while (arr1.length > i || arr2.length > j) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  return mergedArr;
}

const arr1 = [2, 3, 5, 7, 8];
const arr2 = [-22, -4, 6, 8];
console.log(mergeSortedItems(arr1, arr2));
