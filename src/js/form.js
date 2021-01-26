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


