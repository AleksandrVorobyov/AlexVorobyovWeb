const fullPage = document.querySelector('.full-page');
const allCorouselImg = document.querySelectorAll('.carousel-project .owl-carousel-item img');
const cardPostWrap = document.querySelector('.card-post-wrap');
const fullPageWrap = document.querySelector('.full-page-wrap');

allCorouselImg.forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('body').style.overflow='hidden';
        fullPage.classList.add('full-page--active');
    })
})

const fullPageExit = document.querySelector('.full-page__exit');

fullPageExit.addEventListener('click', function () {
    document.querySelector('body').style.overflow='scroll';
    fullPage.classList.remove('full-page--active');
})

fullPage.onclick = function(){
    fullPage.classList.remove('full-page--active');
    document.querySelector('body').style.overflow='scroll';
};