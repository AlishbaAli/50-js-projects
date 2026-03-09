const form = document.querySelector(".form-wizard");
const progress = form.querySelector(".progress");
const stepsContainer = form.querySelector(".steps-container");
const steps = form.querySelectorAll(".step");
const stepIndicators = form.querySelectorAll(".progress-container li");
const prevButton = form.querySelector(".prev-btn");
const nextButton = form.querySelector(".next-btn");
const submitButton = form.querySelector(".submit-btn");

document.documentElement.style.setProperty("--steps", stepIndicators.length);
let currentStep = 0;

const updateProgress = () => {
  let width = currentStep / (stepIndicators.length - 1);
  progress.style.transform = `scaleX(${width})`;
  stepsContainer.style.height = steps[currentStep].offdetHeight + "px";
  stepIndicators.forEach((stepIndicators, index) => {
    stepIndicators.classList.toggle("current", currentStep === index);
    stepIndicators.classList.toggle("done", currentStep > index);
  });

  steps.forEach((step, index) => {
    step.style.transform = `translateX(-${currentStep * 100}%)`;
    step.classList.toggle("current", currentStep === index);
  });
  updateButtons();
};
const updateButtons = () => {
  prevButton.hidden = currentStep === 0;
  nextButton.hidden = currentStep >= stepIndicators.length - 1;
  submitButton.hidden = !nextButton.hidden;
};
prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentStep > 0) {
    currentStep--;
    updateProgress();
  }
});

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentStep < stepIndicators.length - 1) {
    currentStep++;
    updateProgress();
  }
});

updateProgress();
