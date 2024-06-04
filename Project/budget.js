document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();// Prevents the default form submission behavior, typically reloading the page
        // Code to handle the form submission
    
        //Initialising the name and amount
        //parseFloat converts number to string and string to number
    let expenseName = document.getElementById('expenseName').value;
    let expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    if(expenseName && expenseAmount) {
        //creating a table and inserting rows staring from index0 
        let table = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();
        
        //insert new cell[0] for name in new row
        let nameCell = newRow.insertCell(0);
        nameCell.textContent = expenseName;

        //insert new cell[1] for amount in new row
        let amountCell = newRow.insertCell(1);
        amountCell.textContent = expenseAmount.toFixed(2);

        //insert new cell[3] for action in new row
        let actionCell = newRow.insertCell(2);
        let deleteButton = document.createElement('button'); //create delete button in the action cell
        deleteButton.textContent = 'Delete';
        
        //Function for delete
        // Assigns an event handler function to the onclick event of deletebutton
        deleteButton.onclick = function() {//onclick event is triggered when the button is clicked
            table.deleteRow(newRow.rowIndex - 1);//deletes whole row
            updateTotalAmount();
        };
        actionCell.appendChild(deleteButton);//whatever has been actioned will be appended

        updateTotalAmount();

       //document.getElementById('expenseForm').reset();//Would have used if I was keeping the data for each month
    }
});

function updateTotalAmount() {
    //assigning variables in the document, get expensetable
    //, get first index0 of tbody where the table is created
    let table = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];
    let rows = table.getElementsByTagName('tr');//assigning rows from table by tagname tr
    
    let totalAmount = 0; //assigning totalamount first to 0
    for (let i = 0; i < rows.length; i++) {
        //In the table,in the row, by data cell of index 1 which is amount
        let amountCell = rows[i].getElementsByTagName('td')[1];
        let amount = parseFloat(amountCell.textContent);
        totalAmount += amount;
    }

    //toFixed() is the method to reduce the value to two decimals, meaning rounding up the value
    document.getElementById('totalAmount').textContent = 'Total Amount: DKK' + totalAmount.toFixed(2);
}