class Change {
    constructor(quarters, dimes, nickels, pennies) {
        this.quarters = quarters;
        this.dimes = dimes;
        this.nickels = nickels;
        this.pennies = pennies;
    }
}

function calculateChange(cents) {
    var quarters = Math.floor(cents / 25);
    cents %= 25;

    var dimes = Math.floor(cents / 10);
    cents %= 10;

    var nickels = Math.floor(cents / 5);
    cents %= 5;

    var pennies = cents;

    return new Change(quarters, dimes, nickels, pennies);
}



function parseAmount(amount) {
    // Remove the dollar sign if it exists
    if (amount.startsWith('$')) {
        amount = amount.substring(1);
    }

    // If the amount starts with a decimal point, interpret it as dollars
    else if (amount.startsWith('.')) {
        amount = parseFloat(amount);
    } 

    // Convert the amount to a float
    else {
        amount = parseFloat(amount);
    }

    // Check if the amount is a number
    if (isNaN(amount)) {
        console.log('Invalid input');
        return;
    }

    // Return the amount as a number
    return amount;
}





function makeChange(amount) {
    // Clear any existing error messages
    document.getElementById('amountError').textContent = '';

    // Check if amount is empty
    if (amount.trim() == '') {
        document.getElementById('amountError').textContent = 'Amount is required.';
        return;
    }

    // Remove the dollar sign if it exists
    if (amount.startsWith('$')) {
        amount = amount.substring(1);
    }

    // Parse the amount
    amount = parseAmount(amount);

    // Check if amount is a number
    if (isNaN(amount)) {
        document.getElementById('amountError').textContent = 'Amount must be a number.';
        return;
    }

    // Check if amount is positive
    if (amount < 0) {
        document.getElementById('amountError').textContent = 'Amount must be a positive number.';
        return;
    }

    // Calculate the change
    var change = calculateChange(amount * 100); // Convert dollars to cents

    // Update the HTML with the results
    document.getElementById('quarters').textContent = change.quarters;
    document.getElementById('dimes').textContent = change.dimes;
    document.getElementById('nickels').textContent = change.nickels;
    document.getElementById('pennies').textContent = change.pennies;
}


