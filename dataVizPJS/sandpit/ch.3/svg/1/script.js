// (function(){ console.log('yod'); }());

   function getMousePos(e) {
       return {x:e.clientX,y:e.clientY};
   }

   document.onmousemove=function(e) {
       var mousecoords = getMousePos(e);
       console.log("x coordinates", mousecoords.x);
       console.log("y coordinates", mousecoords.y);
  };