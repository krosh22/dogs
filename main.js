const sectionBtn = document.getElementById('section-btn');// получаем элемент с id section-btn

sectionBtn.addEventListener('click', function (e) { // вешаем событие клик на элемент
    e.preventDefault();// прерываем станадртное событие у ссылки
    this.classList.toggle('menu-btn') // добавляет и удаляет класс
});


// $(".section-btn").on("click", function(e) {
//  e.preventDefault;
//  $(this).toggle("menu-btn")
// });

const products = document.getElementById("Products")
const card = document.getElementById("card")
const modal = document.getElementById("modal")

card.addEventListener("click",function (e){
    e.preventDefault();
    modal.classList.toggle("modal_active")
});

const exit = document.getElementById("exit")

exit.addEventListener("click", function (){
    modal.classList.remove("modal_active")
})


const logo = document.getElementById("logo")
products.addEventListener("click",function (e){
e.preventDefault();
logo.classList.toggle("showAnimation")
})