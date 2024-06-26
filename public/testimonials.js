const b = document.getElementsByClassName("ratingContainer");
const star = document.getElementsByClassName("star-rating");
const carArr = ['honda','jeep','tesla','toyota'];
const img = document.getElementById('image-slideshow-container');
var mainImg = 0;
const imgArr = ['images/car1.png','images/car2.jpg','images/car3.jpg','images/car4.jpg','images/car5.jpg','images/car6.jpg','images/car7.jpg'];
/* for(let i = 0; i < 5; i++){
    const star = document.createElement('img');
    star.classList.add('star-rating');
    star.src = 'images/ratingstar.png';
    b[0].appendChild(star);
    star.onclick = 'rate()';
} */

function rate(n){
    let cls = '';
    remove();
    for(let i = 0; i < n; i++){
        if( n==1 ) cls = "one"
        else if( n==2 ) cls = "two";
        else if( n==3 ) cls = "three";
        else if( n==4 ) cls = "four";
        else if( n==5 ) cls = "five";
        star[i].className =  "star-rating " + cls;
    }
}

function remove(){
    let i = 0;
    while(i<5){
        star[i].className = 'star-rating';
        i++;
    }
}


function slideShow(){
    const images = document.createElement('img');
    const carName = document.createElement('h1');
    //const page = document.getElementById('third-page');
    /* carNameArr.forEach(cars => {
        carName.innerHTML = cars;
        carName.style.fontFamily = 'sans-serif';
        carName.style.textShadow = '2px 2px white';
        carName.style.color = 'black';
        img.appendChild(carName);
    }); */

    var i = mainImg;
    //carName.innerHTML = carNameArr[i];
    //images.src = imgArr[i];
    //img.appendChild(carName);
    images.style.width = '800px';
    images.style.height = '400px';
    images.style.padding = "10px 10px 10px 10px";
    img.appendChild(images);
    img.firstElementChild.src = imgArr[i];
    //img.firstElementChild.innerHTML = carName[i];
}

function nextImage(){
    mainImg++;

    if(mainImg > imgArr.length-1){
        mainImg = 0;
    }

    slideShow();
} 

function prevImage(){
    mainImg--;

    if(mainImg < 0){
        mainImg = imgArr.length - 1;
    }

    slideShow();
} 



