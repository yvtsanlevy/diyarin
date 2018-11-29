
 	var beeds;
   var neckles;
   var images;
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
    function loadDoc3() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
     
          if (this.readyState == 4 && this.status == 200) {
          
            images =JSON.parse(this.responseText);
              preload(images,img);
              
         }
      };
      xhttp.open("GET", '/images', true);
      xhttp.send(); 
  }
loadDoc();
loadDoc2();
loadDoc3();

  var beedImages = new Array();
  var neckImages = new Array();
 
  var img=new Array();
      function preload(array1,array2) {
        for (i = 0; i < array1.length; i++) {
          array2[i] = new Image()
          
          // images[i].crossOrigin="Anonymous"
          // images[i].setAttribute('crossOrigin', 'anonymous');
          array2[i].src = '/'+array1[i].src
        }
      }

      
    