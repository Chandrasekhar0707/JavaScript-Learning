console.log("Array")

let arr = [1,2,4,5,7]
// console.log(arr);
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[1])
arr[1] = 566;
// console.log(arr)   // Mutable
// console.log(typeof(arr))   // tyoe of array is OBJECT

// console.log(arr.toString()) // convert string

//Join Method
// console.log(arr.join(" and "))


// pop method
console.log(arr.pop())
console.log(arr)

// push method
x = [1,2,3,4,5,6]
// console.log(x.push(100))
// console.log(x)
console.log(x.push("Chandra"))
// console.log(x)

// shift method -> shift first array element
// console.log(x.shift())
// console.log(x)

// unshift method -> add first emelet in array
// console.log(x.unshift(200)) 
// console.log(x)

// delete method
console.log(delete x[5])
console.log(x)

// concat array
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [9,8,7]
console.log(a1.concat(a2,a3))

// sort method
let obj = [45,8,99,7]
console.log(obj.sort())

// splice method
let numbers = [1,2,5,7]
numbers.splice(1,2,222,333);
console.log(numbers)

// slice mrthod
let n = [10,20,30,40]
console.log(n.slice(1,2))
