document.querySelector("#add").addEventListener("click", () => {
  let newBox = document.createElement("div");
  newBox.classList.add("box");
  const nameInput = document.querySelector("#name");
  newBox.innerText = nameInput.value;
  nameInput.value = "";
  if (newBox.innerText)
    document.body.querySelector(".roulette-display").append(newBox);
});

document.querySelector("#delete").addEventListener("click", () => {
  const boxes = document.querySelector(".roulette-display");
  boxes.lastChild && boxes.removeChild(boxes.lastChild);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.querySelector("#launch").addEventListener("click", () => {
  document.querySelector(".box.chosen") &&
    document.querySelector(".box.chosen").classList.remove("chosen");
  const boxes = document.querySelectorAll(".box");
  boxes[getRandomInt(boxes.length)].classList.add("chosen");
});

const colorInput = document.body.querySelector(".header input");
colorInput.value = getComputedStyle(document.documentElement)
  .getPropertyValue("--color")
  .trim();
colorInput.addEventListener("input", () => {
  document.documentElement.style.setProperty("--color", colorInput.value);
});
