document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider-box ul li');
    const indicators = document.querySelectorAll('.indicators span');
    let currentSlide = 0;

    function updateSlider() {
        document.querySelector('.slider-box ul').style.marginLeft = `-${currentSlide * 100}%`;
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[currentSlide].classList.add('active');
    }

    document.querySelector('.next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    updateSlider(); // Inicializa el carrusel en la primera imagen
});
