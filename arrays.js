/********** task1 **********/
function getMinOfArray(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log('task1: ' + min);
}

getMinOfArray([1, 22, 56, 7, -9, 4, 21, 57]);

/********** task2 **********/
function getMaxOfArray(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log('task2: ' + max);
}

getMaxOfArray([1, 22, 560, 7, -9, 4, 21, 57]);

/********** task3 **********/
function getMaxIndexOfArray(arr) {
    let max = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    console.log('task3: ' + index);
}

getMaxIndexOfArray([10, 220, 56, 7, 9, 4, 21, 57]);

/********** task4 **********/
function getMinIndexOfArray(arr) {
    let min = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    console.log('task4: ' + index);
}

getMinIndexOfArray([1, 22, 56, 7, -9, 4, 21, 57]);

/********** task5 **********/
function getSumOfOdd(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            sum += arr[i];
        }
    }
    console.log('task5: ' + sum);
}

getSumOfOdd([1, 22, 56, 7, 9, 4]);

/********** task6 **********/
function reverseArray(arr) {
    let newArr = arr;
    for (let i = 0; i < newArr.length / 2; i++) {
        let temp = newArr[i];
        newArr[i] = newArr[newArr.length - i - 1];
        newArr[newArr.length - i - 1] = temp;
    }
    console.log('task6: ' + newArr);
}

reverseArray([1, 22, 56, 7, 9, 4]);

/********** task7 **********/
function countOfOdd(arr) {
    let countOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            countOdd++;
        }
    }
    console.log('task7: ' + countOdd);
}

countOfOdd([1, 22, 56, 7, 9, 4, 0, 27]);