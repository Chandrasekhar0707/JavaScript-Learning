// Class

class Car {
    constructor (brand, mielage) {
        console.log("Creating new Obj")
        this.brand = brand;
        this.mielage = mielage
    }
    start () {
        console.log("car started")
    }

    stop () {
        console.log("car stoped")
    }

    // setBrand (brand) {  // function param
    //     this.brand = brand;  
    // }
}

let fortuner = new Car("Toyota", 12);
console.log(fortuner)
// fortuner.setBrand("fortuner")
let audi = new Car ("Audi", 14);
console.log(audi)
// audi.setBrand("Audi")

// class Dog {
//     bark () {
//         console.log("Dog Bark");
//     }
//     eat () {
//         console.log("Dog Eat");
//     }
//     age  () {
//         console.log(4)
//     }
//     setName (name) {
//         this.name = name;
//     }
// }

// let dog = new Dog();
// dog.setName("Dunny")

class Employee {
    constructor (name, id) {
        this.name = name
        this.id = id
    }
    empId () {
        console.log(11);
    }
    salary () {
        console.log("20k")
    }
    // setName (name) {
    //     this.name = name
    // }
}

let obj = new Employee ("rohan", 12)