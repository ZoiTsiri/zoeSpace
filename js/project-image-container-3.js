/* PROJECT3 */
let slidePosition3 = 0;
const slides3 = document.getElementsByClassName('image-container-3');
const totalSlides3 = slides3.length;

// get the element with id image__button--next1
// on click of this element do move moveToNextSlide1 function
document.
getElementById('image__button--next3')
  .addEventListener("click", function () {
    moveToNextSlide3();
  });

// get the element with id image__button--prev1
// on click of this element do move moveToPrevSlide1 function
document.
getElementById('image__button--prev3')
  .addEventListener("click", function () {
    moveToPrevSlide3();
  });

// iterate all slides that are inside image-container-3
// remove from all of them the class visible and add the class hidden
// add visible to the item that is in slidePosition1
function updateSlidePosition3() {
  for (let slide of slides3) {
    slide.classList.remove('image__item3--visible3');
    slide.classList.add('image__item3--hidden');
  }

  slides3[slidePosition3].classList.add('image__item3--visible3');
}

// move to the next slide
function moveToNextSlide3() {
  if (slidePosition3 === totalSlides3 - 1) {
    slidePosition3 = 0;
  } else {
    slidePosition3++;
  }

  updateSlidePosition3();
}

// move to the previous slide
function moveToPrevSlide3() {
  if (slidePosition3 === 0) {
    slidePosition3 = totalSlides3 - 1;
  } else {
    slidePosition3--;
  }

  updateSlidePosition3();
}

/* /PROJECT3 */