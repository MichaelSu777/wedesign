var imgElements;
var overlayElements;
var hoverI = 0;
var a = [];

$(document).ready(function() {
    c = 1;
    lastC = 0;
    changeTextColor(false, true);
    
    imgElements = document.getElementsByClassName("img");
    overlayElements = document.getElementsByClassName("overlay");
    
    for (var i=0;i<imgElements.length;i++) {
        a.push(imgElements[i]);
        $(imgElements[i]).hover(function() {
            hoverI = a.indexOf(this);
            imgHover();
        }, function() {});
    }
    for (var i=0;i<overlayElements.length;i++) {
        $(overlayElements[i]).css({width : $(imgElements[i]).width()});
        $(overlayElements[i]).hover(function() {
        }, function() {
            imgOffHover();
        });
    }
});

function imgHover() {
    $(overlayElements[hoverI]).animate({
        height: $(imgElements[hoverI]).height()
    }, 500);
}

function imgOffHover() {
    $(overlayElements[hoverI]).animate({
        height: "0"
    }, 500);
}