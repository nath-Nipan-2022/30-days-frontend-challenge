const navLinks = document.querySelectorAll("nav ul li a");

const linksMap = {
  "/index.html": "Home",
  "/destinations.html": "Destinations",
  "/report.html": "Report",
};

navLinks.forEach((link) => {
  linksMap[location.pathname] === link.innerText
    ? link.classList.add("active")
    : link.classList.remove("active");
});
