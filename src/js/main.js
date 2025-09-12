const navLinks = document.querySelectorAll(".nav__item a");
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".nav__list");
const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const sections = document.querySelectorAll("section[id]");

export const navOpperations = () => {
  const closeOpenNavbar = () => {
    if (window.innerWidth < 768) {
      const isActive = navbar.classList.toggle("active");

      hamburger.classList.toggle("active", !isActive);
      cross.classList.toggle("active", isActive);
    }
  };

  const deactivateLinks = () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    closeOpenNavbar();
  };

  menuToggle.addEventListener("click", () => {
    closeOpenNavbar();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!link.classList.contains("active")) {
        deactivateLinks();
        link.classList.add("active");
      }
    });
  });
};
