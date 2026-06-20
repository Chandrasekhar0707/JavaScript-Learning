let a = "Rohan";
console.log(a);
console.log(a[0]);
console.log(a[10]);  // For-giving Langauge
console.log(a.length)

let name = "Guddu";
let friend = "Rohan";

console.log("His name is " + name + "His friends name is " + friend)

console.log(`His Name is ${name} and his friends name is ${friend}`)  // Template Leterals - String Enterpulation
console .log(`Rohan " an " `)

let n = "Shivam";
console.log(n.slice(1,4))    // Slice
console.log(n.slice(1))

console.log(n.replace("Sh", "On"))  // Replace

console.log(n.concat(a, "Hello"))  // concat

console.log(n.startsWith("Sh"))
console.log(n.endsWith("m"))


let name1 = "Chandrasekhar";
console.log(name1.indexOf("d"))