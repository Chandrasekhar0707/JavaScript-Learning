// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {    // if "getNextData" function is exist then call the function "getNextData"
//             getNextData()
//         }
//     }, 2000)
// }

// // Callback hell (nested callbacks)
// console.log("getting data 1 ....")
// getData(1, () => {
//     console.log("getting data 2 ....")
//     getData(2, () => {
//         console.log("getting data 3 ....")
//         getData(3, () => {
//             console.log("getting data 4 ....")
//             getData(4);
//         })
//     })
// });



function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data - ", dataId);
            resolve("sucess")
        }, 2000)
    })
}

console.log("generating data1 ....")
getData(1).then(()=> {
    console.log("generating data2 ....")
    return getData(2);
}).then(()=>{
    console.log("generating data3 ....")
    return getData(3);
}).then(()=> {
    console.log("generating data4 ....")
    return getData(4);
}).then((res)=> {
    console.log(res)
})