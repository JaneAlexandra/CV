var inputLeft = document.querySelector('.input-range--left');
var inputRight = document.querySelector('.input-range--right');
var thumbLeft = document.querySelector('.thumb-left');
var thumbRight = document.querySelector('.thumb-right');
var range = document.querySelector('.input-range__range');

function setLeftValue() {
    var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
    var percent = ((_this.value - min) / (max - min)) * 100;
    thumbLeft.style.left = percent + '%';
    range.style.left = percent + '%';
}
setLeftValue();

function setRightValue() {
    var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
    var percent = ((_this.value - min) / (max - min)) * 100;
    thumbRight.style.right = (100 - percent) + '%';
    range.style.right = (100 - percent) + '%';
}
setRightValue();

inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);

inputLeft.addEventListener('mouseover', function() {
    thumbLeft.classList.add('thumb--hover');
});
inputLeft.addEventListener('mouseout', function() {
    thumbLeft.classList.remove('thumb--hover');
});

inputLeft.addEventListener('mousedown', function() {
    thumbLeft.classList.add('thumb--active');
});

inputLeft.addEventListener('mouseup', function() {
    thumbLeft.classList.remove('thumb--active');
});

inputRight.addEventListener('mouseover', function() {
    thumbRight.classList.add('thumb--hover');
});
inputRight.addEventListener('mouseout', function() {
    thumbRight.classList.remove('thumb--hover');
});

inputRight.addEventListener('mousedown', function() {
    thumbRight.classList.add('thumb--active');
});

inputRight.addEventListener('mouseup', function() {
    thumbRight.classList.remove('thumb--active');
});