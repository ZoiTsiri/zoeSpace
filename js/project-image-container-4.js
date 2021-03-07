/* PROJECT4 */
let slidePosition4 = 0;
const slides4 = document.getElementsByClassName('image-container-4');
const totalSlides4 = slides4.length;

// get the element with id image__button--next1
// on click of this element do move moveToNextSlide1 function
document.
getElementById('image__button--next4')
  .addEventListener("click", function () {
    moveToNextSlide4();
  });

// get the element with id image__button--prev1
// on click of this element do move moveToPrevSlide1 function
document.
getElementById('image__button--prev4')
  .addEventListener("click", function () {
    moveToPrevSlide4();
  });

// iterate all slides that are inside image-container-4
// remove from all of them the class visible and add the class hidden
// add visible to the item that is in slidePosition1
function updateSlidePosition4() {
  for (let slide of slides4) {
    slide.classList.remove('image__item4--visible4');
    slide.classList.add('image__item4--hidden4');
  }

  slides4[slidePosition4].classList.add('image__item4--visible4');
}

// move to the next slide
function moveToNextSlide4() {
  if (slidePosition4 === totalSlides4 - 1) {
    slidePosition4 = 0;
  } else {
    slidePosition4++;
  }

  updateSlidePosition4();
}

// move to the previous slide
function moveToPrevSlide4() {
  if (slidePosition4 === 0) {
    slidePosition4 = totalSlides4 - 1;
  } else {
    slidePosition4--;
  }

  updateSlidePosition4();
}

/* /PROJECT4 */