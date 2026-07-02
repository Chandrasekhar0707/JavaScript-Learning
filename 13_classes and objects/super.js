console.log("Super")

class Person {
    constructor(name) {
        this.species = "homo sapeines"
        this.name = name
    }

    eat() {
        console.log("eat")
    }
}

class Engineer extends Person {
    constructor(name,branch) {
        super(name)  // to invoke parent class constr
        this.branch = branch
    }
    work() {
        super.eat()
        console.log("solve problems, build something")
    }
}

let engObj = new Engineer ("Chandra", "CSE")