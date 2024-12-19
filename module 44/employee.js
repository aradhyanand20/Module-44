
class Employee{
    constructor(name, position, salary){
        this.empname = name;
        this.emppost = position;
        this.empsal = salary;

    }
     getSalary(){
        return this.empsal;
    }
}

let employee = new Employee('Aradhya','web developer','40k');
console.log(employee.getSalary());
