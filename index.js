var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(itemName) {
 const price = Math.floor(Math.random() * 100) + 1;
 cart.push({itemName:itemName,itemPrice:price});
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  if(cart.length < 1){
    return "Your shopping cart is empty."
  } else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }else if(cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else{
  
  var str = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
 for(let i = 1; i < cart.length-1; i++){
   str += `, ${cart[i].itemName} at $${cart[i].itemPrice} `
 }
 str+= `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
 return str;
}
}

function total() {
 var sum = 0;
 for(let i = 0; i < cart.length; i++) {
   sum += cart[i].itemPrice;
 }
 return sum
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if()
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
