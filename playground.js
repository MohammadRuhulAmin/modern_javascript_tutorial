function num(){
    return 10;
}
console.log(num());
var x = ()=>{
    return 10;
}
console.log(x());
let div = () =>  10;
console.log(div());
let sayName = ()=>"Md Ruhul amin";
console.log(sayName());
function passValue(n){
    return n;
}
console.log(passValue(122));
let pv = (n) => n*n;
console.log(pv(1222));

let tim = (a,b)=> a+b; // means return a+b;
console.log(tim(1,2));

var javascript = {
    name : 'javascript',
    library:['React','Angular','Vue'],
    printLibraries: function(){
        this.library.forEach((a)=>{
            console.log(`${this.name} loves ${a}`);
        })
    }
}

javascript.printLibraries();
var software = {
    name :'Md Ruhul Amin',
    lang:['c','c++','javascript','c#'],
    printInfo:function(){
        console.log(this.name);
        this.lang.forEach((l)=>console.log(`${this.name} loves ${l}`));
    }
}
software.printInfo();

var bof = {
    name:'Bangladesh ordnance Factories',
    address:'shimultoli, bof',
    products:['machinegun','morter','rifel','ak47'],
    printInfo: function(){
        this.products.forEach((p)=>console.log(`${this.name} makes ${p}`))
    }
}

bof.printInfo();

var myClass = function(name,email,contact){
    this.name = name;
    this.email = email;
    this.contact = contact;
}

let xx = new myClass("ruhul amin","r@gmail.com","110022151");
console.log(xx.name);

