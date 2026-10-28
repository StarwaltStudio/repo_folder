const container = document.querySelector(".flexContainer");

for (let i = 0; i < 256; i++) {
  const box = document.createElement("div");
  container.appendChild(box);
  box.addEventListener("mouseenter", (event) => {
    box.style.backgroundColor = "coral";
  });
  box.addEventListener("mouseleave", (event) => {
    box.style.backgroundColor = "green";
  });
}
// function draw() {
//   ctx.clearRect(0, 0, WIDTH, HEIGHT);
//   for (let i = 0; i < 1000; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = "rgb(255 0 0 / 50%)";
//     ctx.arc(random(WIDTH), random(HEIGHT), 50, 0, 2 * Math.PI);
//     ctx.fill();
//   }
// }
