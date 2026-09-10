let emp={
    empid:101,
    empname:"Rakesh",
    empage:21,
    empaddress:"banglore",
    empdesignation:"developer"
}
console.log(emp)
//! converting regular object to JSON object

let jsonobj=JSON.stringify(emp)
console.log(jsonobj)

//! converting JSON object to JSON regular

let regularobj=JSON.parse(jsonobj)
console.log(regularobj)

//! MATH objects

let num1=10.4
console.log(num1)
console.log(Math.round(num1))
console.log(Math.floor(num1))
console.log(Math.ceil(num1))
console.log(Math.random()*1000)
console.log(Math.floor(Math.random()*10))
console.log(Math.max(15,12,10,5,80,100))
console.log(Math.min(15,12,10,5,80,100))
console.log(Math.PI)
console.log(Math.sqrt(25))
console.log(Math.cbrt(27))

//? date and time methods

let date=new Date()
console.log(date)
console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())