//your JS code here. If required.
function processData(inputArray) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputArray);
        }, 3000);
    });
}

function filterOddNumbers(inputArray) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const resultArray = inputArray.filter(num => num % 2 === 0);
            resolve(resultArray);
        }, 1000);
    });
}

function multiplyEvenNumbers(inputArray) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const resultArray = inputArray.map(num => (num % 2 === 0) ? num * 2 : num);
            resolve(resultArray);
        }, 2000);
    });
}

function updateOutputText(text) {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = text;
}

const inputArray = [1, 2, 3, 4];

processData(inputArray)
    .then(filterOddNumbers)
    .then(multiplyEvenNumbers)
    .then(resultArray => {
        updateOutputText(resultArray.join(', '));
    })
    .catch(error => {
        console.error('Error:', error);
    });