// WAP to sort a given array using Insertion Sort

function insertionSort(arr) {

  for (var i = 0; i < arr.length; i += 1) {

    var temp = arr[i];

    var j = i - 1;

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = temp;

  }

  return arr;
}

insertionSort([100, 0, 73, 45, -1, -20, -190, 1000]); // [-190, -20, -1, 0, 45, 73, 100, 1000]
