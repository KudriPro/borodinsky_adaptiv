// Personal Area
let login = document.querySelector(".user-list__item-link");
let modalLogin = document.querySelector(".modal-login");
let modalLoginClose = document.querySelector(".modal-login__close");
let loginName = modalLogin.querySelector("[name=user-name]");

//Submit form
let formApply = document.querySelector(".form__apply");
let formSubmitted = document.querySelector(".form__submitted");
let formSubmittedClose = document.querySelector(".form__submitted-btn");

//Gallery
let reviewButtonNext = document.querySelector(".reviews__next");
let reviewButtonBack = document.querySelector(".reviews__prev");
let blockquote = document.querySelectorAll(".reviews__list blockquote");


// Personal Area
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

//Gallery
const gallery = () => {
    let sliderTabs= document.querySelectorAll(".slider__toggle--gray");
    let i = 0;

    const removeClass = () => {
        for (const q of blockquote) {
            q.classList.remove("reviews__item--active");
        }
    };
    const removeActiveClass = () => {
        blockquote[i].classList.remove("reviews__item--active");
        sliderTabs[i].classList.remove("slider__toggle--target");
    };
    const addActiveClass = () => {
        blockquote[i].classList.add("reviews__item--active");
        sliderTabs[i].classList.add("slider__toggle--target");
    };

    sliderTabs.forEach(function(elem){
        elem.addEventListener("click", function(){
            removeClass();
            for (const tab of sliderTabs) {
                tab.classList.remove("slider__toggle--target");
            }
            this.classList.add("slider__toggle--target");
            let tabId = this.dataset.tab;
            let tabSlider = document.querySelector(`#${tabId}`);

            tabSlider.classList.add("reviews__item--active");
            let arr = Array.prototype.slice.call(blockquote);
            i = arr.indexOf(tabSlider);
        });

    });

    reviewButtonNext.onclick =  function() {
        removeClass();
        removeActiveClass();
        i = i + 1;
        if (i >= blockquote.length) {
            i = 0;
        }

        addActiveClass();
    }

    reviewButtonBack.onclick = function() {
        removeClass();
        removeActiveClass();
        i = i - 1;

        if(i < 0) {
            i = blockquote.length - 1;
        }

        addActiveClass();
    }
};

gallery();


//Submit form
formApply.addEventListener("click", function(event) {
    event.preventDefault();
    formSubmitted.classList.add("form__submitted--open");
  })

formSubmittedClose.addEventListener("click", function(event) {
    event.preventDefault();
    formSubmitted.classList.remove("form__submitted--open");
  })
