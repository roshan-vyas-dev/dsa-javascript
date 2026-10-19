
function bubbleSort(arr) {
    // Outer loop: control the passes
    for (let i = 0; i < arr.length-1; i++) {

        // Inner loop: compare neighboring elements
        for (let j = 0; j < arr.length-1-i; j++) {

            // Check if the left element is bigger
            if (arr[j]>arr[j+1]) {

                // Swap the elements
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([4, 2, 5, 1])); //[ 1, 2, 4, 5 ]
console.log(bubbleSort([1, 2, 3, 4]));  // [ 1, 2, 3, 4 ]
console.log(bubbleSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(bubbleSort([])); //[]
console.log(bubbleSort([7])); //[7]