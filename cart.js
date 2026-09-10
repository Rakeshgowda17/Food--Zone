function displayCart(){
 let cart = JSON.parse(localStorage.getItem('cart'))
 console.log(cart);
 let cartItem = document.getElementById('cart-item')
 console.log(cartItem);
 let total=0;
 cartItem.innerHTML=cart.map((item, index)=>{
 total += item.price;
 return `
 <div class="cart-item">
 <img src="${item.img}" alt="">
 <h3>${item.name} -- ■ ${item.price}/-</h3>
 <button onclick="removeItem(${index})">Remove Item</button>
 </div>`
 })
 document.getElementById("total").innerText = `Total Bill : ■${total}/-`
 }
displayCart()
function removeItem(index){
 let cart = JSON.parse(localStorage.getItem('cart'))
 cart.splice(index, 1)
 localStorage.setItem('cart', JSON.stringify(cart))
 displayCart();
}
function clearCart(){
 let ans = confirm("are u sure u eant to delete all item?")
 if (ans){
 localStorage.removeItem('cart')
 displayCart();
 }
}
function checkout(){
 alert("Thank You For Ordering the food. Order Again!!❤■ ");
 localStorage.removeItem('cart')
 displayCart();
 window.location.href="./index.html"
}