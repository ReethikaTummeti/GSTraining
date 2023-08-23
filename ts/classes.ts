class Demo{
    private data:string; //provate readonly for constant member
    //readonly can be initialised during the declaration or in the constructor
    private readonly demodata:string;
    static count:number=0;
    constructor(){
        this.demodata="sample";
    }
    public func(a:number):void{
        Demo.count=5;
        //this.demodata="heyy"; --Cannot assign to 'demodata' because it is a read-only property.
    }
}
const d = new Demo();
d.func(10);
console.log(Demo.count);