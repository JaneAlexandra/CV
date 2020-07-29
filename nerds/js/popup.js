var contactLink = document.querySelector('.contacts__button');
var popup = document.querySelector('.popup');
var popupClose = document.querySelector('.popup__close');
var popupOverLay = document.querySelector('.popup__background');
var form = popup.querySelector('.popup__form');
var popupInput = popup.querySelectorAll('.popup__input');
var userName = popup.querySelector('[name=name]');
var userEmail = popup.querySelector('[name=email]');
var userText = popup.querySelector('[name=letter-text]');

contactLink.addEventListener('click', function(Event) {
    Event.preventDefault();
    popup.classList.remove('visually-hidden');
    popupOverLay.classList.remove('visually-hidden');
    userName.focus();
});

popupClose.addEventListener('click', function(Event) {
    Event.preventDefault();
    popup.classList.add('visually-hidden');
    popup.classList.remove('popup-error');
    popupOverLay.classList.add('visually-hidden');
    userName.classList.remove('popup__input--required');
    userEmail.classList.remove('popup__input--required');
    userText.classList.remove('popup__input--required');
});

popupOverLay.addEventListener('click', function(Event) {
    Event.preventDefault();
    popup.classList.add('visually-hidden');
    popup.classList.remove('popup-error');
    popupOverLay.classList.add('visually-hidden');
    userName.classList.remove('popup__input--required');
    userEmail.classList.remove('popup__input--required');
    userText.classList.remove('popup__input--required');
});

form.addEventListener('submit', function(Event) {
    if (!userName.value || !userEmail.value || !userText.value) {
        Event.preventDefault();
        popup.classList.remove('popup__error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('popup__error');
        userName.classList.add('popup__input--required');
        userEmail.classList.add('popup__input--required');
        userText.classList.add('popup__input--required');
    }
});