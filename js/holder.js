function scrollFeatures() {
  let prevOffset = 0;
  function handleScroll() {
    const currentOffset = window.pageYOffset;
    if (currentOffset > prevOffset) {
      console.log('going down!')
    } else {
      console.log('going up!')
    }
    prevOffset = currentOffset;
  }

  function handleWheel(e) {
    // console.log(e.deltaY);
    if (e.deltaY > 5) {
      window.location.hash = '#case-studies';
    } else if (e.deltaY < -5) {
      console.log('scroll up!')
    }
  }

  // window.addEventListener('scroll', handleScroll);
  window.addEventListener('wheel', handleWheel);

}

scrollFeatures();

console.log(window.location.hash);