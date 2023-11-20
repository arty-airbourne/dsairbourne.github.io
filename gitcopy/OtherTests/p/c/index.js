const $scroll = $('#bottom-left');

$(window).on("scroll", function(){
  const st = $(this).scrollTop();
  if( st >= 240){
    $scroll.css({position: "absolute", top: 330});  
  }else{
    $scroll.css({position: "fixed", top: 100});  
  }       
});