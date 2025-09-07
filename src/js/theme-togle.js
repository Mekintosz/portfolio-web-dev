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
      let currentTheme = body.getAttribute("data-theme") || "light";
      let newTheme = currentTheme === "light" ? "dark" : "light";

      sun.classList.toggle("active");
      moon.classList.toggle("active");
      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  });
};
