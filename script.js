let button = document.querySelector(".button");
let name = document.querySelector(".name p");
let name_id = document.querySelector(".name-id");

button.addEventListener("click", function () {
  name.innerHTML = "Имя: " + name_id.value;
});
