var body = document.querySelector('body');
var night = document.querySelectorAll('[data-night]')

night.forEach( function(item) {
    item.addEventListener('click', function() {
        if(body.classList.contains('night')) {
            body.classList.remove('night');
            this.dataset.title = "Включить белую тему";

        } else {
            body.classList.add('night');
            this.dataset.title = "Выключить белую тему";
        }
    });
})