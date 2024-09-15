
// function clearEntry() {
//     document.getElementById('display').innerText = '0';
// }
// function clearDisplay() {
//     document.getElementById('display').innerText = '0';
// }

// function appendToDisplay(value) {
//     const display = document.getElementById('display');
//     if (display.innerText === '0') {
//         display.innerText = value;
//     } else {
//         display.innerText += value;
//     }
// }

// function deleteLast() {
//     const display = document.getElementById('display');
//     display.innerText = display.innerText.slice(0, -1);
//     if (display.innerText === '') {
//         display.innerText = '0';
//     }
// }

// function calculateResult() {
//     const display = document.getElementById('display');
//     try {
//         display.innerText = eval(display.innerText);
//     } catch {
//         display.innerText = 'Error';
//     }
// }

// function percentage() {
//     const display = document.getElementById('display');
//     display.innerText = (display.innerText / 100).toString();
// }

// function reciprocal() {
//     const display = document.getElementById('display');
//     if (display.innerText === '0') {
//         display.innerText = 'Error';
//     } else {
//         display.innerText = (1 / parseFloat(display.innerText)).toString();
//     }
// }

// function square() {
//     const display = document.getElementById('display');
//     display.innerText = (parseFloat(display.innerText) ** 2).toString();
// }
// function squareRoot() {
//     const display = document.getElementById('display');
//     display.innerText = Math.sqrt(display.innerText).toString();
// }

let currentExpression = ''; // Track the full expression

// Clear the entire display
function clearDisplay() {
    document.getElementById('display').innerText = '0';
    document.getElementById('expression').innerText = '';
    currentExpression = '';
}

// Clear the last entry (CE)
function clearEntry() {
    document.getElementById('display').innerText = '0';
}

// Append value to the display and update the current expression
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
    currentExpression += value;
    document.getElementById('expression').innerText = currentExpression;
}

// Delete the last character and update the expression
function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
    currentExpression = currentExpression.slice(0, -1);
    document.getElementById('expression').innerText = currentExpression;
}

// Calculate and display the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.innerText);
        document.getElementById('expression').innerText = currentExpression + ' =';
        display.innerText = result;
        currentExpression = ''; // Reset expression after result
    } catch {
        display.innerText = 'Error';
        currentExpression = '';
    }
}

// Calculate percentage
function percentage() {
    const display = document.getElementById('display');
    display.innerText = (parseFloat(display.innerText) / 100).toString();
    currentExpression = display.innerText;
    document.getElementById('expression').innerText = currentExpression;
}

// Calculate reciprocal (1/x)
function reciprocal() {
    const display = document.getElementById('display');
    const value = parseFloat(display.innerText);
    if (value !== '0') {
        display.innerText = (1 / parseFloat(display.innerText)).toString();
        currentExpression = `1/(${value})`;
        document.getElementById('expression').innerText = currentExpression;
    } else {
        display.innerText = 'Error';
    }
}
// Add complex expressions like 1/(x)
// function reciprocal() {
//     const display = document.getElementById('display');
//     const value = parseFloat(display.innerText);

//     if (value !== 0) {
//         // Update expression display to show 1/(x)
//         currentExpression = `1/(${display.innerText})`;
//         document.getElementById('expression').innerText = currentExpression;
        
//         // Calculate reciprocal and display the result
//         display.innerText = (1 / value).toString();
//     } else {
//         display.innerText = 'Error';
//         document.getElementById('expression').innerText = '';
//     }
// }


// Calculate square (x²)
function square() {
    const display = document.getElementById('display');
    const value = parseFloat(display.innerText);
    display.innerText = (parseFloat(display.innerText) ** 2).toString();
    currentExpression =  `sqr(${value})`;
    document.getElementById('expression').innerText = currentExpression;
}

// Calculate square root (√x)
function squareRoot() {
    const display = document.getElementById('display');
    const value = parseFloat(display.innerText);

    display.innerText = Math.sqrt(parseFloat(display.innerText)).toString();
    currentExpression = `√(${value})`;
    document.getElementById('expression').innerText = currentExpression;
}
