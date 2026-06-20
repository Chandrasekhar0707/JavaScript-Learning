let a = [1,93,5,6,98]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

//forEach loop
// a.forEach ((value, index, array) => {
//     console.log(value, index, array)
// })

// for-in Loop
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj [key];
//         console.log(key,element)
//     }
// }

// for-of Loop
for (const element of a) {
    console.log(element)
}

// map function
const number = [11,22,33,44];

number.map((value,index,array) => {
    console.log(value, index, array)
})
