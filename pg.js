const slider = document.querySelector('.slider');
const imgList = document.querySelector('.img-list');
const items = imgList.querySelectorAll('li');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const itemsToShow = 4;
const itemWidth = items[0].offsetWidth + 40;
let currentIndex = 0;

function updateSliderPosition() {
    const offset = -currentIndex * itemWidth;
    imgList.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
    } else {
        currentIndex = items.length - itemsToShow;
    }
    updateSliderPosition();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - itemsToShow) {
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }
    updateSliderPosition();
});

function initSlider() {
    imgList.style.display = 'flex';
    imgList.style.transition = 'transform 0.3s ease-in-out';
    updateSliderPosition();
}

initSlider();
