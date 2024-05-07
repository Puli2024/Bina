'use strict'

//HTML does not have 'id' for plus button, creating an id for plus button
let count = 0; //initialise count
document.addEventListener('DOMContentLoaded', function() {
        // Add an attribute 'Id' to the '+' button since it does not already have one
    
    const plusButton = document.querySelector('.button[onclick="plusDisplay()"]');
          plusButton.id = 'plusButton';
          document.getElementsByTagName('button')[0].setAttributeNode(plusButton);
    
    // Check if the product is out of stock
    //const isOutOfStock=true;

    //Get the elements
    outOfStock = document.getElementById('outOfStock');
    shippingMessage = document.getElementById('shippingMessage');

    // If the product is out of stock, display the out of stock message above the shipping message
    if (outOfStock === true) 
    {
        outOfStock.style.display = 'block';//display the 'out of stock' message
        //moving out of stock message above shipping message
        //shippingMessage.parentNode.insertBefore(outOfStock, shippingMessage);
        outOfStock.textContent = 'out of Stock';
    }    
    updateDisplay();
});

function updateDisplay() {

'use strict'
 document.getElementById('displayCounter').textContent = count;

 
 const plusButton = document.getElementById('plusButton');
   
if (count ===0)
{
    document.getElementById('minusButton').disabled = true;
}
else{
    document.getElementById('minusButton').disabled = false;
}
   
// Check if the counter reaches 10 and add the shipping message
//assigning attribute Id to span
let shippingMessage = document.getElementById('shippingMessage'); 

//span message is given in function in order to repeat the shipping message repeatedly with every count & also to check if the span element with Id exists already
if (!shippingMessage) {
 // Create new span in HTML as there is no span already
 shippingMessage = document.createElement('span');
 shippingMessage.id = 'shippingMessage';
 document.body.appendChild(shippingMessage);

 /*Using ternary operator for shipping message
//create span element to display shipping message
 shippingMessage = !shippingMessage ? document.createElement('span'): shippingMessage;
 shipping.id = 'shippingMessage';
 document.getElementById('shippingMessage') && document.body.appendChild(shippingMessage);*/

//styling shipping message
shippingMessage.textContent = 'Shipping charges apply';
shippingMessage.style.fontWeight = 'bold';
shippingMessage.style.fontSize = '20px';
shippingMessage.style.fontFamily = 'Arial sans serif';
shippingMessage.style.textAlign = 'center';
shippingMessage.style.color = 'blue';
document.querySelector('.countercontainer').style.marginBottom = '20px';
//Another way to style all the span element with attribute Id 'shippingMessage'
/*shippingMessage.style.cssText = 'font-weight: bold, font-size: 20px, font-family: Arial, sans-serif, margin-top: 50px';*/
    }
if (count >0 && count <10 ) {
shippingMessage.textContent = 'Shipping charges apply'  
     }
 else if (count >= 10 && count < 20) {
shippingMessage.textContent = 'You have free shipping';
        }
      
// change button background color to red when count == 20
//const plusButton = document.getElementById('plusButton');
if (count === 20)
{
    if (shippingMessage) {
        shippingMessage.textContent = "";
        //shippingMessage.remove('You have free shipping');
        //document.body.getElementById(shippingMessage); // This will remove the element from the DOM
        // shippingMessage.style.display = 'none'; // Use this line instead to just hide it
    }

     //document.body.remove(shippingMessage);
    plusButton.style.backgroundColor = 'red';
    plusButton.disabled = true;}
else
    {
    plusButton.style.backgroundColor = '';
    plusButton.disabled = false;            
       }
    }

let outOfStock=document.getElementById('outOfStock');

if(count>= 20)// && !outOfStock)
{
        
if(!outOfStock)
    {
    //If message is already not given in HTML
     //Create span with message out of stock when count >= 20
     outOfStock = document.createElement('span');
     outOfStock.id = 'outOfStock';
     outOfStock.textContent = 'Out Of Stock';
     document.body.appendChild(outOfStock);
               }        
    //ensuring this is message is visible
    outOfStock.style.display = 'block';
            }
else
    {
        if(outOfStock)
        // Hide stock message if count is less than 20
         outOfStock.style.display = 'none'
        }
// Adjust margin top to create spacing below counter
//document.querySelector('.countercontainer').style.marginBottom = '20px';

updateDisplay()
    //}  
            

    
    function plusDisplay() {
        count++;
        updateDisplay()
              
       }
      
       
    function minusDisplay() {
        count--;
        updateDisplay();
        
    }

    function counterReset() {
      count = 0;
      updateDisplay();
  }
