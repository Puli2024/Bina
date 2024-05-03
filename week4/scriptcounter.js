
let count = 0; //initialise count

  //HTML does not have id for plus button
  document.addEventListener('DOMContentLoaded', function() {
    // Assign an ID to the '+' button since it does not already have one
    const plusButton = document.querySelector('.button[onclick="plusDisplay()"]');
    if (!plusButton.id) {
        plusButton.id = 'plusButton';
    }
    updateDisplay(); // Initialize display update
}); 

function updateDisplay() {

        document.getElementById('displayCounter').textContent = count;

//Disable counter when count is zero
        if (count===0){
            document.getElementById('minusButton').disabled = true;
                        }
        else{
            document.getElementById('minusButton').disabled = false;
                        }
    
        // Check if the counter reaches 10 and add the shipping message

        let shippingMessage = document.getElementById('shippingMessage');

        if (!shippingMessage) {
            // Create new span
            shippingMessage = document.createElement('span');
            shippingMessage.id = 'shippingMessage';
            document.body.appendChild(shippingMessage);
        }

        if (count >0 && count <10 )
        {
            shippingMessage.textContent = 'Shipping charges apply';
        }
        else if (count >= 10 && count < 20)
        {
            shippingMessage.textContent = 'You have free shipping';

        }
      
// change button background color to red when count > 20
        const plusButton = document.getElementById('plusButton');
        if (count >= 20)
        {
            plusButton.style.backgroundColor = 'red';
        }

        else
        {
            plusButton.style.backgroundColor = '';
        }

                }

   
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