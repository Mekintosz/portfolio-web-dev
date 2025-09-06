const navLinks = document.querySelectorAll(".nav__item a");
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".nav__list");
const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");

export const navOpperations = () => {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
    cross.classList.toggle("active");
  });

  const activePage = () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    navbar.classList.remove("active");
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!link.classList.contains("active")) {
        activePage();
        link.classList.add("active");
      }
    });
  });
};
