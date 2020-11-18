// Получение (сбор) данных с карточек
var answers = {
  2: null,
  3: null,
  4: null,
  5: null,
};
function gatherCardData(number) {
  var question;
  var result = [];

  // Находим карточку по номеру
  var currentCard = document.querySelector(`[data-card="${number}"]`);
  var controls = currentCard.querySelectorAll(
    '[type="text"]'
  );

  // Находим вопрос с карточки
  question = currentCard.querySelector("[data-question='placeholder']").innerText; // innerText - берем внутренний текст

  // Находим заполненые значения из инпутов
  var inputValues = currentCard.querySelectorAll(
    '[type="text"], [type="email"]'
  );
  inputValues.forEach(function (item) {
    itemValue = item.value;
    if (itemValue.trim() != "") {
      result.push({
        name: item.name,
        value: item.value,
      });
    }
  });

  var data = {
    question: question,
    answer: result,
  };

  return data;
}

// Функция записи ответа в объект с ответами
function saveAnswer(number, data) {
  answers[number] = data;
}

// Функция проверки на заполненость
function isFilled(number) {
  return answers[number].answer.length > 0;
}

// Проверка на заполненость required чекбоксов и инпутов с email
function checkOnRequired(number) {
  var currentCard = document.querySelector(`[data-card="${number}"]`);
  var requiredFields = currentCard.querySelectorAll("[required]");
  var isValid = true;

  requiredFields.forEach(function (item) {
    if (
      (item.type == "checkbox" && item.checked == false) ||
      (item.type == "email" && !validateEmail(item.value))
    ) {
      isValid = false;
    }
  });

  return isValid;
}

// Функция для проверки email
function validateEmail(email) {
  var pattern = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  return pattern.test(email);
}
