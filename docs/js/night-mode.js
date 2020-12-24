var body = document.querySelector('body');
var night = document.querySelector('#nightSun')

night.addEventListener('click', addNightMode);

// Проверяем наличие night класса у элемента button
function addNightMode() {  
    // Если класс есть, то при клике он пропадает
    if(body.classList.contains('night')) {
        body.classList.remove('night');
        night.dataset.title = "Включить белую тему";
    // Если класса нет, то при клике он появляется
    } else {
        body.classList.add('night');
        night.dataset.title = "Выключить белую тему";
    }
};

