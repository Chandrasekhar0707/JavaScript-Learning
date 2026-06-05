// for-of used for iterable objects. Used in "Strings and Arrays"
/* 
    syntax:
        for (let c of ch) {
            console.log(c)
        }
*/

let s = "Chandra"
for (const element of s) {
    console.log(element)
}

let arr = [1,2,3,4,5,6]
for(const array in arr) {
    console.log(array)
}