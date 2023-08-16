const boldButton = document.getElementById("boldButton");
const italicButton = document.getElementById("italicButton");
const centerButton = document.getElementById("centerButton");
const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");
const justifyButton = document.getElementById("justifyButton");
const colorButton = document.getElementById("colorButton");
const colorPicker = document.getElementById("colorPicker");
const textArea = document.getElementById("textArea");

boldButton.addEventListener("click", function () {
  if (textArea.style.fontWeight === "bold") {
    textArea.style.fontWeight = "normal";
  } else {
    textArea.style.fontWeight = "bold";
  }
});

italicButton.addEventListener("click", function () {
  if (textArea.style.fontStyle === "italic") {
    textArea.style.fontStyle = "normal";
  } else {
    textArea.style.fontStyle = "italic";
  }
});

centerButton.addEventListener("click", function () {
  textArea.style.textAlign = "center";
});

rightButton.addEventListener("click", function () {
  textArea.style.textAlign = "right";
});

leftButton.addEventListener("click", function () {
  textArea.style.textAlign = "left";
});

justifyButton.addEventListener("click", function () {
  textArea.style.textAlign = "justify";
});

function setTextColor(selectedColor) {
  console.log(selectedColor);
  textArea.style.color = selectedColor;
}

document.getElementById("translateButton").addEventListener("click", () => {
  const inputText = document.getElementById("textArea").value;
  const targetLanguage = document.getElementById("targetLanguage").value;
  translateText(inputText, targetLanguage);
});

function translateText(text, targetLanguage) {
  fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=en|${targetLanguage}`
  )
    .then((response) => response.json())
    .then((data) => {
      const translatedText = data.responseData.translatedText;
      document.getElementById("textArea").value = translatedText;
    })
    .catch((error) => {
      console.error("Translation error:", error);
    });
}
