//MAKE THE MAGIC HAPPEN
$(window).mousemove(function(event){
    $("#net").css({"left" : event.pageX, "top" : event.pageY});
});


$("#butterfly").animate({left: "+=200"},"slow",function() {randMovement(this)});

function randMovement(IdRef) {
    $(IdRef).
    animate({left:Math.random()*500},1000).
    animate({top:Math.random()*500},1000).
    animate({left:Math.random()*500},1000).
    animate({top:Math.random()*500},function(){randMovement(IdRef);})
    ;
}
