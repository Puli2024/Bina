let x=5;
let y=-1;
let z=x+y;
console.log(z)

let text="Good1";
let text1='Bad2';
let text2='& the ugly3';
let textout=text+text1+text2;
console.log(textout)

let x1=5;
let text3="Good1";
let output=x1+text3;
console.log(output)

/*let x2=1;
const y2=3;
y2=1;
console.log(y2)*/

/*let myName=Bina;
console.log(myName)

let myName1="Bina"*/
console.log("myName1")

/*function multiply(a) {
    return a*7;
    }
const dogage=multiply(1)
alert("My dogs age in human years:" + dogage)
console.log(dogage)*/


/*function cofimoney(coffeePrice,currentAge) {
    return coffeePrice*365*(80-currentAge)
}
const moneyspent=cofimoney(5,20)
alert ('Money spent for coffee until 80yrs is' + moneyspent)*/

function sayHiTouser() {alert('Hello');}
        

/*function Order(orderAmount, food, restaurantName){
        /*console.log('You are ordering ' + '£' + orderAmount +' ' +food + ' from '  +restaurantName);*/
        /*console.log('You are ordering' ${orderAmount} ${food} ${restaurantName})*/
        /*return 'You are ordering ' +orderAmount + ' ' + food + 'from ' + restaurantName};               }*/
    /*orderResult = 'You are ordering' ${orderAmount} ${food} 'from' ${restaurantName};*/

    /*console.log(orderResult)           
Order(1,"Pizza","Meyers Spisehus");
Order(2,"Quesidilas","street mexican");
Order(4,"Donuts", "Dunkens"); */

const orderFoodArrow = (orderAmount, food, restaurantName) =>
`You are ordering  ${orderAmount} ${food} 'from' ${restaurantName}`;
console.log(orderFoodArrow(5, 'Pizzas', 'Meyers'))







