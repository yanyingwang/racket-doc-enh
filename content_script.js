console.log("========loading Doc Racket Enh from content_script.js");
console.log(jQuery().jquery);


/////// actions /////////
handler = function main() {
  $(".navsettop").css("position", "fixed");
  $(".navsettop").css("background", "#a7b0be");
  $(".navsettop").css("padding-bottom", "0.5rem");

  $(".tocset").css("position", "fixed");
  $(".tocset").css("overflow-y", "scroll");
  $(".tocset").css("height", "87vh");
  $(".tocset").css("margin-top", "6.5rem");
  $(".tocset").css("padding-top", "0.5rem");
  $(".tocset").css("padding-bottom", "0.5rem");
}

// $( handler );
$(document).ready(function() { $( handler ); });

