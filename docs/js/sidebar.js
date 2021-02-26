const burderBtn = document.getElementById('nav-burger-btn');
const sidebar = document.getElementById('sidebar');
var body = document.querySelector('body');

burderBtn.addEventListener('click', function(e) {
    e.target.classList.toggle('navigation__burger--active');
    sidebar.classList.toggle('sidebar--active');
    body.classList.toggle('hidden');
})
