for (let index = 1; index <= 24; index++) {
  let newBox = document.createElement("div");
  newBox.classList.add("box");
  newBox.innerText = index;
  let today = new Date();
  let boxDate = new Date("2022-12-" + index);
  if (today >= boxDate) newBox.classList.add("past");
  document.body.querySelector(".container").append(newBox);
}

let colorInput = document.body.querySelector(".header input");
colorInput.value = getComputedStyle(document.documentElement).getPropertyValue(
  "--color"
);
colorInput.addEventListener("input", () => {
  document.documentElement.style.setProperty("--color", colorInput.value);
});
