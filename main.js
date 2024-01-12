//1

function ValueToKey(obj) {
    let newObj = {}
    let array = []
    let once = true
    for (let key in obj) {
        if (newObj.hasOwnProperty(obj[key])) {
            if (once) {
                array.push(newObj[obj[key]])
                once = false
            }
            array.push(key)
            newObj[obj[key]] = array

        } else {
            newObj[obj[key]] = key
        }

    }
    return newObj
}
console.log(ValueToKey({ a: '1', b: '2', c: '2', d: '2' }));






//2

function compare(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false
    } else {
        var res = true
        for (const key in a) {
            if (a[key] === b[key]) continue
            else  return false
        }
    }
    return res
}
console.log(compare({a:'a'}, {a:'a'}));





//3

function palindrome(str) {

    //this is first version
    let str2 = '' 
    for (let i = str.length -1; i >= 0; i--) {
        str2 += str[i]
    }
    if (str === str2) return true
    return false

    //this is second version

    return str.split('').reverse().join('') === str
}
console.log(palindrome('hello'));


//4

function missed(array) {

    // this is first version

    let newArray = []
    let max = array[0] 
    let min = array[0]
    for (const item of array) {
        if (item > max)  max = item
        if (item < min) min = item
    }

    for (let i = min; i <=max; i++) {
                if (!array.includes(i))  newArray.push(i)
     }
    return newArray


    //this is second version

    let newArray2 = []
    for (let i = Math.min(...array); i <= Math.max(...array); i++) {
        if (!array.includes(i)) newArray2.push(i)
    }
    return newArray2

}
console.log(missed([1, 2, 5, 10]));




// 5

function exist(array,element){
    for (const item of array) {
        if (item === element)  return true
    }
    return false
}
console.log(exist([1,23,6,813,2],23));