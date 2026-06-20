let a = "Chandra";
// a[0] = "k";
console.log(a[0] = "k")
console.log(a)

//join method
let arr = [ 7,8,9,10];
console.log(arr.join(" and "))

// pop method

console.log(arr.pop())  // Remove element in last
console.log(arr)

//push method
console.log(arr.push("Cg")) // Add elements in last
console.log(arr.push(10000))
console.log(arr)
console.log(arr.push()) // Returns length

// Shift method
console.log(arr.shift())  // Remove element in first
console.log(arr)

//Unshift method
console.log(arr.unshift("jack"));
console.log(arr)  // add elements in first 

// Delete method

// console.log(delete arr[0])
// console.log(delete arr[4])
// console.log(arr)
console.log(arr.length)

// concat method
let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];

result = a2.concat(a1,a3);
console.log(result)

//sort method
let a11 = [7,9,2,4];
console.log(a11.sort())


// Splice method
let numbers = [1,2,3,4,5]
console.log(numbers.splice(1,2))
console.log(numbers)

let num = [1,2,3,4,5,6];
console.log(num.splice(1,2,'jk','bk'));
console.log(num)

//slice method
console.log(num.slice(2))
console.log(num.slice(1,4))

// Reverese method
console.log(num.reverse())