class CandyCane{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("height",7);
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("material", "src:#candycanes; repeat: 1 6");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("height",1.5);
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("position","0 5 6.5");
    this.obj.setAttribute("rotation","45 0 0");
    this.obj.setAttribute("material", "src:#candycanes;");
    scene.append(this.obj);

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("height",2);
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("position","0 5 7.5");
    this.obj.setAttribute("rotation","-45 0 0");
    this.obj.setAttribute("material", "src:#candycanes;");
    scene.append(this.obj);

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("height",1.5);
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("position","42 5 8.5");
    this.obj.setAttribute("rotation","45 0 0");
    this.obj.setAttribute("material", "src:#candycanes;");
    scene.append(this.obj);

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("height",2);
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("position","42 5 9.5");
    this.obj.setAttribute("rotation","-45 0 0");
    this.obj.setAttribute("material", "src:#candycanes;");
    scene.append(this.obj);

     this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("height",1.5);
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("position","42 5 16.5");
    this.obj.setAttribute("rotation","-45 0 0");
    this.obj.setAttribute("material", "src:#candycanes;");
    scene.append(this.obj);

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("height",2);
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("position","42 5 15.5");
    this.obj.setAttribute("rotation","45 0 0");
    this.obj.setAttribute("material", "src:#candycanes;");
    scene.append(this.obj);


  }
}