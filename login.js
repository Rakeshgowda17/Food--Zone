let myform=document.querySelector('form')
console.log(myform);
myform.onsubmit=(e)=>{
 e.preventDefault();
 console.log("From submitted");
 let email=document.querySelectorAll('input')[0].value
 let password=document.querySelectorAll('input')[1].value
 console.log(email, password);
 let storedData = JSON.parse(localStorage.getItem('userInfo'))
 console.log(storedData);
 if(storedData){
 if(email === storedData.email && password === storedData.password){
 alert("Login successful")
 window.location.href="./index.html"
 }else{
 alert("Invalid user")
 }
 }

}