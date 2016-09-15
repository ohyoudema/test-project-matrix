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
      // nextArrow: '.gallery__controllers-next',
      // prevArrow: '.gallery__controllers-prev',
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
