// Contact modal: open/close + static (non-functional) form submit handling
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contact-modal");
  if (!modal) return;

  const openTriggers = document.querySelectorAll("[data-modal-open]");
  const closeTriggers = modal.querySelectorAll("[data-modal-close]");
  const form = document.getElementById("contact-form");

  const openModal = (event) => {
    event.preventDefault();
    modal.setAttribute("data-open", "true");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.setAttribute("data-open", "false");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  openTriggers.forEach((trigger) => trigger.addEventListener("click", openModal));
  closeTriggers.forEach((trigger) => trigger.addEventListener("click", closeModal));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.getAttribute("data-open") === "true") {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // Static UI only — no backend wired up yet.
      form.reset();
      closeModal();
    });
  }
});
