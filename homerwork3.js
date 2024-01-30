//TASK1

function isArrayUnique(array){
 for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
       if (array[i] === array[j] || (Number.isNaN(array[i]) && Number.isNaN(array[j]))) {
        return false
       }
    }

 }
 return true
}
console.log(isArrayUnique([NaN,'sws',undefined,21,33,null,'wele']));







// //TASK2

function isPrime(num) {
    if(Number.isNaN(num)){
        return false
    }
    if (num <= 1) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
function sumOfPrimes(array) {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            result += array[i]
           
        }
    }
    return result
}
console.log(sumOfPrimes([NaN,1,2,3,4,5,6,7,8,9,10,11,34,5,23,43,2,2,23,4,32,]));






//TASK3

function product(array){
    if (!(array.length % 2 === 0)) {
        array.pop()
    }
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if ((array[i] * array[i+1]) > result) {
            result = array[i] * array[i+1]
        }
    }
    return result
}
console.log(product([2,3,45,6,7,99,54,56,7,2,9,9,8]))







//TASK4

function binary(array, target) {
    let startIndex = 0
    let endIndex = array.length - 1
    while (startIndex <= endIndex) {
        let midIndex = Math.floor((startIndex + endIndex) / 2)
        if (array[midIndex] === target) {
            return array.indexOf(target)
        } else if (array[midIndex] > target) {
            endIndex = midIndex - 1
        } else if (array[midIndex] < target) {
            startIndex = midIndex + 1
        }
    }
    return 'target was not found'

}

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 123, 1234, ], 9));
