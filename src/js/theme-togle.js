export const toggleSetup = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector("#theme-toggle");
    const body = document.body;
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.setAttribute("data-theme", savedTheme);
    } else {
      body.setAttribute("data-theme", "dark");
    }

    toggleBtn.addEventListener("click", () => {
      const projects = document.querySelectorAll(".project");
      let currentTheme = body.getAttribute("data-theme") || "dark";
      let newTheme = currentTheme === "light" ? "dark" : "light";

      sun.classList.toggle("active");
      moon.classList.toggle("active");
      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      projects.forEach((project) => {
        const img = project.querySelector("img.theme-img");

        // Get the corresponding dark/light src from data attributes
        const darkSrc = project.dataset.dark;
        const lightSrc = project.dataset.light;
        const newSrc = newTheme === "dark" ? darkSrc : lightSrc;

        // Fade out
        img.classList.add("fade-out");

        // After fade out, change src and fade back in
        img.addEventListener("transitionend", function handler() {
          img.src = newSrc;
          img.classList.remove("fade-out");
          img.removeEventListener("transitionend", handler);
        });
      });
    });
  });
};
