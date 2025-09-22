export const downloadCV = () => {
  // Base path for GitHub Pages
  const base = import.meta.env.BASE_URL; // automatically handles subpath

  // PDF file path
  const pdfPath = `${base}M. Łazicki Cv.pdf`;

  // Open PDF in a new tab
  document.getElementById("downloadBtn").addEventListener("click", () => {
    window.open(pdfPath, "_blank");
  });
};
