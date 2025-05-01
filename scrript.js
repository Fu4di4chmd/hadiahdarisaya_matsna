let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.nav-btn-prev');
const nextBtn = document.querySelector('.nav-btn-next');

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  // Scroll the slider to the new slide
  document.querySelector('.slider').scrollTo({
    left: currentSlide * window.innerWidth,
    behavior: 'smooth'
  });
}

// Click events for next and previous buttons
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

