const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 1;

const showSlide = (n) => {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  slides[n - 1].style.display = 'block';
  dots[n - 1].classList.add('active');
};

const showPrevSlide = () => {
  if (currentSlide === 1) currentSlide = slides.length;
  else currentSlide -= 1;
  showSlide(currentSlide);
};

const showNextSlide = () => {
  if (currentSlide === slides.length) currentSlide = 1;
  else currentSlide += 1;
  showSlide(currentSlide);
}

document.querySelector('.prevBtn').addEventListener('click', showPrevSlide);
document.querySelector('.nextBtn').addEventListener('click', showNextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index + 1;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);

setInterval(showNextSlide, 5000);