$(document).ready(function () {
  function SliderBox1__init() {
    $('.slider-box-1 > .slick').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 0,
      arrows: true,
      // 기존 버튼의 기능을 다음 클래스로 넘긴다
      // prevArrow, nextArrow는 slick의 고유 기능
      prevArrow: '.slider-box-1 > .arrows > .btn-arrow-left',
      nextArrow: '.slider-box-1 > .arrows > .btn-arrow-right',
    });
  }

  SliderBox1__init();
});
