const navLinks = document.querySelectorAll("nav ul li a");

// const linksMap = {
//   "/index.html": "Home",
//   "/destinations.html": "Destinations",
//   "/report.html": "Report",
// };

navLinks.forEach((link) => {
  location.pathname.includes(link.innerText.toLowerCase())
    ? link.classList.add("active")
    : link.classList.remove("active");
});
