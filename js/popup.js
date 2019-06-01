// Личный кабинет //
var login = document.querySelector(".user-list__item-link");
var modalLogin = document.querySelector(".modal-login");
var modalLoginClose = document.querySelector(".modal-login__close");
var loginName = modalLogin.querySelector("[name=user-name]");

//Отправка формы//
var formApply = document.querySelector(".form__apply");
var formSubmitted = document.querySelector(".form__submitted");
var formSubmittedClose = document.querySelector(".form__submitted-btn");

//Галерея//
var reviewButtonNext = document.querySelector(".reviews__next");
var reviewButtonBack = document.querySelector(".reviews__prev");
var blockquote = document.querySelectorAll(".reviews__list blockquote");
var input = document.querySelectorAll("[name=reviews]");
var i = 0;

// Личный кабинет //
  login.addEventListener("click", function() {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
    if (modalLogin.classList.contains("modal-login--closed")) {
        modalLogin.classList.remove("modal-login--closed");
        modalLogin.classList.add("modal-login--opened");
    } else {
        modalLogin.classList.add("modal-login--closed");
        modalLogin.classList.remove("modal-login--opened");
    }
    loginName.focus();
    });

    modalLoginClose.addEventListener("click", function() {
        modalLogin.classList.remove("modal-login--opened");
        modalLogin.classList.add("modal-login--closed");
    });


//Галерея //
// reviewButtonNext.onclick =  function() {
//     blockquote[i].style.display = "none";
//     if (i < blockquote.length -1) {
//         i = i + 1;
//     }
//     else {
//         i = 0;

//     }
//     blockquote[i].style.display = "block";
// }
reviewButtonNext.onclick =  function() {
    blockquote[i].style.display = "none";
    i = i + 1;
	if (i >= blockquote.length) {
		i = 0;
	}

    blockquote[i].style.display = "block";
}
reviewButtonBack.onclick = function() {
    blockquote[i].style.display = "none";
	i = i - 1;

	if(i < 0) {
		i = blockquote.length - 1;
	}

    blockquote[i].style.display = "block";
    // input[i].setAttribute("checked", "");
}

//Отправка формы//
formApply.addEventListener("click", function(event) {
    event.preventDefault();
    formSubmitted.classList.add("form__submitted--open");
  })

formSubmittedClose.addEventListener("click", function(event) {
    event.preventDefault();
    formSubmitted.classList.remove("form__submitted--open");
  })
