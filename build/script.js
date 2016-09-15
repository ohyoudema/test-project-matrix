(function(document, window, $){
  $(document).ready(function(){
    $('.gallery__slider').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1439,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    // nextArrow: '<i class="slider__custom-arrow_next">&#xf054;</i>',
    // prevArrow: '<i class="slider__custom-arrow_prev">&#xf053;</i>',
    });
    $('.fancybox-media').fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
      helpers : {
        media : {}
      }
    });
  });
})(document, window, jQuery);
