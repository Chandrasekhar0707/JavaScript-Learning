let arr = [1,2,8,9,4,5,7,6]

const greaterThanFive = (e) => {
    if (e > 5) {
        return true
    }
    return false
}
console.log(arr.filter(greaterThanFive))

// let newArr = []
// for(let index = 0; index < arr.length; index ++) {
//     const element = arr[index]
//     newArr.push (element**2)
// }
// console.log(newArr)

let newArr = arr.map((e) => {
    return e**2
})
console.log(newArr)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// filter function
let res = [1,3].find(n => n>10);
console.log(res)  // undefined

// array.some((element) => condition);
arr= [1,2,3,4]
console.log(arr.some((n => n%2 == 0)));  // "some" is find an array is matching or not. Then it shows (true or false) it returnes only boolean. It search some element you put an array

// some function
let usres = [
    {name: "Chandra", active: true},
    {name: "Shiva", active: false},
    {name: "Rajesh", active: true}
];
console.log(usres.some(u => u.active))
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// every function
let nums = [2,3,6,8];
console.log(nums.every(n => n%2 ==0));  // in "every" function is to find an array is to all are in divisible an array or not then it returns (true or false). It search all element of an array
