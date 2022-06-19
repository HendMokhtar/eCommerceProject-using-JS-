//pre-loader
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#pre-loader img').fadeOut(); // will first fade out the loading animation 
        $('#pre-loader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(550).css({'overflow':'visible'});
})

$("#carouselExampleFade").owlCarousel({
  loop:true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 2000,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});
$("#first-owl").owlCarousel({
  loop:true,
  margin:15,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});
$(".second-owl").owlCarousel({
  loop: true,
  margin: 15,
nav: true,
  dots: false,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 3
      },
      1000: {
          items: 4
      }
  }
});
$("#imgCarousel").owlCarousel({
  loop: true,
  margin: 15,
 nav: true,
  dots: false,
  responsive: {
      0: {
          items: 2
      },
      600: {
          items: 4
      },
      1000: {
          items: 5
      }
  }
});
$(".suggestions-owl").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots: false,
  responsive: {
      0: {
          items: 2
      },
      600: {
          items: 3
      },
      1000: {
          items: 4
      }
  }
});

$(function () {

  $(".StarRate").rateYo({
    rating: 0
  });
 
});
//taps in neckPage
$('#myTab a').on('click', function (event) {
  event.preventDefault()
  $(this).tab('show')
})


//clickable imgs in neckPage
function changeimg(url,e) {
  document.getElementById("img").src = url;
  let nodes = document.getElementById("clickableImgParent");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
}

//clickable size
function changeSize(size,e) {
  document.getElementById("clickableSize").innerText = size;
  let nodes = document.getElementById("clickableSizeParent");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
}
//clickable imgOwl
function changeOwlImg(url,e) {
  document.getElementById("basicimg").src = url;
  let nodes = document.getElementById("pickcolorParent");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
}
function changeOwlImg1(url,e) {
  document.getElementById("basicimg1").src = url;
  let nodes = document.getElementById("pickcolorParent1");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
}
function changeOwlImg2(url,e) {
  document.getElementById("basicimg2").src = url;
  let nodes = document.getElementById("pickcolorParent2");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
}
function changeOwlImg3(url,e) {
  document.getElementById("basicimg3").src = url;
  let nodes = document.getElementById("pickcolorParent3");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
}
function changeOwlImg4(url,e) {
  document.getElementById("basicimg4").src = url;
  let nodes = document.getElementById("pickcolorParent4");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
}
function changeOwlImg5(url,e) {
  document.getElementById("basicimg5").src = url;
  let nodes = document.getElementById("pickcolorParent5");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
}
function changeOwlImg6(url,e) {
  document.getElementById("basicimg6").src = url;
  let nodes = document.getElementById("pickcolorParent6");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
}
function changeOwlImg7(url,e) {
  document.getElementById("basicimg7").src = url;
  let nodes = document.getElementById("pickcolorParent7");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
}

//-----JS for Price Range slider-----





// scroll up
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// scroll up


//start of minus plus quantity//
$(function(){
  
    
  $('.plus').click(function () {		
		var selectedInput = $(this).prev('#quantity');		
			if (selectedInput.val() < 1000) {		
        selectedInput[0].stepUp(1);
			 }	
	});
  
  $('.minus').click(function () {		
		var selectedInput = $(this).next('#quantity');		
			if (selectedInput.val() > 0) {
        selectedInput[0].stepDown(1);
			 }	
	});
  
  
});
//end of minus plus quantity//

//start of responsive vertical slider
var changeSlide = 4; // mobile -1, desktop + 1
// Resize and refresh page. slider-two slideBy bug remove
var slide = changeSlide;
          if ($(window).width() < 600) {
             var slide = changeSlide;
              slide--;
          }
          else if ($(window).width() > 999) {
             var slide = changeSlide;
              slide++;
          }
          else{
           var slide = changeSlide;
          }
  $(document).ready(function() {
      $('.one').owlCarousel({
          nav: true,
          items: 1,
      })
      $('.two').owlCarousel({
          nav: true,
          margin: 15,
          mouseDrag: false,
          touchDrag: false,
          responsive: {
              0: {
                  items: changeSlide - 1,
                  slideBy: changeSlide - 1
              },
              600: {
                  items: changeSlide,
                  slideBy: changeSlide
              },
              1000: {
                  items: changeSlide + 1,
                  slideBy: changeSlide + 1
              }
          }
      })
      var owl = $('.one');
      owl.owlCarousel();
      owl.on('translated.owl.carousel', function(event) {
          $(".right").removeClass("nonr");
          $(".left").removeClass("nonl");
          if ($('.one .owl-next').is(".disabled")) {
              $(".slider .right").addClass("nonr");
          }
          if ($('.one .owl-prev').is(".disabled")) {
              $(".slider .left").addClass("nonl");
          }
          $('.slider-two .item').removeClass("active");
          var c = $(".slider .owl-item.active").index();
          $('.slider-two .item').eq(c).addClass("active");
          var d = Math.ceil((c + 1) / (slide)) - 1;
          $(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
      })
      $('.right').click(function() {
          $(".slider .owl-next").trigger('click');
      });
      $('.left').click(function() {
          $(".slider .owl-prev").trigger('click');
      });
      $('.slider-two .item').click(function() {
          var b = $(".item").index(this);
          $(".slider .owl-dots .owl-dot").eq(b).trigger('click');
          $(".slider-two .item").removeClass("active");
          $(this).addClass("active");
      });
      var owl2 = $('.two');
      owl2.owlCarousel();
      owl2.on('translated.owl.carousel', function(event) {
          $(".right-t").removeClass("nonr-t");
          $(".left-t").removeClass("nonl-t");
          if ($('.two .owl-next').is(".disabled")) {
              $(".slider-two .right-t").addClass("nonr-t");
          }
          if ($('.two .owl-prev').is(".disabled")) {
              $(".slider-two .left-t").addClass("nonl-t");
          }
      })
      $('.right-t').click(function() {
          $(".slider-two .owl-next").trigger('click');
      });
      $('.left-t').click(function() {
          $(".slider-two .owl-prev").trigger('click');
      });
  });
  //end of responsive vertical slider
  //left sidebar model 
  
    $(function() {
      var panelMenu = $('#panel-menu').SlideOutPanel({
        afterClosed() {
          $('.open-nav').fadeIn('fast');
        },
      });

      $('body').on('click', '.open-nav', function() {
        panelMenu.open();
        $('.open-nav').fadeOut('fast');
      });
    });


