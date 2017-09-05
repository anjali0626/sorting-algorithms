// WAP to sort a given array using Bubble Sort

function bubbleSort(arr) {

  for (var i = 0; i < arr.length; i += 1) {
    for (var j = 0; j < arr.length; j += 1) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

bubbleSort([3,2,5]); // [2,3,5]