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

let cookie = false;
let cookies = document.cookie.split("; ");
for (let i = 0; i < cookies.length; i += 1) {
  if (cookies[i].split("=")[0] == "profils_cookie") {
    cookie = cookies[i].split("=")[1];
    break;
  }
}

if (cookie) {
  let data = cookie.split("/");
  name.innerHTML = `<p>${data[0]}</p>`;
  familuy.innerHTML = `<p>${data[1]}</p>`;
  number.innerHTML = `<p>${data[2]}</p>`;
  mail.innerHTML = `<p>${data[3]}</p>`;
  city.innerHTML = `<p>${data[4]}</p>`;
}

button.addEventListener("click", function () {
  name.innerHTML = "Имя: " + nameid.value;
  familuy.innerHTML = "Фамилия: " + familuyid.value;
  number.innerHTML = "Номер: " + numberid.value;
  mail.innerHTML = "Почта: " + mailid.value;
  city.innerHTML = "Город: " + cityid.value;

  let new_cookie = `profils_cookie=${name.innerHTML}/${familuy.innerHTML}/${number.innerHTML}/${mail.innerHTML}/${city.innerHTML}; max-age=10000000000`;
  document.cookie = new_cookie;
});
