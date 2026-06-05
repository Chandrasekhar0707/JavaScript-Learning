// function nice (name) {
//     console.log("hey " + name + "you are nice !");
//     console.log("hey " + name + "you are good!");
//     console.log("hey " + name + "your course is very nice !");
//     console.log("hey " + name + "your name is so good !");
//     console.log("hey " + name + "you are the best  !");
// }
// nice("chandra");
// nice("sivam ");

function sum(a,b, c=3) {    // defult parameter 'c'
    // console.log(a +b);
    console.log(a, b, c);
    return a+b+c
}
result1= sum (3)
result2= sum (13,85)
result3= sum (1,2,1)
console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

// ARROW FUNCTION

const func1 = (x)=> {
    console.log("I am an arrow function", x);
};
func1(34);
func1(44);
func1(54);
func1(64);


