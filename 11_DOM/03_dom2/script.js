console.log("Hello")
let boxes = document.getElementsByClassName("box")    // select all classes
console.log(boxes)

boxes[1].style.backgroundColor = "blue"

document.getElementById("red"). style.backgroundColor = "red"

document.querySelector(".box").style.backgroundColor = "green"    // select first element in container

// querySelectorAll

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green"
})

let n = document.getElementsByTagName("div")
console.log(n)

let e = n[4].matches("#red");
console.log(e)