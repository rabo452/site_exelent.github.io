"use sctict";
/* [Symbol.toPrimitive] */
/* getBoundingClientRect() */
/* preventDefault() */
/* elementFromPoint() */
/* $('<p> </p>').insertBefore('div');  $('<p> </p>').insertAfter('div'); */
//$(':not(".div .content span:eq()")');
  $('.content2').css('opacity',"0");
    $('.content2').css('transition',"1s");
      $('.page_top').css('opacity',"0");
        $('.page_top').css('transition',"1s");
    if(window.pageYOffset>50) {
      $('.content2').css('opacity','1');
    }
    if(window.pageYOffset>810) {
      $('.page_top').css('opacity','1');
    }
document.body.onscroll = function () {
  if(window.pageYOffset>50) {
    $('.content2').css('opacity','1');
  }
if(window.pageYOffset>810) {
  $('.page_top').css('opacity','1');
}
}
