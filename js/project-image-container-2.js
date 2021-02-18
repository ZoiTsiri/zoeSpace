let slidePosition2 = 0;
const slides2 = document.getElementsByClassName('image-container-2');
const totalSlides2 = slides2.length;

document.
  getElementById('image__button--next2')
  .addEventListener("click", function() {
    moveToNextSlide2();
  });
document.
  getElementById('image__button--prev2')
  .addEventListener("click", function() {
    moveToPrevSlide2();
  });

function updateSlidePosition2() {
  for (let slide of slides2) {
    slide.classList.remove('image__item2--visible2');
    slide.classList.add('image__item2--hidden');
  }

  slides2[slidePosition2].classList.add('image__item2--visible2');
}

function moveToNextSlide2() {
  if (slidePosition2 === totalSlides2 - 1) {
    slidePosition2 = 0;
  } else {
    slidePosition2++;
  }

  updateSlidePosition2();
}

function moveToPrevSlide2() {
  if (slidePosition2 === 0) {
    slidePosition2 = totalSlides2 - 1;
  } else {
    slidePosition2--;
  }

  updateSlidePosition2();
}