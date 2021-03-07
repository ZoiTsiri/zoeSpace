/* PROJECT1 */
let slidePosition1 = 0;
const slides1 = document.getElementsByClassName('image-container-1');
const totalSlides1 = slides1.length;

// get the element with id image__button--next1
// on click of this element do move moveToNextSlide1 function
document.
  getElementById('image__button--next1')
  .addEventListener("click", function() {
    moveToNextSlide1();
  });
  // get the element with id image__button--prev1
// on click of this element do move moveToPrevSlide1 function
document.
  getElementById('image__button--prev1')
  .addEventListener("click", function() {
    moveToPrevSlide1();
  });

  // iterate all slides that are inside image-container-1
  // remove from all of them the class visible and add the class hidden
  // add visible to the item that is in slidePosition1
function updateSlidePosition1() {
  for (let slide of slides1) {
    slide.classList.remove('image__item1--visible1');
    slide.classList.add('image__item1--hidden');
  }

  slides1[slidePosition1].classList.add('image__item1--visible1');
}

// move to the next slide
function moveToNextSlide1() {
  if (slidePosition1 === totalSlides1 - 1) {
    slidePosition1 = 0;
  } else {
    slidePosition1++;
  }

  updateSlidePosition1();
}

// move to the previous slide
function moveToPrevSlide1() {
  if (slidePosition1 === 0) {
    slidePosition1 = totalSlides1 - 1;
  } else {
    slidePosition1--;
  }

  updateSlidePosition1();
}

/* /PROJECT1 */