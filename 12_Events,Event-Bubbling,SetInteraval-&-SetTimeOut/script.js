let button = document.getElementById("btn")

button.addEventListener("dblclick", () => {
    document.querySelector(".box"). innerHTML = "<b>I was Clicked ThankYou ..</b>"
    document.getElementById("btn").innerHTML = "Changed"
})


document.addEventListener("contextmenu", () => {
    alert("do not click")
})


document.addEventListener("keydown", (e) => {
    console.log(e.key, e.keyCode)
})