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

  $('.tab').on('click', function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrap').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

  });
  

  
  

  var mixer = mixitup('.products__wrap-box');

});