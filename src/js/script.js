$(document).ready(function () {
   $('.carousel__inner').slick({   /*слайдер*/
      dots: false,
      infinite: true,
      speed: 1500,
      adaptiveHeight: false,
      autoplay: true,
      autoplayspeed: 200,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"</button>',  /*стрелки вслайдере*/
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"</button>',
      responsive: [
         {
            breakpoint: 992,   /*адаптация екрана*/
            settings: {
               dots: true,
               arrows: false,
            }
         },]
   });
});