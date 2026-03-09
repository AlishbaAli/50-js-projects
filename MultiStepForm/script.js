document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".progress-container li");
  document.documentElement.style.setProperty("--steps", steps.length);
});
