//task1

function charCodeAt(str, index) {
    const array1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '   ']
    const array2 = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, , 65, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 32, 9]
    return array2[array1.indexOf(str[index])]

}
console.log(charCodeAt('hel2 lo', 3));




//TASK 2

function concat(str1, str2, join) {
    let result = ''
    for (let i = 0; i < str1.length; i++) {
        result += str1[i]
        if (i === str1.length - 1) {
            result += join
            for (let j = 0; j < str2.length; j++) {
                result += str2[j]
            }
        }

    }
    return result
}
console.log(concat('hello', 'world', ', '));




//TASK3

function endWith(str, end) {
    let check = ''
    for (let i = -(end.length - str.length); i < str.length; i++) {
        check += str[i]
    }
    return check === end
}
console.log(endWith('hello world', ' world'));



//TASK 4

function lastIndexOf(str, subStr, start) {
    function repeat(str, subStr, start) {
        for (let i = start; i < str.length; i++) {
            let includes = true

            for (let k = 0; k < subStr.length; k++) {
                if (str[i + k] !== subStr[k]) {
                    includes = false
                    break
                }
            }
            if (includes) {
                return i
            }
        }
    }
    let result = repeat(str, subStr, start = 0)
    let res;
    for (let g = 0; g < str.length; g++) {
        if (result > -1) {
            result = repeat(str, subStr, result + 1)
        } else {
            return -1
        }
        if (result === undefined) {
            return res
        }
        res = result
    }
}

console.log(lastIndexOf('hello ll ll ll', 'll'));


//Task5

function repeat(str, time) {
    let count = Math.floor(time)
    if (count === 0) {
        return ''
    } else if (count < 0) {
        return 'Invalid Input'
    } else if (count === 1) {
        return str
    }
    let result = ''
    for (let i = 0; i < count; i++) {
        result += str
    }
    return result
}

console.log(repeat('hello ', 3));




//TASK6


function replace(str, char1, char2) {
    let str1 = ''
    for (var i = 0; i < str.length; i++) {
        let str2 = ''
        for (let j = 0; j < char1.length; j++) {
            if (str[i + j] === char1[j]) {
                str2 += str[i + j]
            }
        }

        if (str2 === char1) {
            str1 += char2
            i += str2.length - 1

            for (let k = i + 1; k < str.length; k++) {
                str1 += str[k]
            }
            return str1
        } else {
            str1 += str[i]
        }
    }

}

console.log(replace('hello hello', 'hello', '$'));


//TASK 7

function slice(str, start, end = str.length) {
    let result = ''
    for (let i = start; i < end; i++) {
        result += str[i]
    }
    return result
}

console.log(slice('hello world i am waiting to you hurry up',));

//task 8

function split(str, sym) {
    let result = []
    function index(str, sym) {
        let array = []
        for (let i = 0; i < str.length; i++) {
            if (str[i] === sym) {
                array.push(i)
            }
        }
        return array

    }

    let array2 = index(str, sym)
    array2 = [0, ...index(str, sym)]


    for (let i = 0; i < array2.length - 1; i++) {
        let add = ''
        for (let j = array2[i] + 1; j < array2[i + 1]; j++) {
            add += str[j]

        }
        result.push(add)

    }
    let last = ''

    for (let i = array2[array2.length - 1] + 1; i < str.length; i++) {
        last += str[i]
    }

    result.push(last)
    for (let k = 0; k < result.length; k++) {
        if (result[k] === '') {
            result.splice(result.indexOf(result[k]), 1)
        }

    }
    return result

}
console.log(split('hellolworld all akk k l', 'l'));




//Task 9

function startwitth(str, start) {
    let startLength = start.length
    let check = ''
    for (let i = 0; i < startLength; i++) {
        check += str[i]
    }
    return check === start
}

console.log(startwitth('hello world', 'hello'));



//task10

function subString(str, start = 0, end = str.length) {
    let result = ''
    for (let i = start; i < end; i++) {
        result += str[i]
    }
    return result
}

console.log(subString('hello world i am waiting to you hurry up', 11));

