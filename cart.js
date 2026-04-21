let cart=[];

function addToCart(item){

cart.push(item);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert("Added");

}

if(document.getElementById("cartItems")){

let saved=
JSON.parse(
localStorage.getItem("cart")
)||[];

let list=
document.getElementById("cartItems");

saved.forEach(function(item){

let li=
document.createElement("li");

li.innerText=item;

list.appendChild(li);

});

}

function placeOrder(){

let order=
"Order:%0A"+
cart.join("%0A");

window.open(
"https://wa.me/919876543210?text="+order
);

}