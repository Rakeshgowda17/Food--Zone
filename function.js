//! function with return type
function add1(){
    return 10 + 10;
}
console.log(add1());

let res = add1();
console.log(res);

//! function with arguments and return type
function add2(n1, n2){
    return n1 + n2;
}
console.log(add2(10,20));

//? Types of functions

//? Anonymous function
let anon = function(){
    console.log("hello world");
};
anon();

//? Named function
function greeting(){
    console.log("hello world");
}
greeting();

//? Nested function
function parent(){
    console.log("I am parent function");
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a,b,c);

    function child(){
        console.log("I am child function");
        console.log(a,b,c);
    }
    child();
}
parent();

//? JavaScript currying with closure
function parent2(){
    console.log("I am parent function");

    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a,b,c);

    function child(){
        console.log("I am child function");
        console.log(a,b,c);
    }
    return child;
}
parent2()();

//? Simple closure
function parent3(){
    console.log("I am parent function");

    function child(){
        console.log("I am child function");
    }
    return child;
}
parent3()();

//? Arrow function
let arrfun = () => {
    console.log("arrow function");
};
arrfun();

//! Implicit return (without return keyword)
let add3 = () => console.log(10+10);
add3();

let sum = (n1,n2) => n1 + n2;
console.log(sum(10,20));

let add4 = (n1,n2) => {
    return n1+n2;
};
console.log(add4(20,30));

function add(n1,n2){
    return n1+n2;
}
function sub(n1,n2){
    return n1-n2;
}
function mul(n1,n2){
    return n1*n2;
}
function div(n1,n2){
    return n1/n2;
}

//? Higher order function
function operation(n1,n2,task){
    return task(n1,n2);
}
console.log(operation(10,20,add));
console.log(operation(10,20,div));

function python(course){
    console.log(`your course ${course} is completed successfully`);
}
function webdev(course){
    console.log(`your course ${course} is in ongoing state`);
}
function SQL(course){
    console.log(`your course ${course} is not started yet`);
}

function qspider(course,task){
    return task(course);
}

qspider("python",python);
qspider("webdev",webdev);
qspider("SQL",SQL);

//? Higher order function with array
let numbers=[10,20,30,40,50];

let newarr = numbers.map(function(num){
    return num + num;
});

console.log(newarr);

//? Callback function
function greet(name, callback){
    console.log(`hello ${name}`);
    callback();
}

greet("Rakesh", function(){
    console.log("callback executed");
});

//? Immediately Invoked Function Expression (IIFE)
(function(){
    console.log("hello all");
})();

//? Generator function
function* generatorExample(){
    yield 1;
    yield 2;
    yield 3;
}

let gen = generatorExample();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());