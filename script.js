// Simple, dependency-free enhancements for the terms of service landing page.

// Keep the footer year current.
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

// Smooth scrolling for in-page navigation.
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const anchor = target.closest("a[href^='#']");
  if (!anchor) return;

  const href = anchor.getAttribute("href");
  if (!href || href === "#") return;

  const section = document.querySelector(href);
  if (!section) return;

  event.preventDefault();
  section.scrollIntoView({ behavior: "smooth", block: "start" });
});
