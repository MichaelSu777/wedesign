var underlineElements;
var underlineContainers;
var dropDownItems;
var buttons;

var dropDownIsVisible = false;

$(document).ready(function() {
    headerList = document.getElementById("menu-list").innerHTML;
    
    windowResized();
    
    addAnimation();
});

function addAnimation() {
    underlineElements = document.getElementsByClassName("underline");
    underlineContainers = document.getElementsByClassName("underline-container");
    buttons = document.getElementsByClassName("button");

    for (var i = 0; i < underlineElements.length; i++) {
        $(underlineContainers[i]).hover(function() {
            $(this).addClass("showUnderline");
            $(this).removeClass("hideUnderline");
        }, function() {
            $(this).addClass("hideUnderline");
            $(this).removeClass("showUnderline");
        });
    }
    
    for (var i = 0;i<buttons.length;i++) {
        buttons[i].setAttribute("onmouseover", "fadeIn(this);");
        buttons[i].setAttribute("onmouseleave", "fadeOut(this);");
    }
        
	dropDownItems = document.getElementsByClassName("dropdown-item");
		
    $("#aboutus").hover(function() {showDropdown("about-us-dropdown", "aboutus");}, function() {hideDropdown("about-us-dropdown", "aboutus");});
}

function showDropdown(element, superElement) {
	if (dropDownIsVisible)
		return;
		
	$("#" + element).addClass("dropDown");
    $("#" + element).removeClass("pullUp");
	$("#" + element).css("display", "block");
	
	$("#" + superElement).addClass("bounceUp");
    $("#" + superElement).removeClass("bounceDown");
	
	dropDownIsVisible = true;
}

function hideDropdown(element, superElement) {
	$("#" + element).addClass("pullUp");
    $("#" + element).removeClass("dropDown");
	
    $("#" + superElement).addClass("bounceDown");
    $("#" + superElement).removeClass("bounceUp");
	
	dropDownIsVisible = false;
}
function fadeIn(element) {
    $(element).animate({
        color: "white"
    }, 1);
}
function fadeInWhiteBorder(element) {
    $(element).animate({
        color: "navy"
    }, 1);
}
function fadeOut(element) {
    $(element).animate({
        color: "navy"
    }, 1);
}
function fadeOutNoText(element) {
    $(element).animate({
        color: "white"
    }, 1);
}