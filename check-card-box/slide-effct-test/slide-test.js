// slide 효과 라이브러리
function SliderBox1__init() {
  $('.slider-box-1 > .slick').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    arrows: true,
  });
}

SliderBox1__init();
