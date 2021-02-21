const burderBtn = document.getElementById('nav-burger-btn');
const sidebar = document.getElementById('sidebar');
var body = document.querySelector('body');

burderBtn.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar--active');
    body.classList.toggle('hidden');
})
