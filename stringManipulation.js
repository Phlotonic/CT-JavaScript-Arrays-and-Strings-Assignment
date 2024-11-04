// Task 1: Obtaining String Length
function getStringLength() {
    let message = document.getElementById('messageInput').value;
    document.getElementById('lengthOutput').innerText = `Length: ${message.length}`;
}

// Task 2: Converting Cases
function convertToUpperCase() {
    let text = document.getElementById('textInput').value;
    document.getElementById('caseOutput').innerText = `Uppercase: ${text.toUpperCase()}`;
}

function convertToLowerCase() {
    let text = document.getElementById('textInput').value;
    document.getElementById('caseOutput').innerText = `Lowercase: ${text.toLowerCase()}`;
}

// Task 3: Extracting Substrings
function extractSubstring() {
    let sentence = document.getElementById('sentenceInput').value;
    document.getElementById('substringOutput').innerText = `Substring (0, 9): ${sentence.substring(0, 9)}`;
}

// Task 4: Splitting Strings
function splitString() {
    let sentence = document.getElementById('sentence2Input').value;
    document.getElementById('splitOutput').innerText = `Split by space: ${sentence.split(' ').join(', ')}`;
}
