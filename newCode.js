let example = [1, 3, 6, 2, 4, 7, 9, 11, 10, 333, 22, 55, 44, 66, 72, 19];
/*
* The main function to sort Array
* @param {array}
* @returns {array} but sorted
*/


function mergeSort(arr) {

    if (arr.length <= 1) return arr;
    let middle = parseInt(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    let arrSorted = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arrSorted.push(left.shift())
        } else {
            arrSorted.push(right.shift())
        }
    }
    return [...arrSorted, ...left, ...right];
}

console.log(mergeSort(example));
