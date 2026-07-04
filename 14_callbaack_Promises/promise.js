// console.log("Promises")


// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("sucess")
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 6000);
//     })
// }

// let finalVal = getData(12);
// console.log(finalVal);



// .then() and .catch()

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am Promise");
//         resolve("Sucessful");
//     })
// }

// let promise = getPromise ();
// console.log(promise);

// promise.then((res)=>{
//     console.log("fulfillmet", res)
// })

// promise.catch((err)=>{
//     console.log("reject", err)
// })

console.log("promises")

let prom1 = new Promise((resolve, reject)=> {
    let a = Math.random();
    if(a<0.5) {
        reject("No Random number is not supported")
    }
    else {
        setTimeout(()=> {
            console.log("Yes I am done");
            resolve("Yes Random number is supported")
        },1000)
    }
})

let prom2 = new Promise((resolve, reject)=> {
    let a = Math.random();
    if(a<0.5) {
        reject("No Random number is not supported 2")
    }
    else {
        setTimeout(()=> {
            console.log("Yes I am done2");
            resolve("Yes Random number is supported 2")
        },2000)
    }
})
// let p3 = Promise.all([prom1,prom2])
// let p3 = Promise.allSettled([prom1,prom2])
// let p3 = Promise.race([prom1,prom2])
// let p3 = Promise.any([prom1,prom2])
// let p3 = Promise.resolve([prom1,prom2])
let p3 = Promise.reject([prom1,prom2])

p3.then ((res)=> {
    console.log(res)
}).catch((err)=> {
    console.log(err)
})