const formContact = document.getElementById('form-contact');
const formemail = document.getElementById('email-form');
const formtheme = document.getElementById('theme-form');
const formtext = document.getElementById('text-form');
const formBtn = document.getElementById('button-form');

formContact.addEventListener('submit', function(e) {
  if (validateEmail(formemail.value) && formtheme.value !== '' && formtext.value !== '') {
    
  } else {
    e.preventDefault();
    alert('Ошибка ввода!')
  }
})

// Функция для проверки email
function validateEmail(email) {
  var pattern = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  return pattern.test(email);
}

// let colorbg = headerTitle.dataset.el;
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
        item.querySelector('.card__img').style.borderBottom = `4px solid ${background}`;
      })
      }, 6000 * (i + 1));
  }
}
