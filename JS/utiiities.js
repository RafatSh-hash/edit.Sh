const linkItems = document.querySelectorAll(".link-item");
const container = document.querySelector(".container");

function setActiveLink(activeIndex) {
  localStorage.setItem("activeLink", activeIndex);
}

// Check local storage for active link and apply style
const activeLinkIndex = localStorage.getItem("activeLink");
if (activeLinkIndex !== null) {
  linkItems.forEach((item, index) => {
    if (index + 1 === parseInt(activeLinkIndex)) {
      item.classList.add("active");
    }
  });
}

// LoremTextGenerator

document.addEventListener("DOMContentLoaded", function () {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const loremTextArea = document.getElementById("textArea2");

  loremTextArea.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const input = loremTextArea.value.trim();
      const match = input.match(/^lorem(\d+)$/);

      if (match) {
        const numberOfWords = parseInt(match[1]);
        if (!isNaN(numberOfWords) && numberOfWords > 0) {
          const generatedLorem = generateLorem(numberOfWords);
          loremTextArea.value = generatedLorem;
        }
      }
    }
  });

  function generateLorem(wordCount) {
    const words = loremText.split(" ");
    const selectedWords = words.slice(0, wordCount);
    console.log(selectedWords);
    return selectedWords.join(" ");
  }
});
