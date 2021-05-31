//MAKE THE MAGIC HAPPEN
$(window).mousemove(function(event){
    $("#net").css({"left" : event.pageX, "top" : event.pageY});
});

var net = document.getElementById("net");
$(net).css("z-index", "2")


$('#butterfly').css("z-index", "3");
$('#butterfly').mouseover(function () {
    var width = $(window).width();
    var height = $(window).height();
    var x = getRandomWholeNumbers(0, width-250);
    var y = getRandomWholeNumbers(0, height-250);
    $('#butterfly').css({ 'left': x + 'px', 'top': y + 'px' });
});

$("#butterfly").animate({left: "+=200"},"slow",function() {randMovement(this)});

function randMovement(IdRef) {
    var width = $(window).width();
    var height = $(window).height();
    var speed = 3000;
    $(IdRef).
    animate({left:getRandomWholeNumbers(0, width-250)},speed).
    animate({top:getRandomWholeNumbers(0, height-250)},speed).
    animate({left:getRandomWholeNumbers(0, height-250)},speed).
    animate({top:getRandomWholeNumbers(0, height-250)},function(){randMovement(IdRef);})
    ;
}

var tree = document.getElementById("tree");
var treeInfo = tree.getBoundingClientRect();
$(tree).css("z-index", "1")

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
$(basket).css("z-index", "7")

var basketInfoLeft = basketInfo.left + 20;
var basketInfoTop = basketInfo.top;

var apple = document.getElementsByClassName("apple");
$(apple).css("z-index", "6")

$(function () {
    $(apple1).click(function () {
        $(this).
        animate({top:basketInfoTop, left: basketInfoLeft}, {duration: 1000});
    })
})
$(function () {
    $(apple2).click(function () {
        $(this).
        animate({top:basketInfoTop, left: basketInfoLeft + 50}, {duration: 1000});
    })
})
$(function () {
    $(apple3).click(function () {
        $(this).
        animate({top:basketInfoTop, left: basketInfoLeft + 100}, {duration: 1000});
    })
})

var wateringcan = document.getElementById("wateringcan");
var wateringcanInfo = wateringcan.getBoundingClientRect();
$(wateringcan).css("z-index", "5");
var wateringcanInfoLeft = wateringcanInfo.left;
var wateringcanInfoTop = wateringcanInfo.top;

var waterdrops = document.getElementsByClassName("waterdrop");
$(waterdrops).css("z-index", "4");
$(waterdrops).css({position: 'absolute'});

var windowHeight = $(window).height() - wateringcanInfoTop;
var tilted;

function waterdropAnimation() {
    var left = wateringcanInfoLeft + "px";
    var top = wateringcanInfoTop + getRandomWholeNumbers(60, 200) + "px";
    $(waterdrops).css({"transform": "translate(" + left + ", " + top + ")"});
    $(waterdrops).each(function(index, element) {
        var duration = getRandomWholeNumbers(1000, 2000);
        $(element).animate(
            {top: windowHeight},
            duration,
            function () {
                $(element).css("top", "");
                if (tilted) {
                    waterdropAnimation();
                }
            });
    });
}

function waterdropTranslate(){
    var wateringcanInfoLeftInitial = wateringcanInfoLeft + 100 + "px";
    var wateringcanInfoTopInitial = wateringcanInfoTop + 100 + "px";
    $(waterdrops).css({"transform": "translate(" + wateringcanInfoLeftInitial + ", " + wateringcanInfoTopInitial + ")"});
}

waterdropTranslate();

$(document).ready(function() {
    tilted = false;
    $(wateringcan).click(function () {
        if (!tilted) {
            tilted = true;
            $(wateringcan).css({"transform": "rotate(" + -30 + "deg)"});
            waterdropAnimation();
        } else {
            tilted = false;
            waterdropTranslate();
            $(wateringcan).css({"transform": "rotate(" + 0 + "deg)"});
        }
    })
})


