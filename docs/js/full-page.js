const carouselHeader = document.querySelector('.header__carousel');
const fullPage = document.querySelector('.full-page');

if (carouselHeader != null) {
    let carouselHeaderItems = document.querySelectorAll('.owl-carousel-item');
    for (let index = 0; index < carouselHeaderItems.length; index++) {
        const element = carouselHeaderItems[index];
        element.addEventListener('click', (e) => {
            fullPage.classList.add('active');
            document.querySelector('body').classList.add('hidden');
            fullPage.querySelector('.full-page-item img').src = e.target.querySelector('img').src;
        });
    };

    fullPage.querySelector('.full-page-item').addEventListener('click', function() {
        fullPage.classList.remove('active');
        document.querySelector('body').classList.remove('hidden');
    });
}