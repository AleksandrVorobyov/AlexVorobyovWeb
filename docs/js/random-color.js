// Рандомная смне цвета
{
    for (var i = 0; i < 100000; i++) {
      setTimeout(function randColor() {
        var headerTitle = document.querySelectorAll('.card');
        headerTitle.forEach(function(item) {
          var r = Math.floor(Math.random() * (256)),
          g = Math.floor(Math.random() * (256)),
          b = Math.floor(Math.random() * (256)),
          background = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  
          item.style.borderColor = background;
          item.querySelector('.card__text').style.borderTop = `6px solid ${background}`;
        })
        }, 6000 * (i + 1));
    }
}