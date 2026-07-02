let DATA = "secrate Info"
class User {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    };

    viewData () {
        console.log (`Data = ${DATA}`)
    }
}
let stu1 = new User("Akash", "ak@gmail.com")
let stu2 = new User("Bikash", "bk@gmail.com")