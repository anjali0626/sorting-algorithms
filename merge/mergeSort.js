// WAP to sort a given array using Merge Sort

function merge(leftArray, rightArray) {

  var outputArray = [];

  var iLeft = 0;
  var iRight = 0;

  while (outputArray.length < (leftArray.length + rightArray.length)) {

    if (iLeft === leftArray.length) {

      outputArray = outputArray.concat(rightArray.slice(iRight));

    } else if (iRight === rightArray.length) {

      outputArray = outputArray.concat(leftArray.slice(iLeft));

    } else if (leftArray[iLeft] <= rightArray[iRight]) {

      outputArray.push(leftArray[iLeft++]);

    } else {

      outputArray.push(rightArray[iRight++]);

    }

  }

  return outputArray;
}

mergeSort([100, 0, 73, 45, -1, -20, -190, 1000]); // [-190, -20, -1, 0, 45, 73, 100, 1000]