// WAP to sort a given array using Quick Sort

function quickSort(arr) {

  return arr;
}

function partition() {
}

function swap (arr, index1, index2) {

  if (index1 === index2) {
    return;
  }

  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}

quickSort([100, 0, 73, 45, -1, -20, -190, 1000]); // [-190, -20, -1, 0, 45, 73, 100, 1000]
