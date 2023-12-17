const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzas = [vegetarian,hawaiian,pepperoni]
const pizzaPrice = 80;

//Put your Javscript code here:
// alert(
//   "Hey! Happy to serve your pizza. On our menu we have " +
//     vegetarian +
//     " , " +
//     hawaiian +
//     " and " +
//     pepperoni
// );

// const orderName = prompt(
//   "Enter the name of the pizza you want to order today."
// );


// let isPizzaOnMenu = checkOrderName(orderName);

// if(isPizzaOnMenu){
//     const orderQuantity = prompt("How many of " + orderName + " do you want?. ");
//     const time = cookingTime(orderQuantity);
//     const orderTotal = totalCost(orderQuantity);

//     alert(
//         "Great, I'll get started on your " +
//       orderName +
//       " right away, it will cost " +
//       orderTotal +
//       " kr. The pizza will take " + time + " minutes." 
//     );
// }
// else {
//     alert("we don't have this on the menu, pleas enter another order")
// }

const form = document.querySelector("#pizza-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedTopping = document.querySelector("#pizza-toppings");
    let showTopping = selectedTopping.value;
    
    if(!checkOrderName(selectedTopping.value)){
        alert("somehow you chooose and invalid pizza, choose again")
    }
    else{
        const selectedQuantity = document.querySelector("#pizza-amount")
        let time = cookingTime(selectedQuantity.value);
        let cost = totalCost(selectedQuantity.value);
        if(time == null || cost == null){
            alert("select the number of pizzas you want")
        }
        else{
            const showDiv = document.querySelector("#show-order");
            const info = document.createElement("div");

            info.innerHTML = "<h3> "+ "Great, I'll get started on your " + 
            selectedTopping.value + 
            " right away, it will cost " + cost 
            + "kr. </h3>" + "<h3> The pizza will take " + time + " minutes." + " </h3>"

            showDiv.appendChild(info)
        }
    }

});

const pizzaToppingSelect = document.querySelector("#pizza-toppings");

pizzas.forEach((pizza) => {
    let pizzaTopping = document.createElement("option");


    pizzaTopping.value = pizza;
    pizzaTopping.innerHTML = pizza;

    pizzaToppingSelect.appendChild(pizzaTopping);
});

function checkOrderName(orderName){
    if(orderName == vegetarian ||orderName == hawaiian ||orderName == pepperoni){
        return true;
    }
    else{
        return false;
    }
}

function totalCost(orderQuantity){
    if (orderQuantity != null) {
        return orderQuantity * pizzaPrice;
    }
    else{
        return null;
    }
}

function cookingTime(orderQuantity){
    if(orderQuantity>0 && orderQuantity <=2) {
        return 10;
    }
    
    else if (orderQuantity >=3 && orderQuantity <=5) {
        return 15;
    }
    else if ( orderQuantity >= 6 ){
        return 20;
    }
    else{
        return null;
    }
}