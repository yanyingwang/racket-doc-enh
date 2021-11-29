console.log("========loading Doc Racket Enh from content_script.js");
console.log(jQuery().jquery);


/////// actions /////////
handler = function main() {
  $(".tocset").css("position", "fixed");
  $(".tocset").css("overflow-y", "scroll");
  $(".tocset").css("height", "100vh");
  $(".tocset").css("margin-top", "7rem");
  $(".tocset").css("padding-top", "1rem");
  $(".navsettop").css("position", "fixed");
  $(".navsettop").css("background", "#a7b0be");
  $(".navsettop").css("padding-bottom", "1rem");
}

// $( handler );
$(document).ready(function() { $( handler ); });

