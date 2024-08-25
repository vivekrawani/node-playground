import { measure, once } from "helpful-decorators";
class Abc {
    private name : string;
    constructor(name : string){
        this.name = name;
        console.log("new instance of class created")
    }

    getName(){
        return this.name;
    }

    @once
    runOnce(){
        console.log("This will be called once!")
    }
    setName(arg : string){
        this.name = arg
    }
   
    countTo1b(){
        var ctr = 0;
        for (let i = 0; i < 1_000_000_000; i++) {
            ctr++;
        }
        console.log(ctr);
    }
}

const obj = new Abc("yoda");
console.log(obj.getName())
obj.setName("yondu")
console.log(obj.getName())

obj.runOnce();
obj.runOnce();
obj.runOnce();