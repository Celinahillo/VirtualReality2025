let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowmen = [ ];
let cloud = [];
let snowflake = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new tree(x, 0 , z);
    tree.scale(rnd(1,4));
  }
  
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let snowman = new snowman(x,z);
    snowmen.push(snowman);
  }

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let y = rnd(-20,20);
    let z = rnd(10,20);
    let cloud = new cloud(x,y,z);
    cloud.push(cloud);
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let y = rnd(-20,20);
    let z = rnd(10,20);
    let snowflake = new snowflake(x,y,z);
    snowflake.push(snowflake);
  }

  //Challenge 1: Create an array to store 20 clouds in random positions
  

  //Challenge 3: Create an array to store 100 snowflakes in random positions
  
  loop();
})

function loop(){
  for(let snowman of snowmen){
    snowman.spin();
  }

  //Challenge 2: Traverse your array of clouds and make each cloud fly
 for(let cloud of cloud){
    cloud.fly();
  }

  //Challenge 4: Traverse your array of snowflakes and make each snowflake fall
  for(let snowflake of snowflake){
    snowflake.fall();
  }

  window.requestAnimationFrame( loop );
}
