class Rocket{
  constructor(x,y,z){
  this.obj = document.createElement("a-entity");
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = 0.1;

    let tip = document.createElement("a-cone");
    tip.setAttribute("color","red");
    tip.setAttribute("position","0 3 -2");
    tip.setAttribute("height","5");
    this.obj.append( tip );
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("position","0 -1.5 -2");
    body.setAttribute("color","white");
    body.setAttribute("radius","1");
    body.setAttribute("height","4");
    this.obj.append( body );

    let tipR = document.createElement("a-cone");
    tipR.setAttribute("color","red");
    tipR.setAttribute("position","1.8 1 -2");
    tipR.setAttribute("height","4");
    this.obj.append( tipR );

    let bodyR = document.createElement("a-cylinder");
    bodyR.setAttribute("position","1.8 -3 -2");
    bodyR.setAttribute("color","white");
    bodyR.setAttribute("radius","1");
    bodyR.setAttribute("height","4");
    this.obj.append( bodyR );

    let tipL = document.createElement("a-cone");
    tipL.setAttribute("color","red");
    tipL.setAttribute("position","-1.8 1 -2");
    tipL.setAttribute("height","4");
    this.obj.append( tipL );

    let bodyL = document.createElement("a-cylinder");
    bodyL.setAttribute("position","-1.8 -3 -2");
    bodyL.setAttribute("color","white");
    bodyL.setAttribute("radius","1");
    bodyL.setAttribute("height","4");
    this.obj.append( bodyL );
  
    let window = document.createElement("a-sphere");
    window.setAttribute("position","0 -1 -1.3");
    window.setAttribute("color","black");
    window.setAttribute("radius","0.8");
    this.obj.append( window );

    let button = document.createElement("a-sphere");
    button.setAttribute("position","0 -2.5 -1");
    button.setAttribute("color","black");
    button.setAttribute("radius","0.30");
    this.obj.append( button );

    let fire = document.createElement("a-cone");
    fire.setAttribute("color","orange");
    fire.setAttribute("position","0 -5 -2");
    fire.setAttribute("height","5");
    fire.setAttribute("rotation","-180 0 0");
    fire.setAttribute("radius","0.25");
    this.obj.append( fire );

    let fireR = document.createElement("a-cone");
    fireR.setAttribute("color","Orange");
    fireR.setAttribute("position","1.8 -6 -2");
    fireR.setAttribute("height","4");
    fireR.setAttribute("rotation","-180 0 0");
    fireR.setAttribute("radius","0.25");
    this.obj.append( fireR );

    let fireL = document.createElement("a-cone");
    fireL.setAttribute("color","Orange");
    fireL.setAttribute("position","-1.8 -6 -2");
    fireL.setAttribute("height","4");
    fireL.setAttribute("rotation","-180 0 0");
    fireL.setAttribute("radius","0.25");
    this.obj.append( fireL );



    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
  scale(size){
    this.obj.setAttribute("scale",{x:size,y:size,z:size});
  }

fly(){
    this.x += this.dx;
    this.obj.setAttribute("position", {x: this.x, y: this.x, z:this.z});
  }

}