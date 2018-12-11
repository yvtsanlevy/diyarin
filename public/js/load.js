
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
                preload(neckles,neckImages);
                
           }
        };
        xhttp.open("GET", '/neck', true);
        xhttp.send(); 
    }

loadDoc();
loadDoc2();


  var beedImages = new Array();
  var neckImages = new Array();

      function preload(array1,array2) {
        for (i = 0; i < array1.length; i++) {
          array2[i] = new Image()
          
          // images[i].crossOrigin="Anonymous"
          // images[i].setAttribute('crossOrigin', 'anonymous');
          array2[i].src = '/'+array1[i].src
        }
      }

      // function addToCards(obj){
      //   var xhttp = new XMLHttpRequest();
      //   var obje=JSON.stringify(obj)
      //   xhttp.open("POST", '/addToCards', true);
      //   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      //   xhttp.send(obje);
      // }
      function addToCards(obj){
        var obje=JSON.stringify(obj)
      $.ajax({
          type: "POST",
          url: "/addToCards",
          processData: false,
          contentType: 'application/json',
          data: obje,
          success: function(r) {
             console.log(r);
          }
      });
    }

    function getCards(){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
     
          if (this.readyState == 4 && this.status == 200) {
          
            cards =JSON.parse(this.responseText);
            
         }
      };
      xhttp.open("GET", '/getCards', true);
      xhttp.send(); 
  }
