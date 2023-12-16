let output1 = "";
let output2 = "";
let operator = null;

function clearAll() {
    output1 = "";
    output2 = "";
    operator = null;
    updateOutputs();
}

function deleteLast() {
    if (output2.length > 0) {
        output2 = output2.slice(0, -1);
        updateOutputs();
    }
}

function appendNumber(num) {
    if (operator) {
        if (num === '.' && output2.includes('.')) {
            return;
        }
        output2 += num.toString();
    } else {
        if (num === '.' && output2.includes('.')) {
            return;
        }
        output2 += num.toString();
    }
    updateOutputs();
}

function handleOperator(op) {
    if (output2 !== "") {
        if (operator) {
            output1 = output1.slice(0, -2) + " " + op + " ";
        } else {
            output1 += output2 + " " + op + " ";
            output2 = "";
        }
        operator = op;
        updateOutputs();
    }
}

function calculate() {
    if (output1 !== "" && output2 !== "") {
        const num1 = parseFloat(output1);
        const num2 = parseFloat(output2);
        switch (operator) {
            case '+':
                output2 = (num1 + num2).toString();
                break;
            case '-':
                output2 = (num1 - num2).toString();
                break;
            case '*':
                output2 = (num1 * num2).toString();
                break;
            case '/':
                output2 = (num1 / num2).toString();
                break;
        }
        output1 = "";
        operator = null;
        updateOutputs();
    }
}

function updateOutputs() {
    document.querySelector('.output_2').innerText = output2;

    let cleanedOutput1 = output1.replace(/(\+|\-|\*|\/)\s*(\+|\-|\*|\/)+/g, '$1 ');
    document.querySelector('.output_1').innerText = cleanedOutput1;
}
