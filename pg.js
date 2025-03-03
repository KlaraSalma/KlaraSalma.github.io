const slider = document.querySelector(".slider ul");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const imagesPerSlide = 1;
const totalImages = slider.children.length;
const maxIndex = totalImages - 2; 

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = maxIndex;
  }
  updateSlider();
});

nextButton.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

function updateSlider() {
  const slideWidth = 100 / 3;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  slider.style.transition = "transform 0.5s ease";
}
