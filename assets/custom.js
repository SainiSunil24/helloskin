$('.swatches--product-card li input').change(function(){
    $(this).closest('.product-card__wrapper').find('.product-card__swatches .swatches--product-card li input').prop('checked',false);
    $(this).prop('checked',true);
    let var_id =  $(this).data('variant_id');
    // console.log(var_id);
    $(this).closest('.product-card__wrapper').find('form .product-variant-id').val(var_id);
});

jQuery(document).ready(function(){
   jQuery('.press-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
     dots: false,
    fade: false,
    asNavFor: '.press-slider-thumb'
  });
  jQuery('.press-slider-thumb').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.press-slider',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }
  ]
  });
});

$(document).ready(function() {
$(".marquee").marquee({
  duration: 20000,
  gap: 15,
  delayBeforeStart: 0,
  direction: "left",
  duplicated: true,
  startVisible: true,
  pauseOnHover: true
});
let column_length =  $('.multicolumn-grid-cont .multi-items').length;
  if(column_length == 3){
    $('.multicolumn-grid-cont').addClass('column-3');
  }else if(column_length == 5){
    $('.multicolumn-grid-cont').addClass('column-5');
  }
// $('.multicolumn-grid-cont').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   centerMode:true,
//   arrows:true,
//   centerPadding:'0px',
//   prevArrow: '<button class="slide-arrow prev-arrow"><svg class="icon icon-slider-prev icon--medium" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 16.2505L6.5 10.0005L12.75 3.75049" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
//   nextArrow: '<button class="slide-arrow next-arrow"><svg class="icon icon-slider-prev icon--medium" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 3.74121L13.75 9.99121L7.5 16.2412" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         centerPadding:'60px'
//       }
//     },
   
//   ]
// });

$('.bundle-include .bundle-included').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows:true,
      infinite: false
  });
  
  $(document).on("click",'.product-top .product-image', function(){
     let varId = $(this).closest('.inner-top').find('.product-bottom form').find('[name="variant"]').val();
     let variantId = Number(varId);
    console.log(variantId);
     let sectionId = $(this).closest('.inner-top').find('.product-bottom form').find('[name="section"]').val();
     let sectionIndex = Number(sectionId);
     window.BundleBuilder.showMoreModal(variantId,sectionIndex);
});

// product tabs 
function tabs_slider(){
  $('.custom_product_tabs .product-list-desktop').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows:true,
      infinite: false,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
  ]
  });
}
 tabs_slider(); 
  $('.custom_product_tabs .tabs__tab').click(function(){
    $('.custom_product_tabs .product-list-desktop').slick('unslick');
    setTimeout(function(){
      tabs_slider();
    },300);
    
});
});

function playPauseVideo(slick, control){
let  currentSlide = slick.find(".slick-current");
  // console.log(currentSlide,'cur')
let video = currentSlide.find("video").get(0);
// let video = currentSlide.children("video").get(0);
  // console.log(video);
    if (video != null) {
      if (control === "play"){
        video.play();
      } else {
        video.pause();
      }
    }
}
var slideWrapper = $(".review-videos-inner");
// Initialize
  slideWrapper.on("init", function(slick){
    slick = $(slick.currentTarget);
    setTimeout(function(){
      playPauseVideo(slick,"play");
    }, 1000);
   });
  slideWrapper.on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"pause");
  });
  slideWrapper.on("afterChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"play");
  });

var slideWrapper = $(".popup-slider-videos");
// Initialize
  slideWrapper.on("init", function(slick){
    slick = $(slick.currentTarget);
    setTimeout(function(){
      playPauseVideo(slick,"play");
    }, 1000);
   });
  slideWrapper.on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"pause");
  });
  slideWrapper.on("afterChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"play");
  });



 $(".review-videos-inner").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed:7000,
    autoplay: true,
    lazyLoad:"progressive",
    arrows:true,
    cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)",
     responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$('.popup-slider-videos').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed:7000,
  autoplay: true,
  vertical:true,
  verticalSwiping:true,
  focusOnSelect: false,
  asNavFor: '.popup-slider-videos-thumbnails'
});

$('.popup-slider-videos-thumbnails').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.popup-slider-videos',
  dots: false,
  arrows: true,
  autoplaySpeed:7000,
  autoplay: true,
  vertical:true,
  focusOnSelect: true
});
$('.slider-nav').on('click', '.slick-slide', function(event) {
 	event.preventDefault();
 	var goToSingleSlide = $(this).data('slick-index');
    $('.popup-slider-videos-thumbnails').slick('slickGoTo', goToSingleSlide);
    // $('.popup__overlay').fadeIn();
    $('.popup__overlay').addClass('model-active');
    $('body').addClass('video-model-open');
 });


$('.model-close').click(function() {
  // $('.popup__overlay').fadeOut();
   $('.popup__overlay').removeClass('model-active');
   $('body').removeClass('video-model-open');
});


// $('.popup__overlay').click(function(event) {
//     event.preventDefault();
//   $(this).fadeOut(); 
//   $('body').removeClass('video-model-open');
//  });
