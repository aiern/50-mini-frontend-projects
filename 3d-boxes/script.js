const boxesContainer = document.getElementById("boxes");
const button = document.getElementById("btn");

button.addEventListener("click", () => boxesContainer.classList.toggle("big"));

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      // console.log(-i*125, -j*125);
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;

      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();
