/* PROJECT2 */
let slidePosition2 = 0;
const slides2 = document.getElementsByClassName('image-container-2');
const totalSlides2 = slides2.length;

// get the element with id image__button--next1
// on click of this element do move moveToNextSlide1 function
document.
getElementById('image__button--next2')
  .addEventListener("click", function () {
    moveToNextSlide2();
  });
// get the element with id image__button--prev1
// on click of this element do move moveToPrevSlide1 function
document.
getElementById('image__button--prev2')
  .addEventListener("click", function () {
    moveToPrevSlide2();
  });

// iterate all slides that are inside image-container-2
// remove from all of them the class visible and add the class hidden
// add visible to the item that is in slidePosition1
function updateSlidePosition2() {
  for (let slide of slides2) {
    slide.classList.remove('image__item2--visible2');
    slide.classList.add('image__item2--hidden');
  }

  slides2[slidePosition2].classList.add('image__item2--visible2');
}

// move to the next slide
function moveToNextSlide2() {
  if (slidePosition2 === totalSlides2 - 1) {
    slidePosition2 = 0;
  } else {
    slidePosition2++;
  }

  updateSlidePosition2();
}

// move to the previous slide
function moveToPrevSlide2() {
  if (slidePosition2 === 0) {
    slidePosition2 = totalSlides2 - 1;
  } else {
    slidePosition2--;
  }

  updateSlidePosition2();
}
/* /PROJECT2 */