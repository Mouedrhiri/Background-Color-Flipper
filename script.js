var bg = document.querySelector("#bg .bg-color");
var btn = document.getElementById("change");
var colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += colors[rand()];
  }
  bg.textContent = hex;
  document.body.style.backgroundColor = hex;
});
function rand() {
  return Math.floor(Math.random() * colors.length);
}
