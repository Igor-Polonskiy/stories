jQuery(function($){


$("#viewport").viewportChecker({
callbackFunction:function(){
//ТУТ СКРИПТ ИЛИ НАСТРОЙКА
$('#lines_1').animateNumber({ number: 10 },
{
    easing: 'swing',
    duration: 3000
  }
	);
$('#lines_2').animateNumber({ number: 200 },
	{
    easing: 'swing',
    duration: 3000
  });
$('#lines_3').animateNumber({ number: 300 },
	{
    easing: 'swing',
    duration: 3000
  });
$('#lines_4').animateNumber({ number: 40 },
	{
    easing: 'swing',
    duration: 3000
  });
}
});

var element = $(".owl-carousel");

if (element.length) {
  var owl = $(element).owlCarousel({
        //Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится ыне контейнера слайдера
      margin: 1000,
      items: 1,
      autoplay:true,
      autoplayTimeout:4000,
      loop:true,
      margin:10,
      animateIn: 'fadeIn',
      
      responsive : {
        0:{ 
             dots:true
          },
        1200:{
            dots:false
          }
        }
      });
     owl.owlCarousel();
    $('.next').click(function() {
      owl.trigger('next.owl.carousel');
    });
    $('.prev').click(function() {
      owl.trigger('prev.owl.carousel', [300]);
    });
}


  AOS.init();
  

});