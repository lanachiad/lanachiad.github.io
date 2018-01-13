$(document).ready(function() {
  /**************************
          Name Bounce
  **************************/
  $('#name').addClass('animated bounceInDown');

  /**************************
        Writing Modals
  **************************/
  $('#WBBtn').click(function(event) {
    $('#WBModal').css('display', 'block');
  });
  $('#PSBtn').click(function(event) {
    $('#PSModal').css('display', 'block');
  });

  $('#WBSpan').click(function(event) {
    $('#WBModal').css('display', 'none');
  });
  $('#PSSpan').click(function(event) {
    $('#PSModal').css('display', 'none');
  });

  $(window).click(function(event) {
    var WBmodal = document.getElementById('WBModal');
    var PSmodal = document.getElementById('PSModal');
    if (event.target == WBmodal) {
      $('#WBModal').css('display', 'none');
    }
    if (event.target == PSmodal) {
      $('#PSModal').css('display', 'none');
    }
  });

  /**************************
        Smooth Scrolling
  **************************/
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /**************************
        Bounce Up Arrow
  **************************/
  $('#jump-to-top').hover(function() {
    $('.fa-arrow-up').toggleClass('move-up');
  });

  /**************************
      Sticky Nav on Load
  **************************/
  $('#sticky-header').hide();
});

/**************************
     Display Sticky Nav
**************************/
$(document).scroll(function() {
  var location = $(this).scrollTop();
  if (location > $('#about').offset().top) {
    $('#sticky-header').fadeIn();
    $('#sticky-header').css('display', 'flex');
  } else {
    $('#sticky-header').fadeOut();
  }
});
