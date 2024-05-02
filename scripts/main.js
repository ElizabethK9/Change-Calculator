function makeChange(amount) {
    // Clear any existing error messages
    document.getElementById('amountError').textContent = '';

    // Check if amount is empty
    if (amount == '') {
        document.getElementById('amountError').textContent = 'Amount is required.';
        return;
    }
    
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

}