const $scroll = $('#bottom-left');

$(window).on("scroll", function(){
  const st = $(this).scrollTop();
  if( st >= 240){
    $scroll.css({position: "absolute", top: 330});  
  }else{
    $scroll.css({position: "fixed", top: 100});  
  }       
});

var bMobile =   // will be true if running on a mobile device
  navigator.userAgent.indexOf( "Mobile" ) !== -1 || 
  navigator.userAgent.indexOf( "iPhone" ) !== -1 || 
  navigator.userAgent.indexOf( "Android" ) !== -1 || 
  navigator.userAgent.indexOf( "Windows Phone" ) !== -1 ;

  var inputs = document.getElementsByTagName('input');

  for (var i = 0, len = inputs.length; i < len; i++) {
      input = inputs[i];
      input.onmouseover = function(){
          this.setAttribute('data-orig-image',this.getAttribute('src'));
          this.src = this.getAttribute('data-alt-image');
      };
      input.onmouseout = function(){
          this.src = this.getAttribute('data-orig-image');
      };
  }