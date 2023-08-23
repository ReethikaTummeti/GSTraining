///types of ts : implicit &explicit
// implicit
const a=10;
// explicit
const b:string="hnj";
// b=9;  --error
// a=30; --error
const c:number|string="cbit";
//c=12;

enum Month
{
    Jan,Feb,March,April
}
const m:Month=Month.Feb;

//suer-defined types
type User={
    name:string;
    age:number;
    email:string;
    //to make something optinal, add  aquestion  mark as follows: email?:string;
};
const u:User={
    name:"reethika",
    age:21,
    email:"reethika.tummeti@gmail.com",
}
type PersonalDetails={
    name: string;
    dob:Date;
}
type ContactDetails={
    phone: number;
    email:string;
}
type identity={
    id: number;
}
type customer=PersonalDetails & ContactDetails;
type employee = PersonalDetails & ContactDetails & identity;

// const cust:customer={ };
// const emp:employee={};

//type casting
const elemnet= document.querySelector("input") as HTMLInputElement
const ele=<HTMLImageElement>document.querySelector("img");