var products=$(".products");
$(window).on("load",function(){
for(var i = 0;i<neckles.length;i++){
    products.append(`		<div class="product">
    <img src="${neckles[i].src}" alt="House 2" class="product__img">
    <svg class="product__like">
        <use xlink:href="img/sprite.svg#icon-heart-full"></use>
    </svg>
    <h5 class="product__name">${neckles[i].name}</h5>
   
    <div class="product__rooms">
        <svg>
            <use xlink:href="img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>${neckles[i].price}</p>
    </div>
    <div class="product__location">
    <svg>
        <use xlink:href="img/sprite.svg#icon-map-pin"></use>
    </svg>
    <p>מחיר</p>
</div>

    <button class="btn product__btn" onclick="addCard2(${i})">הוסף לעגלה</button>
</div>`)
    }
    showCards();
})
function addCard2(i){
    addToCards(neckles[i]);
    getCards();
   }
   getCards();
   var cardContainer =$(".cards-container")
   var banner=$(".banner")
   function showCards(){
     var sum=0;
     var solde="מבצע מטורף 3 שרשראות ב150"
     if(cards.length<3){
         for(var i=0;i<cards.length;i++){
             sum+=cards[i].price;}
         }
         else{
            sum=cards.length*50;
            solde="מחיר מבצע "
         }
     banner.empty();
     cardContainer.empty();
    
    banner.append(`
    <div class="bannerCards">
    <div class="sum1"> <p>כמות : ${cards.length} </p></div>
   <a href="checkout.html" <button class=" banner__btn hover" onclick="">>המשך לקופה</button></a>
    <div class="sum2"> <p>סכום הקניה : ${sum}   ${solde}</p></div>
    </div>
    `)

     for(var i = 0;i<cards.length;i++){
        cardContainer.append(`		<div class="product">
        <img src="${cards[i].src}" alt="House 2" class="product__img">
        <svg class="product__like">
            <use xlink:href="img/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 class="product__name">${cards[i].name}</h5>
       
        <div class="product__rooms">
            <svg>
                <use xlink:href="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>${cards[i].price}</p>
        </div>
        <div class="product__location">
        <svg>
            <use xlink:href="img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>מחיר</p>
    </div>
    
        <button class="btn product__btn" onclick="remouve(${i})">הסר</button>
    </div>`)
    }
   }
  function remouve (i){
    var obje=JSON.stringify(cards[i])
    $.ajax({
        type: "POST",
        url: "/remouveCards",
        // processData: false,
        contentType: 'application/json',
        data: obje,
        success: function(r) {
           console.log(r);
        }
    }); 
      cards.splice(i,1);
      cardContainer.empty();
      showCards();
      
  }