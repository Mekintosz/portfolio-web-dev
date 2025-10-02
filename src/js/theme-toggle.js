export const toggleSetup = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector("#theme-toggle");
    const body = document.body;
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    // === Vite: import all images from src/assets ===
    const modules = import.meta.glob("../assets/*.{png,jpg,jpeg,webp}", {
      eager: true,
      import: "default",
    });

    const imageMap = {};
    for (const path in modules) {
      const fileName = path.split("/").pop(); // e.g. "black-olives-dark.png"
      imageMap[fileName] = modules[path]; // hashed URL
    }

    // === Load saved theme or default to dark ===
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || "dark";
    body.setAttribute("data-theme", initialTheme);

    // === Set initial images based on theme ===
    // Handle images in .project containers
    document.querySelectorAll(".project").forEach((project) => {
      const img = project.querySelector("img.theme-img");
      const darkFile = project.dataset.dark;
      const lightFile = project.dataset.light;
      const src =
        initialTheme === "dark" ? imageMap[darkFile] : imageMap[lightFile];
      if (src) img.src = src;
    });

    // Handle standalone theme images (for project pages)
    document.querySelectorAll("img.theme-img").forEach((img) => {
      if (!img.closest(".project")) {
        const darkFile = img.dataset.dark?.split("/").pop();
        const lightFile = img.dataset.light?.split("/").pop();
        const src =
          initialTheme === "dark" ? imageMap[darkFile] : imageMap[lightFile];
        if (src) img.src = src;
      }
    });

    // === Handle toggle click ===
    toggleBtn.addEventListener("click", () => {
      const projects = document.querySelectorAll(".project");
      let currentTheme = body.getAttribute("data-theme") || "dark";
      let newTheme = currentTheme === "light" ? "dark" : "light";

      sun.classList.toggle("active");
      moon.classList.toggle("active");
      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      // Handle images in .project containers
      projects.forEach((project) => {
        const img = project.querySelector("img.theme-img");
        const darkFile = project.dataset.dark;
        const lightFile = project.dataset.light;
        const newSrc =
          newTheme === "dark" ? imageMap[darkFile] : imageMap[lightFile];

        if (!newSrc) return;

        // Fade out → swap → fade in
        img.classList.add("fade-out");

        img.addEventListener("transitionend", function handler(e) {
          if (e.propertyName !== "opacity") return;
          img.src = newSrc;
          img.classList.remove("fade-out");
          img.removeEventListener("transitionend", handler);
        });
      });

      // Handle standalone theme images (for project pages)
      document.querySelectorAll("img.theme-img").forEach((img) => {
        if (!img.closest(".project")) {
          const darkFile = img.dataset.dark?.split("/").pop();
          const lightFile = img.dataset.light?.split("/").pop();
          const newSrc =
            newTheme === "dark" ? imageMap[darkFile] : imageMap[lightFile];

          if (!newSrc) return;

          // Fade out → swap → fade in
          img.classList.add("fade-out");

          img.addEventListener("transitionend", function handler(e) {
            if (e.propertyName !== "opacity") return;
            img.src = newSrc;
            img.classList.remove("fade-out");
            img.removeEventListener("transitionend", handler);
          });
        }
      });
    });
  });
};
