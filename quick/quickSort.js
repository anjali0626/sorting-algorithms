// WAP to sort a given array using Quick Sort

function quickSort(arr) {

  return arr;
}

function partition(arr, low, high) {

  var pivot = arr[high];

  var pivotIndex = low;

  for (var i = low; i < high; i += 1) {

    if (arr[i] <= pivot) {
      swap(arr, pivotIndex, i);
      pivotIndex += 1;
    }

  }

  swap(arr, pivotIndex, high);

  return pivotIndex;
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
