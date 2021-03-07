/* PROJECT3 */
let slidePosition3 = 0;
const slides3 = document.getElementsByClassName('image-container-3');
const totalSlides3 = slides3.length;

document.
  getElementById('image__button--next3')
  .addEventListener("click", function() {
    moveToNextSlide3();
  });
document.
  getElementById('image__button--prev3')
  .addEventListener("click", function() {
    moveToPrevSlide3();
  });

function updateSlidePosition3() {
  for (let slide of slides3) {
    slide.classList.remove('image__item3--visible3');
    slide.classList.add('image__item3--hidden');
  }

  slides3[slidePosition3].classList.add('image__item3--visible3');
}

function moveToNextSlide3() {
  if (slidePosition3 === totalSlides3 - 1) {
    slidePosition3 = 0;
  } else {
    slidePosition3++;
  }

  updateSlidePosition3();
}

function moveToPrevSlide3() {
  if (slidePosition3 === 0) {
    slidePosition3 = totalSlides3 - 1;
  } else {
    slidePosition3--;
  }

  updateSlidePosition3();
}

/* /PROJECT3 */