var products=$(".products");

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

    <button class="btn product__btn">הוסף לעגלה</button>
</div>`)
}