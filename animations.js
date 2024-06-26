var currMonth = new Date().getMonth();
var currYear = new Date().getFullYear();
var daysOfWeeks = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var monthsOfYear = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
const imgArr = ['images/car1.png','images/car2.jpg','images/car3.jpg','images/car4.jpg','images/car5.jpg','images/car6.jpg','images/car7.jpg'];
const carLogoArr = ['images/carillus1.png','images/carillus2.png','images/carillus3.png'];
var mainImg = 0;
const img = document.getElementById('image-slideshow-container');
const carNameArr = ['Lamborghini','Mustang','Cadillac','Hellcat','Tesla','Jeep','Ferrari'];

function loadCalender(){
   const calenderElem = document.getElementById('sched');
   calenderElem.innerHTML = '';

   daysOfWeeks.forEach(day => {
    const daysElem = document.createElement('div');
    daysElem.classList.add('header');
    daysElem.textContent = day;
    calenderElem.appendChild(daysElem);
   });

   const firstDay = new Date(currYear, currMonth, 1).getDay();
   const lastDate = new Date(currYear, currMonth + 1, 0).getDate();

   const month = document.getElementById('month');
   month.innerHTML = monthsOfYear[currMonth] + ' ' + currYear;
   
   
   for(let i = 0; i < firstDay; i++){
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('dates');
        emptyCell.id = 'dates';
        calenderElem.appendChild(emptyCell);
   }
   
   for(let j = 1; j <= lastDate; j++){
       const elem = document.createElement('div');
       elem.classList.add('dates');
       elem.id = 'dates'
       elem.textContent = j;
       calenderElem.appendChild(elem);
   }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function changeMonthPrev(){
    currMonth--;
    if(currMonth <0){
        currMonth = 11;
        currYear--; 
    }

    loadCalender(); 
}

function changeMonthNext(){
    currMonth++;
    if(currMonth > 11){
        currMonth = 0;
        currYear++;
    }

    loadCalender(); 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function secondPage(){
    const page = document.getElementById('second-page');
    carLogoArr.forEach(car => {
        const carLogos = document.createElement('img');
        carLogos.src = car;
        carLogos.style.width = '150px';
        carLogos.style.height = '150px';
        page.appendChild(carLogos);
    })
    
}