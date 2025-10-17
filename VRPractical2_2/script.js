let scene;
let car;
let pokemonball;
let rocket;
let dude;
let sun;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  
  car = document.querySelector("#car");
  car.a = -0.01;
  car.da = -0.01;
  carAnimation();

  pokemonball = document.querySelector("#pokemonball");
  pokemonball.x = 0;
  pokemonball.px = 1;
  rotatePokemonball();

  rocket = document.querySelector("#rocket");
  rocket.o = 0.01;
  rocket.ro = 0.01;

  loop();

  dude = document.querySelector("#dude");
  dude.y = 1;
  dude.dy= 0.005;
  dudeGrow();

  sun = document.querySelector("#sun");
  sun.s = 0;
  sun.ds= 0.005;
  sunFade();
})

function carAnimation(){
  car.a += car.da;
  car.setAttribute("position",{x:car.a, y:0, z:-5});
  window.requestAnimationFrame(carAnimation);
}

function loop(){
  rocket.o += rocket.ro;
  rocket.setAttribute("position",{x:2, y:rocket.o, z:-4});
  window.requestAnimationFrame(loop);
}
function rotatePokemonball(){
  pokemonball.x += pokemonball.px;
  pokemonball.setAttribute("rotation",{x:pokemonball.x, y:0, z:0});
  window.requestAnimationFrame(rotatePokemonball);
}

function dudeGrow(){
  dude.y += dude.dy;
  dude.setAttribute("scale",{x:dude.y, y:dude.y, z:dude.y});
  window.requestAnimationFrame(dudeGrow);
}

function sunFade(){
  sun.s += sun.ds;
  sun.setAttribute("opacity",sun.s);
  window.requestAnimationFrame(sunFade);
}

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);