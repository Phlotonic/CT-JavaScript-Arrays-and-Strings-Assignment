// Task 1: Adding and Removing Elements
function pushElement() {
    let fruits = document.getElementById('fruitsInput').value.split(',');
    fruits.push('grape');
    document.getElementById('arrayOutput').innerText = `After push: ${fruits.join(', ')}`;
}

function popElement() {
    let fruits = document.getElementById('fruitsInput').value.split(',');
    fruits.pop();
    document.getElementById('arrayOutput').innerText = `After pop: ${fruits.join(', ')}`;
}

// Task 2: Sorting Arrays
function sortAscending() {
    let numbers = document.getElementById('numbersInput').value.split(',').map(Number);
    numbers.sort((a, b) => a - b);
    document.getElementById('sortOutput').innerText = `After sort (ascending): ${numbers.join(', ')}`;
}

function sortDescending() {
    let numbers = document.getElementById('numbersInput').value.split(',').map(Number);
    numbers.sort((a, b) => b - a);
    document.getElementById('sortOutput').innerText = `After sort (descending): ${numbers.join(', ')}`;
}

// Task 3: Applying Array Methods
function mapArray() {
    let nums = document.getElementById('numsInput').value.split(',').map(Number);
    let doubled = nums.map(num => num * 2);
    document.getElementById('methodsOutput').innerText = `After map (doubled): ${doubled.join(', ')}`;
}

function filterArray() {
    let nums = document.getElementById('numsInput').value.split(',').map(Number);
    let oddNumbers = nums.filter(num => num % 2 !== 0);
    document.getElementById('methodsOutput').innerText = `After filter (odd numbers): ${oddNumbers.join(', ')}`;
}

function reduceArray() {
    let nums = document.getElementById('numsInput').value.split(',').map(Number);
    let sum = nums.reduce((acc, num) => acc + num, 0);
    document.getElementById('methodsOutput').innerText = `After reduce (sum): ${sum}`;
}
