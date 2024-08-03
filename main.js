
/*
Note:
According to w3schools using let or const instead of var in JavaScript is recommended for several reasons 
related to scope, hoisting, and the immutability of variables.
while var keyword should only be used in code written for older browsers.
*/

function calculateTotal() {
    var roomRate = document.getElementById('room-type').value;
    //var nights = document.getElementById('nights').innerHTML;
    //Bugg number 2: .innerHTML 
    //Explanation: .innerHTML propery is used to get the content of an element not the value.
    //correction: using .value property to get the value of the input element
    var nights = document.getElementById('nights').value;

    nights = parseInt(nights);
    if (isNaN(nights) || nights <= 0) {
        alert('Please enter a valid number of nights.');
        return;
    }

    if (roomRate === "") {
        alert('Please select a room type.');
        return;
    }

    //var total = parseInt(roomRate) * nights;
    //Bugg number 3: parseInt(roomRate)
    //Explanation: roomRate contains a dollar sign which will cause the parseInt function to return NaN
    //correction: remove the dollar sign from the roomRate variable (using string.substring(start-index) method)
    var total = parseInt(roomRate.substring(1)) * nights;

    //document.getElementByID('total-cost').innerText = total.toFixed(2);
    //Bugg 4: typo in .getElementByID method 
    //Explanation: The correct method name is getElementById not getElementByID <--- typo
    //Correction:
    document.getElementById('total-cost').innerText = total.toFixed(2);
}




function confirmBooking() {
    var total = document.getElementById('total-cost').innerText;
    
    // if (total === 0) {
    //     alert('Please calculate the total before confirming.');
    //     return;
    // }
    //Bug 5: (total === 0)
    //Explanation: using === operator (equal value and type ) to comapare total which is a local variable and is string "0.00" not a number.
    //Correction: convert total to number using parseFloat() method (parseFloat(total) === 0) to compare nummber with number type or compare string to string "0.00"
    
    if (total === "0.00") {
        alert('Please calculate the total before confirming.');
        return;
    }
    document.getElementById('confirmation-msg').innerText = `Your booking is confirmed. Total cost: $${total}`;
}




function resetForm() {
    document.getElementById('room-type').selectedIndex = 0;
    // bugg 6: document.getElementById('nights').value = 0;
    // Explanation: setting 0 to the value attribute in <input type="number" id="nights" value="1">
    // Correction: setting 1 (default value) to the value attribute in <input type="number" id="nights" value="1"> 
    document.getElementById('nights').value = 1;

    document.getElementById('confirmation-msg').innerText = '';
    //adding the following line to reset the total cost to 0.00
    document.getElementById('total-cost').innerText = '0.00';
}

// End of Task2.js file