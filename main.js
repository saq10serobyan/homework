// //task1

function find(arr,cb){
    for(let i = 0; i < arr.length;i++){
        if(cb(arr[i])){
            return arr[i]
        }
    }
    return undefined
}





//task2

function filter(arr,cb){
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}




//task3

function map(arr,cb){
    let res = []
    for(let i = 0; i < arr.length; i++){
        res.push(cb(arr[i]))
    }
    return res
}





//task4

function every(arr,cb){
    for(let i = 0; i < arr.length; i++){
        if(!cb(arr[i])){
            return false
        }
    }
    return true
}




//task5

function some(arr,cb){
    for(let i = 0; i < arr.length;i++){
        if(cb(arr[i])){
            return true
        }
    }
    return false
}




//task6

function findIndex(arr,cb){
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return arr.indexOf(arr[i])
        }
    }
    return -1
}



//task7 

function forEach(arr,cb){
    for(let i = 0; i < arr.length; i++){
        cb(arr[i])
    }
}

