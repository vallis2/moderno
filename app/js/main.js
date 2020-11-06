$(function(){

  var mixer = mixitup('.products__wrap-box');

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px"
    // readOnly: true
  });

  $('.product-slider__wrap').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    arrows: false

  });




});