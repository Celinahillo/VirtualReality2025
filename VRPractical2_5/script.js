/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "wwwwwwwwwwwwwwwwwwwwwwww",
  "wm-w-----------oww-mwwww",
  "w--w-----------www--wwww",
  "w--w--www--ww--ww-----ow",
  "w-----ww--mww--w-------w",
  "wo-----wwwwww--w--www--w",
  "swwww-------w--w--www--wwwwwwwwwww",
  "wwww---------www--www------------w",
  "cw----w--ww-------www----w--ww---ow",
  "w----ww--o-w----owwww--ww--www---w",
  "w--wwwwwwwwwwwwwwwwww--ww-o-ww-mww--------c---",
  "---w---------o---------wwwwwwwwwww------------",
  "--w--w----------------ww---mw-------------s---",
  "www--w--wwwwwwwwwwwwwwww--www-------------s---",
  "w----w--------------owww---ww--www------------",
  "wo---w----------------www--ww--w----------c---",
  "w-w--w-owwwwwwwwwwww--ww-------w",
  "ww--wwwwwwwwwwwwwwww--www--wwwww",
  "ww--w-----------------www--w--ww",
  "w------wo------------oww--ww--ww",
  "w--w---wwwwwwwwwwwwwwwww--ww--ww",
  "w---w--w---------------w-------w",
  "w---w--w--------------mw-------w",
  "w---w--w--www--wwwwwwwwwwwwww--w",
  "wo--w--w---------o-------------w",
  "ww--wmmwo----------------------w",
  "ww--wwwwwwwwwwwwwwwww--wwwwwwwww",
  "ww--w--------------mw--w",
  "w--w---------------mw--w",
  "w--w--www--wwwwwwwwww--w",
  "ww-------------o-------w",
  "wwo-------------------ow",
  "wwwwwwwwwwwwwwwwwwwwwwww",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
    


    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
   if(cols[c] == "w"){
        new Wall(c,1,r)
      }
      else if(cols[c] == "c"){
        new CandyCane(c,1,r);
      }else if(cols[c]=="s"){
        new Santa(c,1,r)
      }
      else if(cols[c]=="o"){
        new Ornament(c,1,r)
      }else if(cols[c]=="m"){
        new GingerbreadMan(c,1,r)
      }

      
  }
  }
}

})
