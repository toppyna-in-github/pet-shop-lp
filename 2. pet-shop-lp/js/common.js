$(document).ready(function () {
    $('.pl-slick-slide').slick({
        infinite: true,
        dots: false,
        centerMode: true, //要素を中央寄せ
        centerPadding: '10%', //両サイドの見えている部分のサイズ
        autoplay: true,
        speed: 0,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        variableWidth: true,
        centerPadding: '100px',
        focusOnSelect: true,
    });
});