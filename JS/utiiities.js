// // script.js
// const navLinks = document.querySelectorAll(".link");

// navLinks.forEach((link) => {
//   link.addEventListener("click", (event) => {
//     navLinks.forEach((link) => link.classList.remove("active"));
//     event.target.classList.add("active");
//   });
// });
// const linkItems = document.querySelectorAll(".link-item");

// function toggleLinkActive(linkIndex) {
//   linkItems.forEach((item, index) => {
//     if (index + 1 === linkIndex) {
//       item.classList.toggle("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// }

// const linkItems = document.querySelectorAll(".link-item");
// const isActive = [true, false]; // Initially the first link is active

// function toggleLinkActive(linkIndex) {
//   isActive[linkIndex - 1] = !isActive[linkIndex - 1];

//   if (!isActive.includes(true)) {
//     isActive[linkIndex - 1] = true; // Ensure at least one link is active
//   }

//   linkItems.forEach((item, index) => {
//     if (isActive[index]) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// }

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
