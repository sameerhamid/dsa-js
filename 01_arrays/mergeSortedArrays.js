function mergeSortedItems(arr1, arr2) {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  let array1Item = arr1[0];
  let array2Item = arr2[0];

  while (arr1 || arr2) {
    if (!array2Item || array1Item < array2Item) {
      mergedArr.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArr.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }

  return mergedArr;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedItems(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 7, 8]
