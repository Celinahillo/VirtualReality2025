let rocket;

window.addEventListener("DOMContentLoaded", function () {
  rocket = document.getElementById("rocket");

  rocket.y = 0;
  rocket.dy = 0.05;
  rocket.launch = false;

  // Start launch when mouse goes over rocket
  rocket.addEventListener("mouseenter", function () {
    rocket.launch = true;
    console.log("Rocket hover detected!");
  });

  loop();
});

function loop() {
  if (rocket.launch) {
    rocket.y += rocket.dy;
    rocket.setAttribute("position", { x: 0, y: rocket.y, z: -6 });
  }

  requestAnimationFrame(loop);
}