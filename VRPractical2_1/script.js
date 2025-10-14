let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 50; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }

  for(let i = 0; i < 50; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createCloud(x,4,z);
  }

   for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createHouse(x,4,z);
  }

   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
   createCloud(0,10,-8);

   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
   createHouse(0,0,-8);
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x, y, z){
  let cloud = document.createElement("a-entity");
  
  let sphere1 = document.createElement("a-sphere");
  sphere1.setAttribute("color","white");
  sphere1.setAttribute("position","0 2 0");
  sphere1.setAttribute("height","2");
  cloud.append( sphere1 );

  let sphere2 = document.createElement("a-sphere");
  sphere2.setAttribute("color","white");
  sphere2.setAttribute("position","1 2.5 0");
  sphere2.setAttribute("height","2");
  cloud.append( sphere2 );

  let sphere3 = document.createElement("a-sphere");
  sphere3.setAttribute("color","white");
  sphere3.setAttribute("position","2 2 0");
  sphere3.setAttribute("height","2");
  cloud.append( sphere3 );

  cloud.setAttribute("position",{x:x, y:y, z:z});
  scene.append( cloud )
}


/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x, y, z){
  let house = document.createElement("a-entity");
  
  let base = document.createElement("a-box");
  base.setAttribute("color","pink");
  base.setAttribute("position","0 1 0");
  base.setAttribute("height","5");
  base.setAttribute("weight","10");
  house.append( base );

  let base2 = document.createElement("a-box");
  base2.setAttribute("color","pink");
  base2.setAttribute("position","1 1 0");
  base2.setAttribute("height","5");
  base2.setAttribute("weight","10");
  house.append( base2 );

  let base3 = document.createElement("a-box");
  base3.setAttribute("color","pink");
  base3.setAttribute("position","2 1 0");
  base3.setAttribute("height","5");
  base3.setAttribute("weight","10");
  house.append( base3 );

  let base4 = document.createElement("a-box");
  base4.setAttribute("color","pink");
  base4.setAttribute("position","3 1 0");
  base4.setAttribute("height","5");
  base4.setAttribute("weight","10");
  house.append( base4 );

  let roof = document.createElement("a-cone");
  roof.setAttribute("color","black");
  roof.setAttribute("position","0.2 4.3 0");
  roof.setAttribute("height","2");
  roof.setAttribute("height","2");
  house.append( roof );

  let roof2 = document.createElement("a-cone");
  roof2.setAttribute("color","black");
  roof2.setAttribute("position","2.9 4.3 0");
  roof2.setAttribute("height","2");
  roof2.setAttribute("height","2");
  house.append( roof2 );

let roof3 = document.createElement("a-cone");
  roof3.setAttribute("color","black");
  roof3.setAttribute("position","1.6 4.3 0");
  roof3.setAttribute("height","2");
  roof3.setAttribute("height","2");
  house.append( roof3 );

  let window = document.createElement("a-box");
  window.setAttribute("color","yellow");
  window.setAttribute("position","0.4 2.5 0.1");
  window.setAttribute("height","1");
  window.setAttribute("weight","1");
  house.append( window );

  let window2 = document.createElement("a-box");
  window2.setAttribute("color","yellow");
  window2.setAttribute("position","2.7 2.5 0.1");
  window2.setAttribute("height","1");
  window2.setAttribute("weight","1");
  house.append( window2 );

  let door = document.createElement("a-box");
  door.setAttribute("color","black");
  door.setAttribute("position","1.6 0.6 0.1");
  door.setAttribute("height","1.7");
  door.setAttribute("weight","1");
  house.append( door );

  house.setAttribute("position",{x:x, y:y, z:z});
  scene.append( house )
}


function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



