let index = 0;
let cars = document.querySelectorAll(".fourth__block__window");
let maxIndex = cars.length - 1;

for (let i = 0; i <= maxIndex; i++) {
  cars[i] === cars[index]
    ? (cars[i].style.display = "grid")
    : (cars[i].style.display = "none");
}

let next = document.querySelector('.next')
next.addEventListener('click', function () {
 for (let i=0; i<= maxIndex; i++) {
  if (cars[i].style.display = "grid"){
     cars[i].style.display = "none"
   } else {
     cars[i].style.display = "grid"
     break
   }
 }
})




