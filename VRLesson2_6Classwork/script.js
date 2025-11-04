let scene;
let mech;
let mechs = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
 
  for(i=0; i< 10; i++){
    let x = rnd(-20, 20);
    let y = rnd(-20, 20);
    let z = rnd(-20, 20);

    let  mech = new mechs(x, y, z);

    mechs.push(mech);
  }

  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
