let arr = [1,5,7,10,15,47,45,95]
const divisibleByFive = (e) => {
    if(e % 5 == 0) {
        return true
    }
    return false
}
console.log(arr.filter(divisibleByFive))