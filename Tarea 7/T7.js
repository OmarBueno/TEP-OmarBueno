// Function to generate a random array
function generateRandomArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }
    return randomArray.sort((a, b) => a - b);
}

// Combine and sorts two arrays
function combineAndSortArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    const combinedArray = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            combinedArray.push(arr1[i]);
            i++;
        } else {
            combinedArray.push(arr2[j]);
            j++;
        }
    }
    return combinedArray;
}

const randomArray1 = generateRandomArray(10, 1, 30);
const randomArray2 = generateRandomArray(8, 1, 23);
console.log(randomArray1);
console.log(randomArray2);
console.log(combineAndSortArrays(randomArray1, randomArray2));
