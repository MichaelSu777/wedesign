var headerList;

var hasGoneMobile = false;

function randInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function windowResized() {
	var width = $(window).width();
	var height = $(window).height();
	try {
		if (height < 650) {
			document.getElementById("typed").style.fontSize = "20px";
		} else if (width < 1360 || height < 650) {
			document.getElementById("typed").style.fontSize = "25px";
		} else {
			document.getElementById("typed").style.fontSize = "50px";
		}
		
		if (width < 965) {
			if (hasGoneMobile) {
				return;
			}
			hasGoneMobile = true;
			goMobile();
		} else {
			if (!hasGoneMobile) {
				return;
			}
			hasGoneMobile = false;
			returnToDesktop();
		}
	
	} catch (Execption) {return;}
}

function goMobile() {
	document.getElementById("logo-img").style.left = "70px";
	
	document.getElementById("menu-list").innerHTML = "";
	
	var top = 10;
	
	if (c > 0) {
		top = 0;
	}
	
	document.getElementById("dropdown-button").innerHTML = "<div id='showmenu' style='z-index: 10; position: relative; top: " + top + "px; left: 20px; width: 40px; height: 50px;'><div id='bar1'class='menubarstrip' style='top: 20px;'></div>" +
	"<div id='bar2' class='menubarstrip' style='top: 30px;'></div><div id='bar3' class='menubarstrip' style='visibility: visible; top: 40px;'></div></div>";
	
	$("#showmenu").click(function() {
		var deg = "315";
		var sign1 = "-=";
		var sign2 = "+=";
		var amount1 = 15;
		var amount2 = 5;
		var vis = "hidden";
		
		if (document.getElementById("bar3").style.visibility != "visible") {
	    	vis = "visible";
	    	deg = "0";
	    	sign1 = "+=";
	    	sign2 = "-=";
	    	$("#menu-dropdown").animate({
				height: "0%"
			}, 500);
		} else {
			$("#menu-dropdown").animate({
				height: "110%"
			}, 500);
		}
		
		$("#bar1").css({'transform' : 'rotate(' + deg + 'deg)'});
    	$("#bar3").css({'transform' : 'rotate(' + deg + 'deg)'});
    	$("#bar2").css({'transform' : 'rotate(-' + deg + 'deg)'});
    	
    	$("#bar3").animate({
    		top: sign1 + amount1
    	}, 200);
    	$("#bar2").animate({
    		top: sign1 + amount2
    	}, 400);
    	$("#bar1").animate({
    		top: sign2 + amount2
    	}, 400);
    	
    	setTimeout(function() {
    		$("#bar3").css({'visibility' : vis});
    	}, 202);
	});
}

function returnToDesktop() {
	document.getElementById("logo-img").style.left = "10px";
	document.getElementById("dropdown-button").innerHTML = "";
	document.getElementById("menu-dropdown").style.height = "0%";
	
	changeTextColor(false, false);
	
	document.getElementById("menu-list").innerHTML = headerList;
	
	addAnimation();
}

$(window).resize(function() {
	windowResized();
});

$(document).ready(function(event) {
	$(window).scrollTop(0);
	
	var xmlhttp = new XMLHttpRequest();
	var jsonMeta = document.getElementsByName("json");
	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			data = JSON.parse(this.responseText);
			document.getElementById("title").innerHTML = data.title;
			$(document.getElementsByName("keywords")).attr("content", data.keywords);
			$(document.getElementsByName("author")).attr("content", data.author);
			$(document.getElementsByName("charset")).attr("charset", data.charset);
			$(document.getElementsByName("description")).attr("content", data.description);
			$(document.getElementsByName("viewport")).attr("content", data.viewport);
			$(document.getElementsByName("icon")).attr("content", data.icon);
		}
	};
	xmlhttp.open("GET", $(jsonMeta).attr("data-src"), true);
	xmlhttp.send();
});

function changeTextColor(up, timer) {
	var color = "navy";
	var logo = "files/Icon/Logo.png";
	var changeTime = 1;
	var method = "fadeOut(this);";
	var method2 = "fadeIn(this);";
	var classToRemove = "button-white";
	var classToAdd = "button";
	
	if (c != 0) {
		color = "white";
		logo = "files/Icon/Logo_white.png";
		classToRemove = "button";
		classToAdd = "button-white";
		method = "fadeOutNoText(this);";
		method2 = "fadeInWhiteBorder(this);";
	}
	
	if (c == 2) {
		logo = "files/Icon/Logo.png";
	}
	
	try {
		if (c == 1) {
			document.getElementById("we-content").style.opacity = 1;
		}
	} catch (Execption) {}
	
	if (up) {
		changeTime = 1;
	} else {
		changeTime = 800;
	}
	
	if (!timer) {
		changeTime = 1;
	}
	
	setTimeout(function() {
	    document.getElementById("logo-img").setAttribute("src", logo);
		
		var links = document.getElementsByClassName("desktopMenuLink");
			
		for (var i=0;i<links.length;i++) {
			links[i].style.color = color;
		}
		
		document.getElementById("buyorderbtn").style.color = "white";
		
		if (lastC == 1) {
			if (up) {
				document.getElementById("buyorderbtn").style.color = "navy";
			}
		} else if (c == 0) {
			document.getElementById("buyorderbtn").style.color = "navy";
		}
		
		document.getElementById("buyorderbtn").style.borderColor = color;
		document.getElementById("buyorderbtn").setAttribute("onmouseleave", method);
		document.getElementById("buyorderbtn").setAttribute("onmouseover", method2);
		
		$("#buyorderbtn").removeClass(classToRemove);
		$("#buyorderbtn").addClass(classToAdd);
		
		if (!hasGoneMobile) {
			headerList = document.getElementById("menu-list").innerHTML;
		}
	}, changeTime);
	
}