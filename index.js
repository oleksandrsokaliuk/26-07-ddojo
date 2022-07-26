const image = document.createElement("img");
image.src = "./pngwing.png";
const imageClass = document.querySelector(".another-class");
imageClass.appendChild(image);
image.style.width = "200px";

image.style.position = "absolute";

let timeOrigin = 0;

const timerNumber = document.querySelector("#timerSpec");
const backGround = document.querySelector(".timer");

image.addEventListener("click", function () {
  clearInterval(timerId);
});

const timerId = setInterval(function () {
  image.style.left = Math.random() * 100 + "%";
  image.style.top = Math.random() * 100 + "%";
  timeOrigin++;
  if (timeOrigin > 20 && timeOrigin < 30) {
    backGround.classList.add("averageTime");
  } else if (timeOrigin > 30 && timeOrigin < 40) {
    backGround.classList.remove("averageTime");
    backGround.classList.add("badTime");
  } else if (timeOrigin > 40 && timeOrigin < 60) {
    backGround.classList.remove("badTime");
    backGround.classList.add("losingTime");
  } else if (timeOrigin > 60) {
    alert("You loose!");
    document.location.reload();
    timeOrigin = 0;
    backGround.classList.remove("losingTime");
  }
  timerNumber.innerHTML = `${timeOrigin}`;
}, 200);
