const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    " , " +
    hawaiian +
    " and " +
    pepperoni
);

const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);

if (orderName == vegetarian ||orderName == hawaiian ||orderName == pepperoni) {
  alert("How many of " + orderName + " do you want?. ");
} else {
    alert("we don't have this on the menu, pleas enter another order")
}

const orderQuantity = prompt("How many of " + orderName + " do you want?. ");

let timeToFinish
if(orderQuantity>0 && orderQuantity <=2) {
    timeToFinish = "The pizzas will take 10 minutes."
    
}

else if (orderQuantity >=3 && orderQuantity <=5) {
    timeToFinish = "The pizzas will take 15 minutes."
}
else if ( orderQuantity >= 6 ){
    timeToFinish = "The pizzas will take 20 minutes."
}

if (orderQuantity != null) {
    const orderTotal = orderQuantity * pizzaPrice;
  alert(
    "Great, I'll get started on your " +
      orderName +
      " right away, it will cost " +
      orderTotal +
      " kr. " + timeToFinish
  );
}
