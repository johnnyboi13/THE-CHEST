$(".treasure").click(function(){
    $(".treasure").hide();
});
$("button").click(function(){
    $(".scroll").text("read the map to find richs and gold!!...");
});
$(".map").dblclick(function(){
    $(".map").text("defeat the guardian to claim your treasure!");
});
$(".guardian").dblclick(function(){
    $(".guardian").hide();
     $(".treasure").fadeIn();
     $(".scroll").hide();
     $(".map").hide();
     $("button").hide();
});