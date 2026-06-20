let fruits = ["apple", "banana", "apple"]
let count = fruits.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) +1;
    return acc; 
})
console.log(count)

let arr = [[1,2], [3,4]];
let flat = arr.reduce((acc,curr) => acc.concat(curr), []);
console.log(flat)

let nums = [1,2,3];
let sum = nums.reduce((acc,curr) => acc + curr, 1)
console.log(sum)

// find function
let element = [1,3,4,5,7]
let result = element.find(n => n %2 == 0);
console.log(result)


let users = [
    {id: 1},
    {id: 2}
];

let user = users.find(u => u.id === 2);
console.log(user)

// filter function
let fil = [1,2,3,4,5,6]
let ans = fil.filter(e => e%2 == 0);
console.log(ans)

let y = [1,2,3,4]
y.splice(2,1,90,88)
console.log(y)