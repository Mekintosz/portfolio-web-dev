const navLinks = document.querySelectorAll(".nav__item a");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".nav__list");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

const activePage = () => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  menuIcon.classList.remove("bx-x");
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
