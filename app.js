// globle objects---------------------------------------------------------------------------------------------------------------

//somthing on console
console.log('hgdjgjf');

//this function will hapenned after 2000 miliseocnds
setTimeout(function(){
    console.log('2 seocnds pased');
} , 2000);

//can do somthing repeat in same time interval
let time=0;
timer = setInterval(function(){
    time = time + 2;
    console.log(time + ' seoconds has pased');
    if(time>5){
        clearInterval(timer);
    }
} , 2000);

//can get tha dir name and file name
console.log(__dirname);
console.log(__filename);

//function expresion------------------------------------------------------------------------------------------------------------
var clFun = function(fun){
    fun();
}

var sayHello = function(){
    console.log('hello');
}

clFun(sayHello);

//module require and export
var things = require('./modules');

console.log(things.add(20,30));
console.log(things.say('hukanawa'));
console.log(things.wordLength('huijuyrfdkuhs'));