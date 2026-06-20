console.log("Hello this is string Tutorial")
let a = "Rama";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
// console.log(a[4])

console.log(a.length)

let real_name = "Chandra";
let friend = "Rohan";
console.log("His name is " + real_name + " and his friend name is " + friend)

console.log(`His name is ${real_name} and his friend name is ${friend}`)    // Template Litrals

let b = "Shivam";
console.log(b.toUpperCase())
console.log(b.toLowerCase())

// Slicing
console.log(b.slice(1,4))
console.log(b.slice(1))

//Replace
console.log(b.replace("Sh", "77"))
console.log(b.replace("vam", "mav"))

// concatenation
console.log(b.concat(a))
console.log(b.concat(a, "Hari", "Ashwariya", "Laxmi"))

// startswith
let x = "Chandra"
console.log(x.startsWith("Ch"))

// endswith
console.log(x.endsWith("ra"))

