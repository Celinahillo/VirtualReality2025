let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;
let dudes = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
   for (let i=0; i<20; i++){
    let x = rnd(-5, 20);
    let y = rnd(1, 1);
    let z = rnd(-5, -5);
    let d = new Dude(x, y, z);
    dudes.push(d);
  }
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for (let dude of dudes){
    dude.jump();
  }
  window.requestAnimationFrame( loop );
}