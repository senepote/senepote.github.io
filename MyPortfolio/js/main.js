
$(() => {

  $('.section-nav-title-profile').click((event) => {
    if ($('.section-content-container').is( ":hidden" )) {
      $('.section-content-container').slideDown( "slow", () => {
        $('.section-content-container').css('display', 'flex');
      } );
    } else {
      $('.section-content-container').slideUp( "slow" );
    }
    event.stopImmediatePropagation();
  })
  // Click handler to expand and contract resume section
  $('#resume-header').click((event) => {
    if ($('.resume-container').is( ":hidden" )) {
      $('.resume-container').slideDown( "slow", () => {
        $('.resume-container').css('display', 'flex');
      } );
    } else {
      $('.resume-container').slideUp( "slow" );
    }
    event.stopImmediatePropagation();
  })

  // Click handler to expand and contract resume section
  $('#portfolio-header').click((event) => {
    console.log('Clicked');
    if ($('.portfolio-container').is( ":hidden" )) {
      $('.portfolio-container').slideDown( "slow" );
    } else {
      $('.portfolio-container').slideUp( "slow" );
    }
    event.stopImmediatePropagation();
  })

  // Click handler to expand and contract contact section
  $('#contact-header').click((event) => {
    console.log('Clicked');
    if ($('.contact-container').is( ":hidden" )) {
      $('.contact-container').slideDown( "slow" );
    } else {
      $('.contact-container').slideUp( "slow" );
    }
    event.stopImmediatePropagation();
  })

})
