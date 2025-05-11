const circle = document.getElementById("circle");
const text = document.getElementById("text");
const startBtn = document.getElementById("startBtn");

const breatheInTime = 4000;
const holdTime = 4000;
const breatheOutTime = 4000;

function startBreathing() {
  startBtn.disabled = true;
  text.textContent = "Breathe In";
  circle.style.transform = "scale(1.5)";
  
  setTimeout(() => {
    text.textContent = "Hold";
    
    setTimeout(() => {
      text.textContent = "Breathe Out";
      circle.style.transform = "scale(1)";
      
      setTimeout(() => {
        // Repeat the cycle
        startBreathing();
      }, breatheOutTime);
    }, holdTime);
  }, breatheInTime);
}

startBtn.addEventListener("click", () => {
  startBreathing();
});
