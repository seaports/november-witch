// Shared carousel/modal navigation behavior.
// Requires markup using the .modal / .modal-content / .carousel-* classes
// from styles.css. Include this file on any page using the carousel.

let currentCarouselIndex = 0;

function showCarouselImage(index) {
    const images = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.carousel-dot');
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    if (images[index]) {
        images[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        currentCarouselIndex = index;
    }
}

function nextCarouselImage() {
    const images = document.querySelectorAll('.carousel-image');
    showCarouselImage((currentCarouselIndex + 1) % images.length);
}

function prevCarouselImage() {
    const images = document.querySelectorAll('.carousel-image');
    showCarouselImage((currentCarouselIndex - 1 + images.length) % images.length);
}

document.addEventListener('keydown', function (e) {
    const modal = document.querySelector('.modal');
    if (e.key === 'Escape' && modal) document.body.removeChild(modal);
    else if (e.key === 'ArrowRight' && modal) nextCarouselImage();
    else if (e.key === 'ArrowLeft' && modal) prevCarouselImage();
});
