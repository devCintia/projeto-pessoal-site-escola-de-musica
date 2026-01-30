let index = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    index += direction;

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    document.querySelector(".carousel").style.transform = `translateX(${-index * 100}%)`;
}

function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.menu-toggle').classList.toggle('active');
}




