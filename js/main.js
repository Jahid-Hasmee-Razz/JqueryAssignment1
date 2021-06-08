$(document).ready(function(){
  $(".click").click(function(){
    $(".show").toggle(1000);
  });
  $(".showimg").click(function(){
    $(".img-div").show(1000);
  });
  $(".hideimg").click(function(){
    $(".img-div").hide();
  });
  $(".close").click(function(){
    $(".main").fadeOut();
  });
  $(".btn-fade-in").click(function(){
    $(".div-1").fadeIn();
    $(".div-2").fadeIn(3000);
    $(".div-3").fadeIn("slow");
  });
 

});
