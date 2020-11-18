var colorsSelector = document.querySelectorAll(".color-item");
var activeColor = document.querySelector(".color-item--active");

colorsSelector.forEach(function (item) {
  item.addEventListener("click", function () {
    document
      .querySelector(".color-item--active")
      .classList.remove("color-item--active");
    item.classList.add("color-item--active");

    var color = document.getElementsByClassName("card");

    for (i = 0; i < color.length; i++) {
      color[i].style.background = `${item.dataset.color}`;
    }
  });
});
