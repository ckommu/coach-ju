// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");

  if (!nav || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
