let index = 0;
let cars = document.querySelectorAll(".fourth__block__window");
let maxIndex = cars.length - 1;
let fourstButtons = document.querySelectorAll(".fourth__block__button");


for (let i = 0; i <= maxIndex; i++) {  
  fourstButtons[i] === fourstButtons[index]
    ? (fourstButtons[i].style.border = "1px solid #Fed100")
    : (fourstButtons[i].style.border = "1px solid #EBEBEB");
    }

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

 


const allButtons = document.querySelector('.buttons_four')

function showSlides () {
  index === maxIndex ? (index = 0) : (index += 1);
  for (let i = 0; i <= maxIndex; i++) {
    cars[i] === cars[index]
      ? (cars[i].style.display = "flex")
      : (cars[i].style.display = "none");
  }
}

allButtons.addEventListener('click', function (event) {
  if (event.target('.fourth__block__button')) {
    showSlides();
  }

})

// const func1 = (event) => {
//   let el = event.target;
//   for (let i = 0; i < allButtons.length; i++) {
//     el === allButtons[i]
//       ? allButtons[i].classList.add("hover")
//       : allButtons[i].classList.remove("hover");
//   }
// };
// allButtons.addEventListener("mouseover", func1);