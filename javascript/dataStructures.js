class Student {
    constructor(firstName, lastName, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.tardies = 0;
    }
    
    // fullName is an instance method
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }

    markLate(){
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies}`
    }

    // class methods (more of a utility function)
    static enrollStudents(){
        return 'Enrolling students!'
    }

}

let firstStudent = new Student("James", "Sapp", 1)
let secondStudent = new Student('Evan', 'Fujita')
// console.log(firstStudent)
// console.log(firstStudent.fullName())
// console.log(firstStudent.markLate())
// console.log(firstStudent.markLate())


console.log(Student.enrollStudents())
console.log(Student.enrollStudents([firstStudent, secondStudent]))