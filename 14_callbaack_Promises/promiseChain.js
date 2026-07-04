function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1")
            resolve("sucess")
        }, 4000)
    })
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2")
            resolve("sucess")
        }, 4000)
    })
}

console.log("fetching data1....")
asyncFunc1().then((res) => {
    console.log("featching data2 ....")
    asyncFunc2().then((res) => {});
});