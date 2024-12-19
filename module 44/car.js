
class Car{
    constructor(company,model,year){
        this.company= company;
        this.model= model;
        this.year= year;
    }
    getDiscription(){
       return `This is a ${this.year} ${this.company} ${this.model}`;  
    }
}
const car1 = new Car('tata','alto',1999);
console.log(car1.getDiscription());
