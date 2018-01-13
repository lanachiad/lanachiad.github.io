$(document).ready(function() {
  // Name bounce
  $('#name').addClass('animated bounceInDown');

  // Writing modals
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

  // Smooth scrolling
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

  // Animate back to top button
  $('#jump-to-top').hover(function() {
    $('.fa-arrow-up').toggleClass('move-up');
  });

  // Sticky nav hidden on page load
  $('#sticky-header').hide();
});

// Display sticky nav
$(document).scroll(function() {
  var location = $(this).scrollTop();
  if (location > $('#about').offset().top) {
    $('#sticky-header').fadeIn();
    $('#sticky-header').css('display', 'flex');
  } else {
    $('#sticky-header').fadeOut();
  }
});
