// JavaScript to handle carousel functionality

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalImages = images.length;
const imageWidth = images[0].clientWidth;

// Set initial position of carousel
carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`;

function nextSlide() {
    if (currentIndex >= totalImages - 1) return;
    currentIndex++;
    carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

function prevSlide() {
    if (currentIndex <= 0) return;
    currentIndex--;
    carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

// Event listeners for buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
