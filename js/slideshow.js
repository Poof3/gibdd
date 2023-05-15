var slideIndex = 0;
var slides_2 = document.getElementsByClassName("slide_2");

function showSlide_2(n) {
  if (n >= slides_2.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides_2.length - 1;
  }

  for (var i = 0; i < slides_2.length; i++) {
    slides_2[i].style.display = "none";
  }

  slides_2[slideIndex].style.display = "block";
}

function nextSlide_2() {
  slideIndex++;
  showSlide_2(slideIndex);
}

function prevSlide_2() {
  slideIndex--;
  showSlide_2(slideIndex);
}

showSlide_2(slideIndex);
