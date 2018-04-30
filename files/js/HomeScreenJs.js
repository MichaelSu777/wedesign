var qoutes = [
	["There are three responses to a piece of design - yes, no, and WOW!", "Wow is the one to aim for.", "- Milton Glaser"],
	["A designer knows he has achieved perfection not when there is nothing left to add,", "but when there is nothing left to takeaway.", "- Antoine de Saint-Exupéry"],
	["Digital design is like painting,", "except the paint never dries.", "- Neville Brody"],
	["Socrates said, 'Know thyself.' I say, 'Know thy users.' And guess what?", "They don't think like you do.", "- Joshua Brewer"],
	["I strive for two things in design: simplicity and clarity.", "Great design is born of those two things.", "- Lincoln Leader"],
	["Content precedes design. Design in the absence of content is not design", "it's decoration.", "- Jeffery Zeldman"],
	["How well we communicate is determined not by how well we say things,", "but how well we are understood.", "- Andrew Grove"],
	["Do not seek praise.", "Seek criticism", "- Paul Arden"],
	["Styles come and go.", "Good design is a language, not a style.", "- Massimo Vignelli"],
	["Design is not just what it looks like and feels like.", "Design is how it works.", "- Steve Jobs"],
	["You don't think your way to creative work.", "You work your way to creative thinking.", "- George Nelson"],
	["Everything is designed.", "Few things are designed well.", "- Brian Reed"],
	["If I had asked people what they wanted, they would have said faster horses.", "", "- Henry Ford"],
	["What separates design from art is that design", "is meant to be... functional.", "- Cameron Moll"],
	["Great web design without functionality", "is like a sports car with no engine.", "- Paul Cookson"]
];

var disabled = false;
var time = 1000;

var c = 0;
var lastC = 0;

var shrinkAmount = 13;
var shrinkTime = 400;

var weAnimationInProgress = false;

$(document).ready(function(event) {
    var quoteHeight = $("#header-quote").height() - $("#menup2").height();
    $("#header-quote").css({"height" : quoteHeight});
    
    $("#header-quote").animate({
        top: "80px"
    }, 600);
    
    setTimeout(function() {
        $("#one").animate({
            top: "40%",
            height: "60%"
        }, 500);
    }, 300);
    
    var index = randInt(0, qoutes.length);
	
	document.getElementById("quote").innerHTML = qoutes[index][0] + " <strong style='color: navy;'>" + qoutes[index][1] + "</strong> " + qoutes[index][2];
	
	Typed.new("#typed", {
		stringsElement: document.getElementById('typed-strings'),
		typeSpeed: 10,
	});
	
	$("#upArrow").css("visibility", "hidden");
	
	$("body").keydown(function(event) {
		if (disabled || (event.keyCode != 38 && event.keyCode != 40)) {
			return false;
		}
		move(event.keyCode == 38);
	});

	$('body').bind('mousewheel', function(e){
		if (disabled) {
			return false;
		}
		
		disabled = true;
		
		move(e.originalEvent.wheelDelta / 120 > 0);
	});
	
	$("#upArrow").click(function() {
		if (disabled) {
			return false;
		}
		move(true);
	});
	$("#downArrow").click(function() {
		if (disabled) {
			return false;
		}
		move(false);
	});
	$("#navButtonOne").click(function() {
		if (disabled) {
			return false;
		}
		
		while (c > 1)
			move(true);
	});
	
	$("#navButtonTwo").click(function() {
		if (disabled) {
			return false;
		}
		
		if (c == 1)
			move(false);
		else if (c == 3)
			move(true);
	});
	
	$("#navButtonThree").click(function() {
		if (disabled) {
			return false;
		}
		
		while (c != 3) {
			if (c < 3)
				move(false);
			else
				move(true);
		}
	});
});
function move(up) {
	disabled = true;
	setTimeout(function() {
		disabled = false;
	}, time);
	
	lastC = c;
	
	if (up) {
		if (c == 1) {
			$("#one").animate({
				top: "40%",
				height: "60%"
			}, time);
			c -= 1;
			
			document.getElementById("we-content").style.opacity = 0;
			$("#laptop").css({"left" : "-100%"});
			$("#phone").css({"left" : "1000%"});
			
			$("#menu").animate({
				height: "+=" + (shrinkAmount + 7)
			}, shrinkTime);
			$("#menup2").animate({
				height: "+=" + (shrinkAmount + 7)
			}, shrinkTime);
			$("#menu-list").animate({
				top: "+=" + shrinkAmount
			}, shrinkTime);
			$("#logo-img").animate({
				top: "+=" + shrinkAmount
			}, shrinkTime);
			$("#buyorderbtn").animate({
				top: "+=" + shrinkAmount
			}, shrinkTime);
			$("#about-us-dropdown").animate({
				top: "+=" + shrinkAmount
			}, shrinkTime);
			$("#showmenu").animate({
				top: "+=10px"
			}, shrinkTime);
			
			$("#upArrow").css("visibility", "hidden");
			$("#downArrow").css("visibility", "visible");
		} else if (c == 2) {
			$("#two").animate({
				top: "100%",
				height: "0%"
			}, time);
			
			$("#three").animate({
				top: "150%"
			}, time);
			
			deviceAnimation();
			weAnimation();
			
			$("#navButtonOne").css("background", "white");
			$("#navButtonTwo").css("background", "gray");
			$("#navButtonThree").css("background", "gray");
			
			c -= 1;
			
			layerAnimation(false);
		} else if (c == 3) {
			$("#two").animate({
				top: "0%",
				height: "100%"
			}, 10);
			$("#three").animate({
				top: "100%",
				height: "0%"
			}, time);
			c -= 1;
			
			$("#navButtonOne").css("background", "gray");
			$("#navButtonTwo").css("background", "white");
			$("#navButtonThree").css("background", "gray");
			
			layerAnimation(true);
		} else if (c == 4) {
			$("#footer").animate({
				bottom: "-=300px"
			}, 800);
		
			$("#one").animate({
				top: "0%",
				height: "100%"
			}, time);
			
			$("#three").animate({
				top: "0%",
				height: "100%"
			}, time, function() {
			    $("#footer").css("bottom", "1000px");
			});
			
			c -= 1;
			
			$("#upArrow").css("visibility", "visible");
			$("#downArrow").css("visibility", "visible");
			
			$("#navButtonOne").css("background", "gray");
			$("#navButtonTwo").css("background", "gray");
			$("#navButtonThree").css("background", "white");
		}
	} else {
		if (c == 0) {
			$("#one").animate({
				top: "0%",
				height: "100%"
			}, time, function() {
				$("#menu").animate({
					height: "-=" + (shrinkAmount + 7)
				}, shrinkTime);
				$("#menup2").animate({
					height: "-=" + (shrinkAmount + 7)
				}, shrinkTime);
				$("#menu-list").animate({
					top: "-=" + shrinkAmount
				}, shrinkTime);
				$("#logo-img").animate({
					top: "-=" + shrinkAmount
				}, shrinkTime);
				$("#buyorderbtn").animate({
					top: "-=" + shrinkAmount
				}, shrinkTime);
				$("#about-us-dropdown").animate({
					top: "-=" + shrinkAmount
				}, shrinkTime);
				$("#showmenu").animate({
					top: "-=10px"
				}, shrinkTime);
			});
			c += 1;
			
			weAnimation();

			deviceAnimation();
			
			$("#three").animate({
				top: "150%"
			}, time);
			
			$("#upArrow").css("visibility", "visible");
			$("#downArrow").css("visibility", "visible");
		} else if (c == 1) {
			$("#two").animate({
				top: "0%",
				height: "100%"
			}, time);
			c += 1;
			
			$("#laptop").css({"left" : "-100%"});
			$("#phone").css({"left" : "1000%"});
			
			$("#upArrow").css("visibility", "visible");
			$("#downArrow").css("visibility", "visible");
			
			$("#navButtonOne").css("background", "gray");
			$("#navButtonTwo").css("background", "white");
			$("#navButtonThree").css("background", "gray");
			
			layerAnimation(true);
		} else if (c == 2) {
			$("#three").animate({
				top: "0%",
				height: "100%"
			}, time, function() {
				$("#two").css("top", "100%");
			});
			
			$("#navButtonOne").css("background", "gray");
			$("#navButtonTwo").css("background", "gray");
			$("#navButtonThree").css("background", "white");
			
			c += 1;
			layerAnimation(false);
		} else if (c == 3) {
			$("#footer").css("bottom", "1000px");
			
			$("#footer").animate({
				bottom: "0px"
			}, 1000);
			
			var pHeight = "62%";
			
			$("#one").animate({
				top: "0%",
				height: pHeight
			}, 10);
			$("#two").animate({
				top: "0%",
				height: pHeight
			}, 10);
			$("#three").animate({
				top: "0%",
				height: pHeight
			}, time);
			
			fadeIn(document.getElementById("contact-us"));
			fadeOut(document.getElementById("contact-us"));
			
			$("#upArrow").css("visibility", "visible");
			$("#downArrow").css("visibility", "hidden");
				
			c += 1;
		}
	}
	changeTextColor(up, true);
}
function deviceAnimation() {
	$("#laptop").animate({
    	left: "-5%"
	}, 1000);
    $("#phone").animate({
    	left: "40%"
    }, 1000);
}
function weAnimation() {
    if (weAnimationInProgress) {
        return;
    }
    
    var delay = 1000;
    var elements = document.getElementsByClassName("we-text");
    
    for (var i=0;i<elements.length;i++) {
        elements[i].style.opacity = 0;
    }
    
    weTimers = [];
    
    weAnimationInProgress = true;
    
    $(elements[0]).animate({
        opacity: "1"
    }, delay);
    weTimers.push(setTimeout(function() {
        $(elements[0]).animate({
            opacity: "0"
        }, delay);
    }, delay + 30));
    
    weTimers.push(setTimeout(function() {
        $(elements[1]).animate({
            opacity: "1"
        }, delay);
        weTimers.push(setTimeout(function() {
            $(elements[1]).animate({
                opacity: "0"
            }, delay);
        }, delay + 30));
    }, (delay * 2) + 40));
    
    weTimers.push(setTimeout(function() {
        $(elements[2]).animate({
            opacity: "1"
        }, delay, function () {
            weAnimationInProgress = false;
        });
    }, (delay * 4) + 40));
}
function layerAnimation(on) {
	var transform = "translateX(-50%) rotateY(0deg) rotateX(55deg)";
	var sign = "-=";
	var amount = 25;
	
	if (!on) {
		transform = "translateX(-50%)";
		sign = "";
	}
	
	var layers = document.getElementsByClassName("layer");
	for (var i=0;i<layers.length;i++) {
        layers[i].style.transform = transform;
    }
}