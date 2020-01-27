document.addEventListener("DOMContentLoaded", function() {
  let nameEl = document.getElementById("name");
  let currentName = "Kofi";
  nameEl.innerHTML = currentName;

  let evolveBtn = document.getElementById("evolve");
  let currentBtn = "Evolve";
  evolveBtn.innerHTML = currentBtn;

  let currentStage = "Simple Spore";
  let clicks = 0;
  let evolutionStage = document.getElementById("evolution");
  evolutionStage.innerHTML = currentStage;
  let color = "black";

  // Add the initial stage of evolution to the span id="evolution"

  evolveBtn.addEventListener("click", function evolve(event) {
    clicks++;
    console.log(clicks);

    // When the number of clicks reaches 10, add a second stage of evolution to the DOM!

    if (clicks === 10) {
      currentStage = "evolved";
      color = "green";
    }
    evolutionStage.innerHTML = currentStage;

    if (clicks === 15) {
      currentName = "Evander";
      color = "red";
    }
    nameEl.innerHTML = currentName;

    if (clicks === 20) {
      currentBtn = "Submit";
      color = "yellow";
    }
    evolveBtn.innerHTML = currentBtn;
    evolutionStage.style.color = color;
    // You choose the name of each additional stage.
  });
});
