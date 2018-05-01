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
      setTimeout(function(){  $word.addClass(animation);}, 200);
  }, 600);
  num++; break;

case 1: //highlight a quarter of the background
  $word.removeClass(animation);
  clearInterval(loop);
  setTimeout(function(){}, 200);
  animation = "fadeIn";
  $corner.addClass(animation);
  $corner.show();

  num++; break;

case 2:
  $corner.css("transition", "1s");
  $corner.css("height", "100%");
  $corner.css("width", "33%");
  $corner.removeClass(animation);
  num++; break;

case 3:
  animation = "fadeOut";
  $corner.addClass(animation);
  num++; break;

}

});
