let scene;
let car;
let pokemonball;
let rocket;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  
  car = document.querySelector("#car");
  car.a = 0;
  car.da = 1;

  pokemonball = document.querySelector("#pokemonball");
  pokemonball.x = 0;
  pokemonball.px = 1;

  rocket = this.document.querySelector("#rocket");
  rocket.o = 0.01;
  rocket.ro = 0.01;

  loop();
})

function loop(){
  car.a += car.da;
  car.setAttribute("position",{x:car.a, y:0, z:0});
  window.requestAnimationFrame(loop);
}

function loop(){
  pokemonball.x += pokemonball.px;
  pokemonball.setAttribute("rotation",{x:pokemonball.x, y:0, z:0});
  window.requestAnimationFrame(loop);
}

function loop(){
  rocket.o += rocket.ro;
  rocket.setAttribute("position",{x:2, y:rocket.o, z:-4});
  window.requestAnimationFrame(loop);
}

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);