jQuery(function($){

  // Set Min-height for SDKs section
  function set_section_height(){
    $('.sdk-install').css({ "min-height": ($(window).height() - 150) });
  }
  set_section_height();

  $('body').scrollspy({ target: ".sidebar", offset: 300 });
  $('.sidebar').affix({});

  $('#sdk-menus li').click(function(){
    $('html, body').animate({
        scrollTop: $($(this).children('a').attr('href')).offset().top
    }, 400);
    return false
  })

});
