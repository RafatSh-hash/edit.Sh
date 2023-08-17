const textConverArea = document.getElementById("textArea2");
const convertButton = document.getElementById("convertButton");
const asciiElement = document.getElementById("ascii");
const morseElement = document.getElementById("morse");
const binaryElement = document.getElementById("binary");
const metasignalElement = document.getElementById("metasignal");
const cypherWavesElement = document.getElementById("cypherwave");
const quatumnElement = document.getElementById("quantumbits");

convertButton.addEventListener("click", function () {
  const inputText = textConverArea.value;
  console.log(inputText);

  // Convert to ASCII
  const asciiText = [...inputText].map((char) => char.charCodeAt(0)).join(" ");
  asciiElement.innerText = asciiText;

  // Convert to Morse code
  const morseText = convertToMorse(inputText);
  morseElement.innerText = morseText;

  // Convert to Binary
  const binaryText = inputText
    .split("")
    .map((char) => char.charCodeAt(0).toString(2))
    .join(" ");
  binaryElement.innerText = binaryText;

  // Convert to Metasignal
  const metasignalText = convertToMetasignal(inputText);
  metasignalElement.innerText = metasignalText;

  // Convert to CypherWave
  const cypherwaveText = convertToCypherWave(inputText);
  cypherWavesElement.innerText = cypherwaveText;

  // Convert to Quantumbits
  const quantumbitsText = convertToQuantumbits(inputText);
  quatumnElement.innerText = quantumbitsText;
});

function convertToMorse(text) {
  const morseCodeMap = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    " ": "/",
  };

  text = text.toUpperCase();
  const morseText = [...text]
    .map((char) => morseCodeMap[char] || char)
    .join(" ");
  return morseText;
}

function convertToMetasignal(text) {
  const metasignalMap = {
    A: "@",
    B: "8",
    C: "(",
    D: "|)",
    E: "3",
    F: "|=",
    G: "6",
    H: "#",
    I: "!",
    J: "_|",
    K: "|<",
    L: "1",
    M: "|\\/|",
    N: "|\\|",
    O: "0",
    P: "|2",
    Q: "0_",
    R: "|?",
    S: "$",
    T: "+",
    U: "|_|",
    V: "\\/",
    W: "\\/\\/",
    X: "><",
    Y: "`/",
    Z: "7_",
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    " ": " ",
  };

  text = text.toUpperCase();
  const metasignalText = [...text]
    .map((char) => metasignalMap[char] || char)
    .join("");
  return metasignalText;
}

function convertToCypherWave(text) {
  const cypherWaveMap = {
    A: "@",
    B: "|3",
    C: "<(",
    D: "|)",
    E: "3",
    F: "|=",
    G: "6",
    H: "|-|",
    I: "!",
    J: "_|",
    K: "|<",
    L: "|_",
    M: "/\\/\\",
    N: "|\\|",
    O: "0",
    P: "|2",
    Q: "0_",
    R: "|?|",
    S: "$",
    T: "+",
    U: "|_|",
    V: "\\/",
    W: "\\/\\/",
    X: "><",
    Y: "`/",
    Z: "7_",
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    " ": " ",
  };

  text = text.toUpperCase();
  const cypherWaveText = [...text]
    .map((char) => cypherWaveMap[char] || char)
    .join("");
  return cypherWaveText;
}

function convertToQuantumbits(text) {
  const quantumbitsMap = {
    A: "00",
    B: "01",
    C: "10",
    D: "11",
    E: "000",
    F: "001",
    G: "010",
    H: "011",
    I: "100",
    J: "101",
    K: "110",
    L: "111",
    M: "0000",
    N: "0001",
    O: "0010",
    P: "0011",
    Q: "0100",
    R: "0101",
    S: "0110",
    T: "0111",
    U: "1000",
    V: "1001",
    W: "1010",
    X: "1011",
    Y: "1100",
    Z: "1101",
    0: "1110",
    1: "1111",
    " ": " ",
  };

  text = text.toUpperCase();
  const quantumbitsText = [...text]
    .map((char) => quantumbitsMap[char] || char)
    .join("");
  return quantumbitsText;
}
