document.addEventListener("DOMContentLoaded", () => {
  const secondHand = document.querySelector(".second");
  const minuteHand = document.querySelector(".minute");
  const hourHand = document.querySelector(".hour");
  const updateClock = () => {
    console.log(new Date().toLocaleTimeString());
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    const secondRatio = seconds / 60;
    secondHand.style.transform = `rotate(${secondRatio * 360}deg)`;

    const minuteRatio = (minutes * 60) / 3600;
    minuteHand.style.transform = `rotate(${minuteRatio * 360}deg)`;
    const hourRatio = ((hours % 12) * 60) / 720;

    hourHand.style.transform = `rotate(${hourRatio * 360} deg)`;
  };
  updateClock();
  setInterval(updateClock, 1000);
});
