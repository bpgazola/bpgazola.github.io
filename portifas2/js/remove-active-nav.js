// SCRIPT PARA RETIRAR O ACTIVE DO MENU

$(document).ready(function() {
      $("nav a").on("click", function(event){
      $("nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
   });
});