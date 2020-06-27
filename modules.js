var add = function(a,b){
    let x = a+b;
    return 'sum is ' + x;
}

var say = function(x){
    return 'im saying ' + x;
}

var wordLength = function(x){
    return x.length;
} 

module.exports.add = add;
module.exports.say = say;
module.exports.wordLength = wordLength;