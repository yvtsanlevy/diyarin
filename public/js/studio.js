
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var image= document.getElementsByClassName("img");
var conteiner= document.getElementsByClassName("conteiner");

var beeds;
var neckles;

  function loadDoc() {
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
    
         if (this.readyState == 4 && this.status == 200) {
         
            beeds =JSON.parse(this.responseText);
            preload(beeds,beedImages);
        }
     };
     xhttp.open("GET", '/beed', true);
     xhttp.send(); 
 }
  function loadDoc2() {
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
    
         if (this.readyState == 4 && this.status == 200) {
         
           neckles =JSON.parse(this.responseText);
            
             
        }
     };
     xhttp.open("GET", '/neck', true);
     xhttp.send(); 
 }

loadDoc();
loadDoc2();

function creatNeckles(){
    for(var i=0;i<neckles.length;i++){
        for(var j=0;j<neckles[i].beeds.length;j++){
            for(var k=0;k<beeds.length;k++){
                if(beeds[k].src==neckles[i].beeds[j]){
                    var b = beeds[k];
                    var c =new beed(b.x,b.y,b.w,b.h,b.cy,(b.w)/2,b.src);
                    neckles[i].beeds[j]=c;
                }
            }
            
        }
    }
}
var hProportion;
var wProportion;
function studioHproportion(){
    var h =studioContainer.height();
    hProportion=h/600;
}
function studioWproportion(){
    var w =studioContainer.width();
    wProportion=w/600;
}

var popupNeckles= $(".popup-container-neckles");
var itemCard =$(".item-card");
var itemCardBeed =$(".beeds-pop");
var studioContainer=$(".studio-container");
var beedsContainer=$(".beeds-container");
var popup=$("#popup");


creatNeckles();
studioHproportion();
studioWproportion();
appendCard();

function appendCard(){
    itemCard.empty();
    creatNeckles();
    for(var i=0;i<neckles.length;i++){
      
        itemCard.append(`<img src ="image/neck/${neckles[i].src}" width=23% higth=25% onclick="clickNeck(${i})"<style padding=1.6%>/>`);
        // itemCard.css("padding","2rem"); 
    }
}
function appendBeedCard(){
   
    for(var i=0;i<beeds.length;i++){
        
      
        itemCardBeed.append(`<div id="beeds"><img src ="image/beeds/${beeds[i].src}" width=80%  onclick=""<style padding=1.6%>/>
        <h2> גודל: ${beeds[i].src}-".jpg"</h2>\
        <h2> סגנון: ${beeds[i].style}</h2>\
        <p><button onclick="changeBeed(${i},thisIndex,thisArray)">change bead</button></p>
        <p><button onclick="addBeedToNeck(${i},thisIndex,thisArray)">Add a bead</button></p></div>

        `);
        // itemCard.css("padding","2rem"); 
    }
}
// itemCard.click(`clickNeck(${neckles[i]})`);

function clickNeck(i){
clear();
itemCard.empty();
    creatNeckles();
    placeBeads(neckles[i].beeds);

}




function f(y, a) {return -(y * y / (a * 4))+350};

var a = 100;
var w=600;

function beed(x, y, w, h,cy,cx, src) {
  this.x = x;
  this.y = y;
  this.w = w; // default width and height?
  this.h = h;
  this.cy=cy;
  this.r=cx;
  // this.xC= x+w/2;
  // this.yC= y+h/2;
  this.src = src;
}

 function drawImage (array){

    
    for(var i = 0 ;i<array.length;i++){
        var img= new Image(array[i].w,array[i].h,array[i].x,array[i].y)
        var img = new Image();   // Create new img element
       
        img.width=1.15*array[i].w;
        img.height=1.15*array[i].h;
        img.src= array[i].src;
        img.i=i;
        img.cy=1.15*array[i].cy;
        img.cx=1.15*array[i].r;
        img.setAttribute("id", i+"")
        img.p=array;
        $(".beeds-container").append(img) ;
        img.style.position="absolute";
         img.style.left=array[i].x+2+"px";

        img.xc=1.15*array[i].xC;
        img.style.top=array[i].y+"px";
         img.style.transform="rotate("+degreToRotate(array,i)*180/Math.PI+"deg)";
         img.addEventListener('click',clickBeed, false);
          img.addEventListener('mouseover',
          function(){
              img.style.opacity="0.8"}
          , false);
          img.addEventListener('mouseout',
          function(){
              img.style.opacity="1"}
          , false);
}
    // window.addEventListener('mouseup', mouseUp, false);

}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}
function mouseDown(e){
    var div = this;
    let shiftX = event.clientX - div.getBoundingClientRect().left;
  let shiftY = event.clientY - div.getBoundingClientRect().top;
    div.style.position = 'absolute';
  div.style.zIndex = 1000;
  // conteiner.append(div);
    moveAt(event.pageX, event.pageY);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    div.style.left = pageX - shiftX + 'px';
    div.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (3) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (4) drop the ball, remove unneeded handlers
  div.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    div.onmouseup = null;
      for (var i=0;i<thisArray.length;i++){
        var b=new beed(div.x,div.y,div.width,div.height,div.cy,div.cx,div.src);
    if ((this.x>=thisArray[i].x&&this.x<=thisArray[i].x+thisArray[i].w))
        { if(div.i<i){
          var j=div.i;
          div.i=i;
          while(j<div.i){
            thisArray[j]=thisArray[j+1];
            j++;
          }
          thisArray[div.i]=b;
          clear();
          placeBeads(thisArray)
        }
        else if(div.i>i){
          var j=div.i;
          div.i=i;
          while(j>div.i){
            thisArray[j]=thisArray[j-1];
            j--;
          }
          thisArray[div.i+1]=b;
          clear();
          placeBeads(thisArray)
        }

       } 
  };
}
    div.ondragstart = function() {
  return false;
};
}

function clear(){
 beedsContainer.empty();
  
  }
  function centralBead(array){
    if (array.length%2==1){
      return array[(array.length-1)/2];
    }
    else console.log('the array length Should be odd');
    }
  
  function placeCentralBead(array){
  
    var c = centralBead(array);
    var y = f(300 - w * 0.5, a)-c.cy;
    var x = w/2 - c.r;
    c.r=c.w/2;
    c.x=x;
    c.y=y;
   return c;
      
  }
  
  function placeBeads (array){
      for(var j=1;j<array.length;j++){
          array[j].r=array[j].w/2;
      }
      var r = array.slice(array.length/2+1,array.length+1);
      var l = array.slice(0,array.length/2);
      l.reverse();
      placeR(r,array);
      placeL(l,array);
      l.reverse();
       l.push(placeCentralBead(array));
  
      var newArray=l.concat(r)
     
      drawImage(newArray);
      thisArray=newArray;
    }
  
  function placeR(array1,array2){
    var c = centralBead(array2);
    var x =300+ findeTriangle2(300,c.r) ;
    var xc1=x+findeTriangle2(x,array1[0].r);
    var y= f(xc1-600*0.5,a)-array1[0].cy;
    array1[0].x=x;
    array1[0].y=y;
    // drawshape(ctx, array1[0],array1[0].src);
        for (var i =1;i<array1.length;i++){
          index=i;
          item=array1[i];
      
           var xc= array1[i-1].x+array1[i-1].r;
             var lef;
          var rig;
          index=i;
          item=array1[i];
          lef=xc +findeTriangle2(array1[i-1].x+array1[i-1].r,array1[i-1].r);
          // rig=lef+findeTriangle2(lef,array1[i].r);
          x = lef-2;
          
           y= f(x+findeTriangle2(lef,array1[i].r)-w*0.5,a)-array1[i].cy
           array1[i].y=y;
           array1[i].x=x;
        }
  }
  
  function placeL(array,array2){
    var c = centralBead(array2);
    var x =300-findeTriangle2(300,c.r) ;
    var xc1=x-findeTriangle2(x,array[0].r);
    var y=  f(x-4-600*0.5,a)-array[0].cy;
    array[0].x=xc1-findeTriangle2(xc1,array[0].r);
    array[0].y=y;
    // drawshape(ctx, array[0],array[0].src);
        for (var i =1;i<array.length;i++){
          index=i;
          item=array[i];
           var lef;
          var rig;
  
          lef=array[i-1].x-findeTriangle2(array[i-1].x,array[i].r);
          // while(lef+findeTriangle3(lef,array[i].r)<array[i-1].x-2){
          //   lef+=0.001;
          // }
          rig=lef- findeTriangle2(lef,array[i].r);
          x = rig+2;
           y= f(lef-w*0.5,a)-array[i].cy
           array[i].y=y;
           array[i].x=x;
        }
    }
  
  function degreToRotate(array,i){
    var k = (array.length+1)/2;
    var int = 673/(600-2*array[i].x);
    if(i<k){
    return 90*Math.PI/180-Math.atan(int);}
    else {
      return -90*Math.PI/180-Math.atan(int);
    }
  }
    
    function degreToRotate2(x){
    // var k = (array.length+1)/2;
      var int = 673/(600-2*x);
      // if(i<k){
      return 90*Math.PI/180-Math.atan(int);}
    // else {
  
  function findeTriangle(array,i){
    var center =array[i].x;
    var sin=(degreToRotate(array,i)*180/Math.PI)
    // if(sin>0){
    return Math.cos(sin*Math.PI/180) *array[i].r;}
  
    function findeTriangle2(cen,r){
    var center =cen;
    var sin=(degreToRotate2(center)*180/Math.PI)
    if((sin>=-90&&sin<=90)||sin>=270){
    return Math.cos(sin*Math.PI/180) *r;}
    else{return -Math.cos(sin*Math.PI/180) *r}
  }
      function findeTriangle3(cen,r){
    var center =cen;
    var sin=(-degreToRotate2(center)*180/Math.PI)
    if((sin>=-90&&sin<=90)||sin>=270){
    return -Math.sin(sin*Math.PI/180) *r;}
    else{return Math.sin(sin*Math.PI/180) *r}
  }
  // document.getElementById("im").addEventListener('click',getClickPosition, false);
  
    // test();
    // placeBeads(neck1);
  var replaceBeed;
  var thisArray;
  var thisIndex;
  function getCordinate(x,y,array){
    for (var i=0;i<array.length;i++){
      if ((x>=array[i].x&&x<=array[i].x+array[i].w)&&(y>=array[i].y&&y<=array[i].y+array[i].h))
          { var b = new  beed(array[i].x,array[i].y,array[i].w,array[i].h,array[i].src);
            replaceBeed=b;
            thisIndex=i;
            thisArray=array;
            myDIV.style.display="none"
             modal.style.display = "block";
            return  array[i]}
            // array[i];
            //console.log(array[i])
           // else return console.log("not beed clicked");
    }
  }
  var modal = document.getElementById('myModal');
  var myDIV = document.getElementById('myDIV');
  function clickBeed(e){
    var b = new  beed(this.x,this.y,this.width,this.height,this.cy,this.cx,this.src);
            replaceBeed=b;
            thisIndex=this.i;
            thisArray=this.p;
            myDIV.style.display="none"
             modal.style.display = "block";
  }
  function getClickPosition(e){
    var parentPosition =getPosition(conteiner);
    var xPos = e.clientX - parentPosition.x ;//- (component.offsetWidth / 2) ;
    var yPos= e.clientY -parentPosition.y ;// - (component.offsetHeight / 2);
  
    getCordinate(xPos,yPos,thisArray); 
   
  
  }// helper function to get an element's exact position
  function getPosition(el) {
  
    var xPosition = 0;
    var yPosition = 0;
   
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
        var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
   
        xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
        yPosition += (el.offsetTop - yScrollPos + el.clientTop);
      } else {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      }
   
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }
  
  function changeBeed(i,index,array){
    var be= beeds[i];
    var x;
    x =(array.length-1)/2-index;
     
  
    var b = new  beed(be.x,be.y,be.w,be.h,be.cy,be.r,be.src);
    var c = new  beed(be.x,be.y,be.w,be.h,be.cy,be.r,be.src);
    var newArray= array.concat();
    newArray[index]=b;
     newArray[(array.length-1)/2+x]=c;
    clear();
      // plotWindow();
    placeBeads(newArray);
     var x = document.getElementById("popup");
     x.style.display = "none"
    thisArray= newArray;
  }
  
  function addBeedToNeck(i,index,array){
      var be= beeds[i];
    var y =(array.length-1)/2
    var x=y-index;
    var b = new  beed(be.x,be.y,be.w,be.h,be.cy,be.r,be.src);
    var c = new  beed(be.x,be.y,be.w,be.h,be.cy,be.r,be.src);
    var newArray= array.concat();
    if(index<=y){
    newArray.splice(index,0,b);
    newArray.splice(y+x+2,0,c);
  }
    else {newArray.splice(index+1,0,b);
    newArray.splice(y+x,0,c);}
      clear();
      // plotWindow();
    placeBeads(newArray);
     var x = document.getElementById("popup");
     x.style.display = "none"
    thisArray= newArray;
  }
  function delet(index,array){
    if(index<(array.length-1)/2){
      var x= array.length-index-2;
      array.splice(index,1);
      array.splice(x,1);
    }
     if(index>(array.length-1)/2){
      var x= index-(array.length+1)/2;
      var y= (array.length+1)/2-x-2;
      array.splice(index,1);
      array.splice(y,1);
    }
     clear();
      // plotWindow();
    placeBeads(array);
   modal.style.display = "none"
  }
  
  function findeBeed(id,array){
  
    for(var i=0;i<array.length;i++){
      if(array[i].src===id){
        var b = new  beed(array[i].x,array[i].y,array[i].w,array[i].h,array[i].cy,array[i].r,array[i].src);
            return b;
      }
    }
  }
//   window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// function clickPos(e){
// var pos1=e.clientX;
// var pos2=e.clientY;
// console.log(" the x position"+pos1+" the y position"+pos2)
//  document.onmouseup = null;
//     document.onmousemove = null;
// }
// function mouveBeed(e){
//   document.onmouseup= clickPos;
// }
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function start(){


  }

function cards(){
    for(var i=0;i<beeds.length;i++){
          var s = beeds[i].src;
          var w = beeds[i].w;
          var h =beeds[i].h;
          var div = document.createElement('div');
          div.className= "card";
          div.innerHTML='<img id='+ s +'  src='+s+' alt="Avatar" width='+w+' height='+h+'>'
          div.innerHTML='<div class="con">'
          div.innerHTML=' <h4><b>6x4</b></h4>'
          div.innerHTML='<p>Wood bead</p> '
          div.innerHTML=' <p><button onclick="changeBeed(findeBeed(src,beeds),thisIndex,thisArray)">Add a bead</button></p>'
        }
}
function show() {
    modal.style.display = "none";
   
    appendBeedCard();
     var x = document.getElementById("popup");
     if (x.style.display = "none") {
         x.style.display = "block";
     } else {
         x.style.display = "none";
     }
 }
  