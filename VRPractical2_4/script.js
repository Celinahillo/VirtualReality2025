let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets = [];
let ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

 for(let i = 0; i < 50; i++){
    let x = rnd(-20,20);
    let y = rnd(5,20);
    let z = rnd(-20,20);
    let rocket = new Rocket(x,y,z);
    rockets.push( rocket );
  }

   for(let i = 0; i < 50; i++){
    let x = rnd(-20,20);
    let y = rnd(5,20);
    let z = rnd(-20,20);
    let ufo = new Ufo(x,y=i,z);
    ufos.push( ufo );
  }
  

  loop();

})

function loop(){
 for(let rocket of rockets){

    rocket.fly();
 }
 for(let ufo of ufos){
    ufo.fly();
    ufo.spin();
 }
  window.requestAnimationFrame( loop );
}
