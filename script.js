// Morse Code Dictionary
const morseCodeMap = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----',
    ' ': '/'
};

const textToMorse = (text) => {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
};

const morseToText = (morse) => {
    const reversedMap = Object.fromEntries(Object.entries(morseCodeMap).map(([k, v]) => [v, k]));
    return morse.split(' ').map(code => reversedMap[code] || '').join('');
};

// Convert Text to Morse Code
function convertToMorse() {
    const textInput = document.getElementById('text-input').value;
    const result = textToMorse(textInput);
    document.getElementById('morse-result').textContent = `Output : ${result}`;
}

// Convert Morse Code to Text
function convertToText() {
    const morseInput = document.getElementById('morse-input').value;
    const result = morseToText(morseInput);
    document.getElementById('text-result').textContent = `Output : ${result}`;
}
