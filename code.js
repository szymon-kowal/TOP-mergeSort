let example = [1, 3, 6, 2, 4, 7, 9, 11, 10, 333, 22, 55, 44, 66];

function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
  }

function mergeSort(arr) {
    let length = arr.length;
    if (length <= 1) return arr;

    let mid = parseInt(length / 2);

    let left = mergeSort(arr.slice(0, mid));;
    let right = mergeSort(arr.slice(mid));


    return merge(left, right);
}

console.log(mergeSort(example));