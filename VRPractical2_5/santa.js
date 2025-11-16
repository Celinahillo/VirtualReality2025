class Santa{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    // body
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("color","white");
    this.obj.setAttribute("radius", 2);
     this.obj.setAttribute("rotation", "0 -80 0");
    this.obj.setAttribute("material", "src:#shirt;");
    this.obj.setAttribute("position","-7 2 0");
    scene.append(this.obj);
     
    // head
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("color","white");
    this.obj.setAttribute("radius", 1);
    this.obj.setAttribute("rotation", "0 10 0");
    this.obj.setAttribute("material", "src:#cry; repeat: 2 1");
     this.obj.setAttribute("position","-7 5 0");
    scene.append(this.obj);

     this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("color","white");
    this.obj.setAttribute("radius", 1.2);
    this.obj.setAttribute("height", 0.4);
     this.obj.setAttribute("position","-7 6 0");
    scene.append(this.obj);

    this.obj = document.createElement("a-cone");
    this.obj.setAttribute("color","red");
    this.obj.setAttribute("radius", 2);
     this.obj.setAttribute("position","-7 7 0");
    scene.append(this.obj);

    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("color","white");
    this.obj.setAttribute("radius", 0.3);
     this.obj.setAttribute("position","-7 7.5 0");
    scene.append(this.obj);
  }
}