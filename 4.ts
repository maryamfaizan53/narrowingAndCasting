///how to make a class object 
class Employee {
    name:string 
    age: number
    experience:number
    

    constructor(n:string,a:number,e:number){
    this.name = n
    this.age = a
    this.experience = e

    }

getDetails(company:string){
    return `Welcome ${this.name}! You are now hired at ${company}
    `
}}
const E1 = new Employee("Maryam",23,5)
const E2 = new Employee("Kinza",20,4)
console.log(E1.getDetails("Miocrosoft"))