document.addEventListener("keydown", function (event) {
  console.log(event);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
function moveDodgerRight() {
  const rightNumbers = dodger.style.right.replace("px", "");
  const right = parseInt(rightNumbers, 179);

  if (right > 0) {
    dodger.style.right = '${right - 1}px';
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
})