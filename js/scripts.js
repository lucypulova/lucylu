
/* ---------- LANGUAGE ---------- */
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("language-container").style.top = "0";
  } else {
    document.getElementById("language-container").style.top = "-1.8em";
  }
  prevScrollpos = currentScrollPos;
}

/* ---------- ON click MENU ---------- */
let a=$('.nav-holder a')
a.on('click',function(x){
  a.removeClass('active')
  $(x.target).addClass('active')
})

/* ---------- SLIDER ---------- */
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});


$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-for').slick('slickGoTo', slideno - 1);
});

$('.slider-for').on('afterChange', function() {
  a.removeClass('active')
  let dataId = $('.slick-current').attr("data-slick-index");
  $($('.nav-holder a')[dataId]).addClass('active')
  console.log(dataId);
});

/* ---------- Fit lucy-text to container ---------- */

/*textFit(document.querySelector(".lucy-text"));*/


/* ---------- Underline text - EDUCATION ---------- */
$(document).scroll(function() {
  var y = $(this).scrollTop(); //how many pixels the user scrolled
  if (y > 390) {
    //underlines the text once the user scrolls past 100px
    $('.sch').css('background-size','100% 0.12em, 0 0.1em');    /*0 0.1em, 100% 0.1em for rainbol*/
  } 
  else {
    //reverts it back to normal if the user came back to to the "below 100px" position
    $('.sch').css('background-size','0% 0.1em, 0 0.1em');
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop(); //how many pixels the user scrolled
  if (y > 650) {
    //underlines the text once the user scrolls past 100px
    $('.uni').css('background-size','100% 0.12em, 0 0.1em');    /*0 0.1em, 100% 0.1em for rainbol*/
  } 
  else {
    //reverts it back to normal if the user came back to to the "below 100px" position
    $('.uni').css('background-size','0% 0.1em, 0 0.1em');
  }
});


/* ---------- Underline text - PROJECTS ---------- */
/*
$(document).scroll(function() {
  var y = $(this).scrollTop(); 
  if (y >480) {
    $('.project-text-animation-1').css('background-size','100% 1.8em, 0 0.1em');   
  } 
  else {
    $('.project-text-animation-1').css('background-size','0% 1.8em, 0 0.1em');
  }
});
*/

$(document).scroll(function() {
  var y = $(this).scrollTop(); //how many pixels the user scrolled
  if (y >700) {
    //underlines the text once the user scrolls past 100px
    $('.project-text-animation-2').css('background-size','100% 1.5em, 0 0.1em');    /*0 0.1em, 100% 0.1em for rainbol*/
  } 
  else {
    //reverts it back to normal if the user came back to to the "below 100px" position
    $('.project-text-animation-2').css('background-size','0% 1.8em, 0 0.1em');
  }
});