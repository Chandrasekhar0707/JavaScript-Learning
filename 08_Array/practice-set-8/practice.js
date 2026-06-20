// let arr = [11,22,33,44];
// // let newArr = []
// // for(let index = 0; index < arr.length; index++) {
// //     const element = arr[index]
// //     newArr.push(element**2)
// // }
// // console.log(newArr)

// let num = [12, 8, 9, 66];
// // for(let index = 0; index < num.length; index ++) {
//     //     const element = num[index];
//     //     newArr.push(element ** 2);
//     // }
//     // console.log(newArr)

// let newArr = num.map((e) => {
//     return e**2
// })
// console.log(newArr)

let arr = [4,7,9,5,2,0];
const greaterThanSeven = (e) => {
    if (e>=7) {
        return true;
    }
    return false
}

console.log(arr.filter(greaterThanSeven))

const i = (e) => {
    if(e < 7) {
        return true;
    }
    return false;
}
console.log(arr.filter(i))

let arr2 = [1,2,3,4,5,6,7];
const red = (a, b) => {
    return a*b;
}
console.log(arr2.reduce(red))

let str = ("Gouraba")
console.log(Array.from(str));