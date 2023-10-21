// let a = [2,3,4,5,6]
// a.forEach((element)=> {
//     console.log(element*element)
// });


// let name1 = "kamal"
// let arr= Array.from(name1)
// console.log(arr)
// console.log(arr[2])


// let a = [2,3,4,5,6]
// for (let item of a){
// console.log(item)
// }


// let b = [3,4,5,6,7]
// for (let num in b)
// {
//     console.log (num)
// }

let arr = [45,46,47]
let a = arr.map((value,index,t)=>{
console.log(value,index, t)
return value+1})
console.log(a)