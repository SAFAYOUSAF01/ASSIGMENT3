function generateTable() {
    // Get the values from the input fields
    const num = document.getElementById('number').value;
    const limit = document.getElementById('limit').value;

    // Validate the inputs
    if (num === '' || limit === '') {
        alert('Please provide both number and limit.');
        return;
    }

    if (limit < 1) {
        alert('Please provide a positive limit.');
        return;
    }

    // Parse inputs to integers
    const number = parseInt(num, 10);
    const maxLimit = parseInt(limit, 10);

    // Generate the multiplication table
    let output = `<h1>Multiplication Table for ${number} up to ${maxLimit}:</h1>`;
    output += '<ul>';
    for (let i = 1; i <= maxLimit; i++) {
        output += `<li>${number} x ${i} = ${number * i}</li>`;
    }
    output += '</ul>';

    // Display the output
    document.getElementById('output').innerHTML = output;
}
