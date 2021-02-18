let slidePosition4 = 0;
const slides4 = document.getElementsByClassName('image-container-4');
const totalSlides4 = slides4.length;

document.
  getElementById('image__button--next4')
  .addEventListener("click", function() {
    moveToNextSlide4();
  });
document.
  getElementById('image__button--prev4')
  .addEventListener("click", function() {
    moveToPrevSlide4();
  });

function updateSlidePosition4() {
  for (let slide of slides4) {
    slide.classList.remove('image__item4--visible4');
    slide.classList.add('image__item4--hidden4');
  }

  slides4[slidePosition4].classList.add('image__item4--visible4');
}

function moveToNextSlide4() {
  if (slidePosition4 === totalSlides4 - 1) {
    slidePosition4 = 0;
  } else {
    slidePosition4++;
  }

  updateSlidePosition4();
}

function moveToPrevSlide4() {
  if (slidePosition4 === 0) {
    slidePosition4 = totalSlides4 - 1;
  } else {
    slidePosition4--;
  }

  updateSlidePosition4();
}