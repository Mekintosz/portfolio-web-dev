const navLinks = document.querySelectorAll(".nav__item a");
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".nav__list");
const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const sections = document.querySelectorAll("section[id]");
const navbarHeight = navbar.offsetHeight;

export const navOperations = () => {
  // Toggle mobile navbar open/close
  const toggleNavbar = (forceClose = false) => {
    if (window.innerWidth < 768) {
      let isActive;
      if (forceClose) {
        navbar.classList.remove("active");
        isActive = false;
      } else {
        isActive = navbar.classList.toggle("active");
      }

      hamburger.classList.toggle("active", !isActive);
      cross.classList.toggle("active", isActive);
      menuToggle.setAttribute("aria-expanded", isActive);
    }
  };

  // Clear active state from nav links
  const clearActiveLinks = () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  };

  // Highlight link based on scroll possition
  const highlightOnScroll = () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop =
        section.offsetTop - window.innerHeight / 8 - navbarHeight - 10;
      if (window.scrollY >= sectionTop) {
        current = section.id;
      }
    });

    clearActiveLinks();

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  //Scroll to section with 1/3 viewport offset
  const scrollToSection = (section) => {
    const targetScroll =
      section.offsetTop - window.innerHeight / 8 - navbarHeight;

    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  // Event: toggle menu on hamburger/cross click
  menuToggle.addEventListener("click", () => {
    toggleNavbar();
  });

  // Event: nav link click
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default anchor jump

      const targetId = link.getAttribute("href").slice(1);
      const section = document.getElementById(targetId);

      scrollToSection(section);
      toggleNavbar(true);
    });
  });

  window.addEventListener("scroll", highlightOnScroll);

  // Reset nav state on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navbar.classList.remove("active");
      hamburger.classList.add("active");
      cross.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", false);
    }
  });

  // Initial highlight
  highlightOnScroll();
};
