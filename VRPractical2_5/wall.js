class Wall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","white");
    this.obj.setAttribute("height", 2);
    this.obj.setAttribute("rotation", "0 10 0");
    this.obj.setAttribute("material", "src:#wall; repeat: 1 3");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}