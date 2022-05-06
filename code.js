// слайдер
let index = 0;
let cars = document.querySelectorAll(".fourth__block__window");
let maxIndex = cars.length - 1;
let fourstButtons = document.querySelectorAll(".fourth__block__button");

for (let i = 0; i <= maxIndex; i++) {
  cars[i] === cars[index]
    ? (cars[i].style.display = "flex")
    : (cars[i].style.display = "none");
}

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

const scrollNext = () => {
  index === maxIndex ? (index = 0) : (index += 1);
  for (let i = 0; i <= maxIndex; i++) {
    cars[i] === cars[index]
      ? (cars[i].style.display = "flex")
      : (cars[i].style.display = "none");
  }
  for (let i = 0; i <= maxIndex; i++) { 
      fourstButtons[i] === fourstButtons[index]
    ? (fourstButtons[i].style.border = "1px solid #Fed100")
    : (fourstButtons[i].style.border = "1px solid #EBEBEB");
  }
};
next.addEventListener('click', scrollNext);

const scrollPrev = () => {
  index === 0 ? (index = maxIndex) : (index -= 1);
  for (let i = 0; i <= maxIndex; i++) {
    cars[i] === cars[index]
      ? (cars[i].style.display = "flex")
      : (cars[i].style.display = "none");
  }
  for (let i = 0; i <= maxIndex; i++) { 
      fourstButtons[i] === fourstButtons[index]
    ? (fourstButtons[i].style.border = "1px solid #Fed100")
    : (fourstButtons[i].style.border = "1px solid #EBEBEB");
  }
};
prev.addEventListener('click', scrollPrev);

const buttons = document.querySelector(".buttons_four");

const scrollSlider =  (event) => {
  let el = event.target;

  for (let i = 0; i <= fourstButtons.length - 1; i++) {
    if (el === fourstButtons[i]) {
      index = i;
      for (let i = 0; i <=maxIndex; i++) {
        cars[i] === cars[index]
        ? (cars[i].style.display = "flex")
      : (cars[i].style.display = "none");
      }
      for (let i = 0; i <= maxIndex; i++) { 
        fourstButtons[i] === fourstButtons[index]
      ? (fourstButtons[i].style.border = "1px solid #Fed100")
      : (fourstButtons[i].style.border = "1px solid #EBEBEB");
      }
    }
  }
} 

buttons.addEventListener('click', scrollSlider);

// комментарии

function reviews__card_text(elt, he, tr){
  var hs = he+'px',temp,
  elt = document.querySelectorAll(elt);
  [].forEach.call(elt, function(el,i){
  el.insertAdjacentHTML('afterend', '<div class="reviews__link1">Читать полностью</div>');
  el.style.height = hs;
  el.style.transition = tr+'s';
  el.nextElementSibling.addEventListener('click', function(e){
  var prev = this.previousElementSibling;
  if (prev.style.height == hs) {
  prev.style.height = prev.scrollHeight+'px';
  setTimeout(()=>{
  prev.style.height = 'auto';
 prev.style.transition = '0s';
  },tr*1000);
 this.textContent = "Свернуть";
 this.classList.add('open');
 }
else {
prev.style.height = getComputedStyle(el).height;
prev.style.transition = tr+'s';
setTimeout(()=>prev.style.height = hs,0);
this.textContent ='Читать полностью';
this.classList.remove('open');
}
});
});
}
onload = function(){
reviews__card_text('.reviews__card_text',143, 1); 
;
};

// доп функции

function order__show() {
  document.getElementById("checkbox_hide").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");
  document.getElementById("order__show").setAttribute("style", "display: none");
  document.getElementById("order__hidden").setAttribute("style", "display: block");
  }
  
  function order__hidden() {
  document.getElementById("checkbox_hide").setAttribute("style", "display: none");
  document.getElementById("order__hidden").setAttribute("style", "display: none");
  document.getElementById("order__show").setAttribute("style", "display: block");
  }

 // валидация 

 function validate() {
  var username = document.getElementById("username");
  var usertel = document.getElementById("usertel");

  if (!username.value) {
    username.style.border = "2px solid red";
    return false;
  }
  if (!usertel.value) {
    usertel.style.border = "2px solid red";
    return false;
  }
  return true;
}


// таймер

var endDate = new Date("May 30, 2022 12:00:00").getTime();

var timer = setInterval(function() {
  let now = new Date().getTime();
  let t = endDate - now;
  
  if (t >= 0) {
  
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((t % (1000 * 60)) / 1000);

  
      document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
      "<span class='label'>:</span>";
  
      document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
      "<span class='label'>:</span>";
  
      document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2);
  
  } else {
      document.getElementById("timer").innerHTML = "The countdown is over!";
  
  }
  
}, 1000);

// поделиться в соц сетях

Share = {
  me : function(el){
      Share.popup(el.href);
      return false;
  },

  popup: function(url) {
      window.open(url,'','toolbar=0,status=0,width=626,height=436');
  }
};

// бургер меню

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})