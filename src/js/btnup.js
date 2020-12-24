
window.onscroll = function PageLink() {
    const pageLink = document.querySelector('#page-link');
    if(window.pageYOffset > 150) {
        pageLink.style.opacity='1';
    } else {
        pageLink.style.opacity='0';
    }
}