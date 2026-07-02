console.log("Classes and Object")

const student = {
    fullName:  "Chandrasekhar",
    marks: 45.4,
    printMarks: function () {
        console.log("marks = ", this.marks)
    },
};



// prototype

const employee = {
    calcTax () {
        console.log("Tax rate is 10%")
    }
}

const rohan = {
    salary: 20000,
    calcTax () {
        console.log("Tax rate is 5%")
    }
};
const rajesh = {
    salary: 78000,
};
const bwan = {
    salary: 41000,
};
const manash = {
    salary: 72000,
};

rohan.__proto__ = employee;
rajesh.__proto__ = employee;
bwan.__proto__ = employee;
manash.__proto__ = employee;