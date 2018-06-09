$(document).ready(function() {

    $("#panel-opener").on("click",function(){
        $("#style-inner").toggleClass("open");
    });

    $(".cpattern a").on("click",function(event){
    	$(this).parent().parent().find(".active").removeClass("active");
    	$(this).addClass("active");
    	var $pattern = $(this).data("pattern");
    	$(".pattern, #wedding-events .timeline .column.heart:after").css("background-image","url(images/bgs/"+ $pattern +".png)");
    	event.preventDefault();
    });

    $('.cbox').click(function(event){
       $('.cbox').removeClass("active");
       $(this).addClass("active");
       var $colors = $(this).data("colors");
       $('#colors').attr('href','css/colors/'+ $colors );
       event.preventDefault();
    });

});
