let button = document.querySelector(".button");
let name = document.querySelector(".name p");
let nameid = document.querySelector(".name input");
let familuy = document.querySelector(".familuy p");
let familuyid = document.querySelector(".familuy input");
let number = document.querySelector(".number p ");
let numberid = document.querySelector(".number input");
let mail = document.querySelector(".mail p");
let mailid = document.querySelector(".mail input");
let city = document.querySelector(".city p ");
let cityid = document.querySelector(".city input");

button.addEventListener("click", function () {
  name.innerHTML = "Имя: " + nameid.value;
  familuy.innerHTML = "Фамилия: " + familuyid.value;
  number.innerHTML = "Номер: " + numberid.value;
  mail.innerHTML = "Почта: " + mailid.value;
  city.innerHTML = "Город: " + cityid.value;
});
