// console.log(typeof 10);
// console.log(typeof 'character');
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof [1,2,3]);


var a;
var b= '----';
console.log(a);
console.log(b);

console.log(5%0);

console.log(5/0);

console.log(-5/0);

var obj = {"a":12,"b":20,};

var arrayofobj = ['{a: 10,b:90,,c:20}','{b:90,,c:20}','{c:20}'];

var arraydata = ['test',21,23,09]

arraydata.forEach( obj =>{
    console.log(obj);
})

console.log(obj);

console.log(arrayofobj);

var x = Array.isArray(arrayofobj);

var z = Array.isArray(arrayofobj);

console.log(x);

console.log(z);


(function fname() {
    console.log('12');
})();


var anonfunc = function (){
    console.log('anonymous function');
};

anonfunc();

//ternary operator 

var isdata = false;
var data = isdata ? 'data1': 'data2';

console.log(data);

// && (and) , || (or)

try{
throw new Error('throw this error msg');
}
catch(err){
    console.log(err);
}