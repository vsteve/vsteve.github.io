
$(document).ready(function(){
anchorScroll();
openMobileNav();
workInfo();
workOverlay();
actionTool();

});

function openMobileNav() {
  $('.nav-icon').click(function(){
    $('nav, .nav-icon').toggleClass('is-open');
  })
  $('nav a').click(function(){
    $('nav, .nav-icon').removeClass('is-open');
  });
}

function workOverlay(){
  $('#work .work-list li a').click(function(e){
    event.preventDefault();
    var $this = $(this);
    console.log($this);
    $('body').addClass('overlay-open');
    $this.siblings().addClass('is-open fadeInUp');

    var theImage = new Image();
    theImage.src = $this.siblings().find('.the-works img').attr('src');

    var imageWidth = theImage.width;

    $this.siblings().find('.the-works img').css('max-width', imageWidth);

  });
  $('.close').click(function(){
    $('.work-overlay').removeClass('fadeInUp').addClass('fadeOutDown');
    setTimeout(function(){
      $('.work-overlay').removeClass('is-open fadeOutDown');
      $('body').removeClass('overlay-open');
    },1000);
  });
}

function workInfo() {
  $('#work .work-list li a').each(function(){
    var $this = $(this),
        clientName = $this.data('client'),
        workType = $this.data('work'),
        workImg = $this.data('image'),
        imgType = $this.data('imagetype'),
        workUrl = 'http://www.stevenvu.com/images/'

    var workFill = '<div class="work-overlay animated clearfix">' +
      '<div class="close">'+
        '<span></span>'+
      '</div>'+
      '<div class="wrapper">'+
        '<div class="content">'+
          '<h2>'+ clientName +'</h2>'+
          '<p>'+ workType +'</p>'+
        '</div>'+
        '<div class="the-works">'+
          '<img src="' + workUrl + workImg +'.'+ imgType +'">'+
        '</div>'+
      '</div>'+
    '</div>'

    $this.parent().append(workFill);

  });

}

function actionTool() {
  $('.action-button a').click(function(){
    event.preventDefault();
    $('.action-tool').toggleClass('is-open');
  });
}

function anchorScroll(){
  $('nav li:first-child a, nav li:nth-child(2) a').click(function(e){

      var anchorAttr = $(this).attr('data-title'); //get attribute number
      var anchorPos = $('#' + anchorAttr).offset().top; //get position of anchor with attribute
      $('html,body').stop().animate({scrollTop: anchorPos}); // animate scroll bar to position
   });
}
