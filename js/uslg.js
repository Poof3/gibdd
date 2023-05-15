var serviceSlides = document.querySelector('.service-slides');
var prevSlideButton = document.querySelector('.prev-slide');
var nextSlideButton = document.querySelector('.next-slide');
var slideWidth = document.querySelector('.service-slide').offsetWidth;
var currentSlide = 0;

// Функция для переключения на предыдущий слайд
function showPrevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    serviceSlides.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }
}

// Функция для переключения на следующий слайд
function showNextSlide() {
  var totalSlides = document.querySelectorAll('.service-slide').length;
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    serviceSlides.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }
}

// Назначаем обработчики клика на кнопки "Назад" и "Вперед"
prevSlideButton.addEventListener('click', showPrevSlide);
nextSlideButton.addEventListener('click', showNextSlide);
