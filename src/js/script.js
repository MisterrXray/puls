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
   /* ниже конфигурация для использования табов  */
   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });
   /* ниже активация кнопки или ссылки и после этого меянется контент на описание
   с помощью класса active */
   $('.catalog-item__link').each(function (i) {
      $(this).on('click', function (e) {
         e.preventDefault();
         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
   })

   /* ниже активация кнопки назад от описания к контенту */
   $('.catalog-item__back').each(function (i) {
      $(this).on('click', function (e) {
         e.preventDefault();
         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
   })



   /* ниже MODAL Окна */


   $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn();

   });

   $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');

   });



   $('.button_mini').on('click', function () {
      $('.overlay, #order').fadeIn();

   });

   $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');

   });

   $('.button_mini').each(function (i) {
      $(this).on('click', function () {
         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
         $('.overlay, #order').fadeIn('slow');
      })



   })
})
