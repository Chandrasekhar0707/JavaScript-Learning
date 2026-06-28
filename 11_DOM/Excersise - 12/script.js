console.log("Hello World")

let boxes = document.querySelector(".container").children
console.log(boxes)

function getRandomColor () {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from (boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor ()
})































// let boxes = document.getElementsByClassName("box")
// let cont = document.body.childNodes
// console.log(cont)
// console.log(document.body.childNodes[1].children[0].style.backgroundColor = "aqua")
// console.log(document.body.childNodes[1].children[1].style.backgroundColor = "blue")
// console.log(document.body.childNodes[1].children[2].style.backgroundColor = "red")
// console.log(document.body.childNodes[1].children[3].style.backgroundColor = "yellow")
// console.log(document.body.childNodes[1].children[4].style.backgroundColor = "pink")