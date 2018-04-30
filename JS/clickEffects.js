const $body = $("body");
const $word = $("#word");
const $corner = $("#corner");
let num =0;
let animation = "";
let loop;

window.onload = function(){
  $word.addClass("animated");
  $corner.addClass("animated");
};

$body.click(function(){
switch(num){
case 0: //heartbeat animation
   animation = "pulse";
     $word.addClass(animation);
//remove then add causes delay on click
  loop =setInterval(function(){
      $word.removeClass(animation);
      setTimeout(function(){  $word.addClass(animation);}, 500);
  }, 1500);
  num++; break;

case 1: //highlight a quarter of the background
  clearInterval(loop);
  num++; break;
  
case 2:
  animation = "fadeIn";
  $corner.addClass(animation);
  $corner.show();

  num++; break;

case 3:
  $corner.removeClass(animation);
  animation = "fadeOut";
  $corner.addClass(animation);
  num++; break;
}

});
