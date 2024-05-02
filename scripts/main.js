function makeChange(amount) {
    // Clear any existing error messages
    document.getElementById('amountError').textContent = '';

    // Check if amount is empty
    if (amount == '') {
        document.getElementById('amountError').textContent = 'Amount is required.';
        return;
    }
}