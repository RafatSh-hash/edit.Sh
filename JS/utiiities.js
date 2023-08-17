const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Remove active class from all links
    links.forEach((link) => link.classList.remove("active"));

    // Add active class to the clicked link
    link.classList.add("active");

    event.preventDefault(); // Prevent the default link behavior
  });
});
