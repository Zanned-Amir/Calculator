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
        output1 += output2 + " " + operator + " ";
        output2 = num.toString();
    } else {
        output2 += num;
    }
    updateOutputs();
}

function handleOperator(op) {
    if (output2 !== "") {
        if (operator) {
            // If there's already an operator, update output1 with the new operator
            output1 = output1.slice(0, -2) + " " + op + " ";
        } else {
            // If there's no operator, update output1 with the current operator
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

    let cleanedOutput1 = output1.replace(/(\+|\-|\*|\/)\s*(\+|\-|\*|\/)/g, '$1 ');
    document.querySelector('.output_1').innerText = cleanedOutput1;
}
