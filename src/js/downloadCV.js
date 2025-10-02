export const downloadCV = () => {
  // Check if the download button exists (only on main portfolio page)
  const downloadBtn = document.getElementById("downloadBtn");
  if (!downloadBtn) return;

  // Base path for GitHub Pages
  const base = import.meta.env.BASE_URL; // automatically handles subpath

  // PDF file path
  const pdfPath = `${base}lazicki-cv-2025.pdf`;

  // Open PDF in a new tab
  downloadBtn.addEventListener("click", () => {
    window.open(pdfPath, "_blank");
  });
};
