let slidePosition1 = 0;
const slides1 = document.getElementsByClassName('image-container-1');
const totalSlides1 = slides1.length;

document.
  getElementById('image__button--next1')
  .addEventListener("click", function() {
    moveToNextSlide1();
  });
document.
  getElementById('image__button--prev1')
  .addEventListener("click", function() {
    moveToPrevSlide1();
  });

function updateSlidePosition1() {
  for (let slide of slides1) {
    slide.classList.remove('image__item1--visible1');
    slide.classList.add('image__item1--hidden');
  }

  slides1[slidePosition1].classList.add('image__item1--visible1');
}

function moveToNextSlide1() {
  if (slidePosition1 === totalSlides1 - 1) {
    slidePosition1 = 0;
  } else {
    slidePosition1++;
  }

  updateSlidePosition1();
}

function moveToPrevSlide1() {
  if (slidePosition1 === 0) {
    slidePosition1 = totalSlides1 - 1;
  } else {
    slidePosition1--;
  }

  updateSlidePosition1();
}