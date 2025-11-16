class GingerbreadMan{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("height", 1.7);
    this.obj.setAttribute("rotation", "0 0 0");
    this.obj.setAttribute("material", "src:#man;");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}