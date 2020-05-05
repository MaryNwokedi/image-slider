const slideCarousel = document.querySelector('.slide-carousel');
const slideImg = document.querySelectorAll('.slide-carousel img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = slideImg[0].clientWidth;

slideCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nextBtn.addEventListener('click', () => {
  if (counter >= slideImg.length - 1) return;
  slideCarousel.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slideCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  slideCarousel.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slideCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slideCarousel.addEventListener('transitionend', () => {
  if (slideImg[counter].id === "last-clone") {
    slideCarousel.style.transition = "none";
    counter = slideImg.length - 2;
    slideCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (slideImg[counter].id === "first-clone") {
    slideCarousel.style.transition = "none";
    counter = slideImg.length - counter;
    slideCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});