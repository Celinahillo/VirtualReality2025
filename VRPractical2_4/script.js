let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets = [];
let ufo = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

 for(let i = 0; i < 3; i++){
    let x = rnd(-20,20);
    let y = rnd(5,20);
    let z = rnd(-20,20);
    rocket = new Rocket(x,y,z);
    rockets.push( rocket );
  }

   for (let i=0; i< 3; i++){
    let x = rnd(-20, 20);
    let y = rnd(5, 20);
    let z = rnd(-20, 20);
    let ufo = new Ufo(x = i,y,z);

  }
  ufo = new Ufo(-5,5,0);
  rocket = new Rocket(0, 5, -10);

loop();
  
})

function loop(){
  ufo.spin();



  rocket.fly();

  window.requestAnimationFrame( loop );
}
