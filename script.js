const container = document.querySelector(".flexContainer");
const resizeButton = document.querySelector("#resizeButton");

resizeButton.addEventListener("click", () => {
  const input = prompt("How many squares per side? (1-100)");
  if (input === null) return;
  const size = Number(input);

  if (!Number.isInteger(size) || size < 1 || size > 100) {
    alert("Please enter an integer between 1 and 100.");
    return;
  }
  container.replaceChildren();

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");

    box.style.width = `${100 / size}%`;
    box.style.aspectRatio = "1 / 1";

    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = "coral";
    });
    box.addEventListener("mouseleave", () => {
      box.style.backgroundColor = "green";
    });

    container.appendChild(box);
  }
});
// function draw() {
//   ctx.clearRect(0, 0, WIDTH, HEIGHT);
//   for (let i = 0; i < 1000; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = "rgb(255 0 0 / 50%)";
//     ctx.arc(random(WIDTH), random(HEIGHT), 50, 0, 2 * Math.PI);
//     ctx.fill();
//   }
// }
