const buttons = document.querySelectorAll('input[type="button"]');
const outputDisplay = document.getElementById('output');


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.nodeName === 'INPUT') {
            switch (e.target.value) {
                case 'AC':
                    clear();
                    break;
                case '=':
                    calculate();
                    break;
                default:
                    addToOutput(e.target.value);
            }
        }
    });
});
function clear() {
    outputDisplay.textContent = '';
}
function addToOutput(value) {
    outputDisplay.textContent += value;
}
function calculate() {
    try {
        outputDisplay.textContent = eval(outputDisplay.textContent.replace('×', '*').replace('÷', '/'));
    } catch (e) {
        outputDisplay.textContent = 'Error';
    }
}
