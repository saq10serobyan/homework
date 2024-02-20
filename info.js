///task 1
let res = ''
function reverse(num,index = String(num).length-1){
  	if(index >= 0){
      res += String(num)[index]
      reverse(num,--index,res)
    }
    return res
  	
}



///task2

function index(arr,num){
   return arr.indexOf(num,arr.indexOf(num+1))

}

//task3
let res = 0
function foo(sub,str,index = 0){
   if(str.includes(sub,index)){
      res += 1
      let index1 = str.indexOf(sub,index) + 1
      foo(sub,str,index1,res)
   }
   return res
}

//taks4
let res = ''
function foo(str,index = 0){
   if(index < str.length){
      if(str.toLowerCase()[index] === 'p'&& str.toLowerCase()[index+1] === 'i'){
         res += '3.14'
         foo(str,index + 2, res)
      }else{
         res += str[index]
         foo(str,++index,res)
      }
   }
   return res
   
}

//task5
let res = []
function foo(arr){
   for(let item of arr){
      if(Array.isArray(item)){
         foo(item)
      }else{
         res.push(item)
      }
   }
   return res  
}

//task 6 

function sum(num,arg = 0,arr = []){
   if(String(num).length > 1){
      for(let i = 0; i < String(num).length; i++){
         arg += Number(String(num)[i])
        }
         arr.push(arg)
      sum(arg,0,arr)
 
    }
   
    return arr.slice(-1)[0] 
 
}