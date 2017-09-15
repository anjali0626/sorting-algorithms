// WAP to sort a given array using Selection Sort

// Time Complexity : O(n^2)
function selectionSort(arr) {

  for (var i = 0; i < arr.length; i += 1) {

    var minIndex = i;

    for (var j = i + 1; j < arr.length; j += 1) {

      if (arr[j] < arr[minIndex]) {
          minIndex = j;
      }

    }

    var temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;

  }

  return arr;
}

selectionSort([100, 0, 73, 45, -1, -20, -190, 1000]); // [-190, -20, -1, 0, 45, 73, 100, 1000]