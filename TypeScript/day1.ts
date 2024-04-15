/* Typescript is a superset of javascript
   which is also known as statically typed language
   static type:- it'll check at the compile time 
*/


// declaring the variables 
let fullName :string ="Mohammed Tajammul";
let phoneNumber : number | null = 1233;
let isStudent : boolean=false;


//type inference

let x=10; // ts automatically assign the type 
// x="" if i tryna provide different values then its throw an error

//primitive datatype

let num:number=10;
let str:string ="hgsf";
let bool: boolean =true;
let _null:null=null;
let _undefined:undefined =undefined;

function add(num1:number , num2:number) :number {
    return num1 +num2;
}
// console.log(add(10,20))

function defaultParameter(name:string ,greeting="Hello") :void {
    console.log(`${greeting} , ${name}`)
}

interface Person{
    name:string;
    email ?:string; // ? indicate the data can be optional
    phone:number;
}

let person: Person ={
    name:"Mohammed Tajammul",
    phone:7364724334,
    email:"taj123@gmail.com"
}

// console.log(person)

interface Employee extends Person {
    designation:string
}

let employee : Employee ={
   name:"Mohammed Tajammul",
   phone:187276372,
designation :"Asst software engineer"
}

// console.log(employee)


// class 
class BankAccount {
    private balance :number;

    constructor(initialAmount :number){
        this.balance =initialAmount;
    }

    deposit (Amount:number):void{
       this.balance +=Amount;
    }

    withdraw(Amount :number):void {
        if(Amount <= this.balance){
            this.balance -=Amount;
        }else{
            console.log("Insufficient balance");
        }
    }

    getBalance():number {
        return this.balance;
    }
}

let user1 =new BankAccount(1000);
user1.deposit(1000);
user1.withdraw(200);
console.log(user1.getBalance())


//union type 

let isValid :boolean | number;
isValid =1; //ok
isValid=false; //ok



//intersection type

interface bird{
    fly():void
}

interface Animals {
    walk():void
}

let creature :bird & Animals ={
    fly(){
       console.log("birds flies");
    },
    walk(){
        console.log("Animal can walk");
    }
}

creature;


//when we're not sure about the type in that case we can make use of generic

function identity<T>(args:T) :T {
    return args
}

let getString=identity<string>("hello");
let getNumber= identity<number | boolean> (12);

