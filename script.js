for (let index = 1; index <= 24; index++) {
  let newBox = document.createElement("div");
  newBox.classList.add("box");
  newBox.innerText = index;
  let today = new Date();
  let boxDate = new Date("2022-12-" + index);
  if (today >= boxDate) newBox.classList.add("past");
  document.body.querySelector(".calendar").append(newBox);
}

let colorInput = document.body.querySelector(".header input");
colorInput.value = getComputedStyle(document.documentElement)
  .getPropertyValue("--color")
  .trim();
colorInput.addEventListener("input", () => {
  document.documentElement.style.setProperty("--color", colorInput.value);
});

// Set the date we're counting down to
var countDownDate = new Date("2022-12-24").getTime();
var startDate = new Date("2022-12-01").getTime();
var totalDistance = countDownDate - startDate;

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  days = String(days).padStart(2, "0");
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours = String(hours).padStart(2, "0");
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  minutes = String(minutes).padStart(2, "0");
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  seconds = String(seconds).padStart(2, "0");

  // Output the result in an element with id="time"
  document.getElementById("time").innerHTML =
    days + " : " + hours + " : " + minutes + " : " + seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "IT IS CHRISTMAS !";
  }
}, 1000);

var y = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  let progressbar = document.body.querySelector(".progressbar");
  let progress = Math.round((1 - distance / totalDistance) * 10000) / 100;
  if (progress > 100) {
    clearInterval(y);
    progress = 100;
  }
  progressbar.style.width = progress + "%";
}, 1000);
