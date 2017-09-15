// WAP to sort a given array using Bubble Sort

// Time Complexity : O(n^2)
function bubbleSort(arr) {

  for (var i = 0; i < arr.length - 1; i += 1) {
    for (var j = 0; j < arr.length - 1 - i; j += 1) {
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