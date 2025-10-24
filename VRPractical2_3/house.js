class House{
    constructor(x,y,z){
         this.obj = document.createElement("a-entity");
  
  let base = document.createElement("a-box");
  base.setAttribute("color","pink");
  base.setAttribute("position","0 1 0");
  base.setAttribute("height","5");
  base.setAttribute("weight","10");
  this.obj.append( base );

  let base2 = document.createElement("a-box");
  base2.setAttribute("color","pink");
  base2.setAttribute("position","1 1 0");
  base2.setAttribute("height","5");
  base2.setAttribute("weight","10");
  this.obj.append( base2 );

  let base3 = document.createElement("a-box");
  base3.setAttribute("color","pink");
  base3.setAttribute("position","2 1 0");
  base3.setAttribute("height","5");
  base3.setAttribute("weight","10");
  this.obj.append( base3 );

  let base4 = document.createElement("a-box");
  base4.setAttribute("color","pink");
  base4.setAttribute("position","3 1 0");
  base4.setAttribute("height","5");
  base4.setAttribute("weight","10");
  this.obj.append( base4 );

  let roof = document.createElement("a-cone");
  roof.setAttribute("color","black");
  roof.setAttribute("position","0.2 4.3 0");
  roof.setAttribute("height","2");
  roof.setAttribute("height","2");
  this.obj.append( roof );

  let roof2 = document.createElement("a-cone");
  roof2.setAttribute("color","black");
  roof2.setAttribute("position","2.9 4.3 0");
  roof2.setAttribute("height","2");
  roof2.setAttribute("height","2");
  this.obj.append( roof2 );

let roof3 = document.createElement("a-cone");
  roof3.setAttribute("color","black");
  roof3.setAttribute("position","1.6 4.3 0");
  roof3.setAttribute("height","2");
  roof3.setAttribute("height","2");
  this.obj.append( roof3 );

  let window = document.createElement("a-box");
  window.setAttribute("color","yellow");
  window.setAttribute("position","0.4 2.5 0.1");
  window.setAttribute("height","1");
  window.setAttribute("weight","1");
  this.obj.append( window );

  let window2 = document.createElement("a-box");
  window2.setAttribute("color","yellow");
  window2.setAttribute("position","2.7 2.5 0.1");
  window2.setAttribute("height","1");
  window2.setAttribute("weight","1");
  this.obj.append( window2 );

  let door = document.createElement("a-box");
  door.setAttribute("color","black");
  door.setAttribute("position","1.6 0.6 0.1");
  door.setAttribute("height","1.7");
  door.setAttribute("weight","1");
  this.obj.append( door );

  this.obj.setAttribute("position",{x:x, y:y, z:z});
  scene.append( this.obj )
}
}