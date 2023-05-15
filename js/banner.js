// JavaScript код для карусели
var slides = document.querySelectorAll('.slide');
var indicators = document.querySelectorAll('.indicators li');
var currentSlide = 0;

function showSlide(index) {
  slides.forEach(function(slide) {
    slide.classList.remove('active');
  });
  indicators.forEach(function(indicator) {
    indicator.classList.remove('active');
  });

  slides[index].classList.add('active');
  indicators[index].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);
