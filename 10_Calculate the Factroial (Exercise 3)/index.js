 let arr2 = [1,2,3,4]
 for (let i =0; i < arr2.length; i++) {
    let num = arr2[i];
    let fact = 1;

    for(let j =1; j <= num; j++)
        fact = fact *j;
}
// console.log(`Factroial is ${num} is ${fact}`)