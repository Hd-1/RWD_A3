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

var tree = document.getElementById("tree");
var treeInfo = tree.getBoundingClientRect();

var treeInfoLeft = treeInfo.left + 130;
var treeInfoTop = treeInfo.top + 100;

var apple1 = document.getElementById("apple1");
apple1.style.left =  treeInfoLeft + getRandomWholeNumbers(0, 350) + "px";
apple1.style.top = treeInfoTop + getRandomWholeNumbers(0, 200) + "px";

var apple2 = document.getElementById("apple2");
apple2.style.left =  treeInfoLeft + getRandomWholeNumbers(0, 350) + "px";
apple2.style.top = treeInfoTop + getRandomWholeNumbers(0, 200) + "px";

var apple3 = document.getElementById("apple3");
apple3.style.left =  treeInfoLeft + getRandomWholeNumbers(0, 350) + "px";
apple3.style.top = treeInfoTop + getRandomWholeNumbers(0, 200) + "px";

function getRandomWholeNumbers(min, max) {
    var number = Math.floor(Math.random() * (max - min) + min);
    return number;
}

var basket = document.getElementById("basketfront");
var basketInfo = basket.getBoundingClientRect();

var basketInfoLeft = basketInfo.left + 20;
var basketInfoTop = basketInfo.top - 30;

var apple = document.getElementsByClassName("apple");
$(apple).css("z-index", "1")
$(function () {
    $(apple).click(function () {
        $(this).
        animate({top:basketInfoTop, left: basketInfoLeft}, {duration: 500});
    })
})


