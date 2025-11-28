let rocket, ufo, tree;

window.addEventListener("DOMContentLoaded", function() {
  rocket = document.getElementById("rocket");

  rocket.y = 0.5;
  rocket.dy = 0.1;
  rocket.launch = false;

  rocket.addEventListener("mouseenter", function() {
    rocket.launch = true;
  });

  ufo = document.getElementById("ufo");
  ufo.y = 5;          // starting height
  ufo.dy = -0.1;      // speed falling down

  ufo.addEventListener("mouseenter", function() {
    ufo.hit = true;
  });
  ufo.addEventListener("mouseleave", function() {
    ufo.hit = false;
  });

  // ====== Tree Setup ======
tree = document.getElementById("tree");
tree.rotationZ = 0;      // initial rotation
tree.dr = 1;              // rotation speed
tree.fall = false;

tree.addEventListener("click", function() {
  tree.fall = true;
});


  loop();
});

function loop() {
  if(rocket.launch){
    rocket.y += rocket.dy;
    rocket.setAttribute("position", {x: 0, y: rocket.y, z: -3});
  }

   if (ufo.hit) {
    ufo.y += ufo.dy;
    ufo.setAttribute("position", {x: 2, y: ufo.y, z: -3});
  }

  if(tree.fall){
  tree.rotationZ += tree.dr;   // rotate the tree
  tree.setAttribute("rotation", {x:0, y:0, z: tree.rotationZ});
if(tree.rotationZ >= 90){
    tree.rotationZ = 90;
    tree.fall = false;
  }
    }
 
  window.requestAnimationFrame(loop);
}
