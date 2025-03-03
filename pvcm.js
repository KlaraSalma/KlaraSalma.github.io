const slider = document.querySelector(".slider ul");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const videosPerSlide = 3;
const totalVideos = slider.children.length;
const totalSlides = Math.ceil(totalVideos / videosPerSlide);

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  updateSlider();
});

nextButton.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

function updateSlider() {
  const slideWidth = 100 / videosPerSlide;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  slider.style.transition = "transform 0.5s ease";
}