const slider = document.querySelector(".slider ul");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const videosPerSlide = 1;
const totalVideos = slider.children.length;
const maxIndex = totalVideos - 3; 

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