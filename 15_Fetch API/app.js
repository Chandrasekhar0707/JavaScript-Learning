const URL = "https://meowfacts.herokuapp.com/?count=3";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async() => {
    console.log("getting fetch....");
    let response = await fetch(URL);
    console.log(response);
    let res = await response.json();
    factPara.innerText = res.data[2];
}


btn.addEventListener("click", getFacts);

