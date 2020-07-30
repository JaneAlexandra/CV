var loginLink = document.querySelector('.login-link');
var maplink = document.querySelector('.findus');
var popupBackground = document.querySelector('.popup__background');
var popupLog = document.querySelector('.modal-login');
var popupMap = document.querySelector('.modal-map');
var popupLogClose = popupLog.querySelector('.modal-close');
var popupMapClose = popupMap.querySelector('.modal-close--map');
var form = popupLog.querySelector('.login-form');
var userLogin = popupLog.querySelector('[name=login]');
var userPassword = popupLog.querySelector('[name=password]');

loginLink.addEventListener('click', function(Event) {
    Event.preventDefault();
    popupLog.classList.remove('visually-hidden');
    popupBackground.classList.remove('visually-hidden');
    userLogin.focus();
});

popupLogClose.addEventListener('click', function(Event) {
    Event.preventDefault();
    popupLog.classList.add('visually-hidden');
    popupBackground.classList.add('visually-hidden');
    console.log('закрылся');
});

maplink.addEventListener('click', function(Event) {
    Event.preventDefault();
    popupMap.classList.remove('visually-hidden');
    popupBackground.classList.remove('visually-hidden');
});

popupMapClose.addEventListener('click', function(Event) {
    Event.preventDefault();
    popupMap.classList.add('visually-hidden');
    popupBackground.classList.add('visually-hidden');
})

popupBackground.addEventListener('click', function(Event) {
    Event.preventDefault();
    popupLog.classList.add('visually-hidden');
    popupMap.classList.add('visually-hidden');
    popupBackground.classList.add('visually-hidden');
});

form.addEventListener('submit', function(Event) {
    if (!userLogin.value || !userPassword.value) {
        Event.preventDefault();
        popupLog.classList.remove('popup__error');
        popupLog.offsetWidth = popupLog.offsetWidth;
        popupLog.classList.add('popup__error');
    }
});