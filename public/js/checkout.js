var name =document.getElementById("fname");
var email =document.getElementById("email");
var adr =document.getElementById("adr");
var city =document.getElementById("city");
var zip =document.getElementById("zip");
var price =document.getElementById("fname");

function order(name,email,adr,phon,orde,price){
this.name=name;
this.email=email;
this.adr=adr;
this.phon=phon;
this.orde=orde;
this.price=price;
}
 getCards();
 var sum=0;

//  if(cards.length<3){
//     for(var i=0;i<cards.length;i++){
//         sum+=cards[i].price;}
//     }
//     else{
//        sum=cards.length*50;
//        solde="מחיר מבצע "
//     }

    function checkout(){
        var name =document.getElementById("fname").value;
var email =document.getElementById("email").value;
var adr =document.getElementById("adr").value;
var phon =document.getElementById("phon").value;
var city =document.getElementById("city").value;
var zip =document.getElementById("zip").value;
var sum=0;
var adrees =[adr,city,zip]

 if(cards.length<3){
    for(var i=0;i<cards.length;i++){
        sum+=cards[i].price;}
    }
    else{
       sum=cards.length*50;
       solde="מחיר מבצע "
    }
      var newOrder=new  order(name,email,adrees,phon,cards,sum);
      console.log(newOrder);
      var obje=JSON.stringify(newOrder)
      $.ajax({
          type: "POST",
          url: "/addToOrders",
          processData: false,
          contentType: 'application/json',
          data: obje,
          success: function(r) {
             console.log(r);
          }
      });
    }
    // $("#checkout").on("click",checkout());