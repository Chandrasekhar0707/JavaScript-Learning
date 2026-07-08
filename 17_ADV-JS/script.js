// IIFE - Immediate Invoke Function Expression
async function sleep () {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(45)
        },1000)
    })
}

(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
})()

// Destructring
// let [x , y, ...rest] = [1,2,3,4,5,6,7,8,9];
// console.log(x, y, rest)

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

let {a,b} = obj;
console.log(a,b)

function sum(a,b,c) {
    return a+b+c
}

let arr = [1,5,9]
console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr))
