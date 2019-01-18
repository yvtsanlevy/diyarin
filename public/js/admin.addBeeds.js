
function beed(name,w,h,cy,color,style,quantity){
this.name=name;
this.w=w;
this.h=h;
this.cy=cy;
this.color=color;
this.style=style;
this.quantity=quantity;
}

    function addBeedDB(){
        var name =document.getElementById("beedname").value;
var w =document.getElementById("w").value;
var h =document.getElementById("h").value;
var cy =document.getElementById("cy").value;
var color =document.getElementById("color").value;
var style =document.getElementById("style").value;
var quantity =document.getElementById("quantity").value;


      var newBeed=new  beed(name,w,h,cy,color,style,quantity);
      var obje=JSON.stringify(newBeed)
      $.ajax({
          type: "POST",
          url: "/addToBeeds",
          processData: false,
          contentType: 'application/json',
          data: obje,
          success: function(r) {
             console.log(r);
          }
      });
    }
    // $("#checkout").on("click",checkout());