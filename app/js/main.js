$(function(){

  
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

  // menu__btn
  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  $('.header__btm-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  });
  

  
  

  var mixer = mixitup('.products__wrap-box');

});