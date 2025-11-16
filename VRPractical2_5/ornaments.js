class Ornament{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("color","white");
    this.obj.setAttribute("radius", 0.7);
    this.obj.setAttribute("rotation", "80 50 0");
    this.obj.setAttribute("material", "src:#ornaments;");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}