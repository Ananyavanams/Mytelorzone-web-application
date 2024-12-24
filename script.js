/*Side Nav Bar*/
const burger = document.getElementById('burger');
const close = document.getElementById('close');
const nav = document.getElementById('nav-bar');
//if click on burger/active/true
if(burger){
  burger.addEventListener('click', ()=>{
    nav.classList.add('active');
  })
}

//if close in pressed
if(close){
  close.addEventListener('click', ()=>{
    nav.classList.remove('active');
  })
}


/*.............................................................................*/

//change main image on clicking the small images
let mainImg = document.getElementById('mainImg');
let largeImg = document.getElementsByClassName('largeImg')// 4 small images

for(let i = 0; i < largeImg.length; i++){
  largeImg[i].addEventListener('click', function(){
    mainImg.src = largeImg[i].src;
  })
}

// Get all product images
let productImages = document.getElementsByClassName('product');

for (let i = 0; i < productImages.length; i++) {
  productImages[i].addEventListener('click', function() {

    let productId = this.getAttribute('data-id');

    window.location.href = `ep${productId}.html`;
  });
}

 
