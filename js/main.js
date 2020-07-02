const slides = document.querySelectorAll('[class*="section-slide"]');
console.log(slides);

function nextSlide() {
  console.log('next slide')
}

function prevSlide() {
  console.log('prev slide')
}

function handleWheel(e) {
  e.preventDefault();
  if (e.deltaY > 5) {
    nextSlide();
  } else if (e.deltaY < -5) {
    prevSlide();
  }
}

function handleKeyUp(e) {
  const active = document.querySelector('section-slide-active')
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    nextSlide();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    prevSlide();
  }
}

function scrollFeatures() {


  window.addEventListener('wheel', handleWheel, { passive: false });
  window.addEventListener('keydown', handleKeyUp);

}

scrollFeatures();
