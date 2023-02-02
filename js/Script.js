//Mobile-Nav
const menuBtn = document.querySelector('.menu');
const exit = document.querySelector('.Exit');
const menu =document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');
const mainThumbnail = document.querySelector('.main-thubnail');
const mainThumbnailLightBox = document.querySelector('.Lightbox-container .mainThumbnail');
const images = document.querySelectorAll('.mini-image img');
const PlusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const amount = document.querySelector('.amount');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const slider = document.querySelector('.mobile-thumb');
const thumbMob = document.querySelector('.thumb-mob');
const cartBtn = document.querySelector('.cart-btn');
const cart = document.querySelector('.cart-wrp');
const closeLightBoxBtn = document.querySelector('.close-ligtbox');
const lightBox = document.querySelector('.Lightbox');
const addBtn = document.querySelector('.add_btn');
const indicator = document.querySelector('.indicator');
const wrp = document.querySelector('.cart-content');



//MOBILE-NAV TOGGLER
menuBtn.addEventListener("click", e=>{
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.mobile-nav').style.display = 'block';
})

exit.addEventListener("click", e=>{
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.mobile-nav').style.display = 'none';
})

let amountValue = 0;
let currentImg = 1;

indicator.style.display = "none"; 
function handlePlus(){
    amountValue++;
    amount.innerText = amountValue;
}
function handleMinus(){
    if(amountValue>0){
        amountValue--; 
    }
    amount.innerText = amountValue
}
function nextImage(){
    if(currentImg == 4){
        currentImg = 1;
    } else {
        currentImg++;
    }
    thumbMob.src= `.images/image-product-${currentImg}.jpg`
} 
function prevImage (){
    if(currentImg ==1){
        currentImg ==4;
    } else{
        currentImg--;
    }
    thumbMob.src=`.images/image-product-${currentImg}.jpg`
}
function toggleCart(){
    cart.classList.toggle("invisible")
}
function closeLightBox(){
    lightBox.classList.add("invisible");
}
function openLightBox(){
    lightBox.classList.remove("invisible");
}
function addItem(){
    if(amountValue > 0){
        const total = 125.00 * amountValue;
        wrp.classList.remove("empty");
        wrp.innerHTML = `
        <div class = "product">
          <div>
            <img class "product-img" src="./images/image-product-1-thumbnail.jpg">
            <div class="product-info">
               <p class="product-title">Fall Limited Edition Sneakers</p>
             <p><span>$125.00</span> x <span class="number">${amountValue}</span><b class="total">$${total} </b>
            </div>
             <button class="delete-btn" onclick ="deleteItem()"><img src="./images/icon-delete"</button>
          </div>
           <button class="checkout-btn">Checkout</button>
         </div>
        `;
        indicator.style.display = "block";
        indicator.innerText = amountValue;
    }
}
function deleteItem(){
    wrp.classList.add("empty");
    wrp.innerHTML = "<p>Your cart is empty</p>";
    indicator.style.display = "none";
}

images.forEach((image)=>{
     image.addEventListener("click", ()=>{
        const lastImg = document.querySelectorAll(".selected");
        if(lastImg){
            lastImg[0].classList.remove("selected");
        }
        image.classList.add("selected");
        const selectedImg = document.querySelector(".selected"); 
        switch(selectedImg.getAttribute(src)){
            case "./images/image-product-1-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-1.jpg";
                mainThumbnailLightBox.src = "./images/image-product-1.jpg";
                break
            case "./images/image-product-2-thumbnail.jpg":  
                mainThumbnail.src = "./images/image-product-2.jpg";
                mainThumbnailLightBox.src = "./images/image-product-2";
                break
            case "./images/image-product-3-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-3.jpg";
                mainThumbnailLightBox = "./images/image-product-3.jpg";
                break
            case "./images/image-product-4-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-4.jpg";
                mainThumbnailLightBox = "./images/image-product-4.jpg";     
        }
        
     })
})

PlusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);
nextBtn.addEventListener("click", nextImage);
previousBtn.addEventListener("click", prevImage);
cartBtn.addEventListener("click",toggleCart);
closeLightBoxBtn.addEventListener("click",closeLightBox);
mainThumbnail.addEventListener("click",openLightBox);
addBtn.addEventListener("click",addItem);


