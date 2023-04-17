$(document).ready(function () {
    $('.menu > li > a').click(function(event){
        event.preventDefault();
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
      });
});