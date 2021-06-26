$("body").css("background-color", "#30313B");
$("body").css("overflow-y", "auto");


// display logo
setTimeout(function(){
    $("#site-logo").css({
        "transform": "scale(0.4)"
    });
}, 900);


// display nav bar
setTimeout(function(){
    $("#nav-container").css({
        "transform": "scale(1)"
    });
}, 900);




// display social handles
setTimeout(function(){
    $(".icon").css({
        "left": "0"
    });
}, 1500);
setTimeout(function(){
    $("#arrow").css({
        "left": "50px"
    });
}, 1500);





// display main content
setTimeout(function(){
    $("#mainContent").css({
        "opacity": "1"
    });
}, 2000);

setTimeout(function(){
    $("#sidenav-container").css({
        "opacity": "1"
    });
}, 2000);





// display covid warning
setTimeout(function(){
    $("#covid").css({
        "margin-top": "0px"
    });
}, 1800);





// display cookies
setTimeout(function() {
    $(".cookie-policy").css({
        "bottom": "10px"
    });
}, 7000);



// display newsletter
setTimeout(function() {
    $("#mainContent").css({
        "filter": "blur(10px)"
    });
    $(".newsletter").css({
        "left": "50%"
    });
}, 20000);


// display chat icon
setTimeout(function(){
    $("#chat-icon").css({
        "left": "1vw"
    });
}, 2000);

// display theme icon
setTimeout(function(){
    $("#theme-icon").css({
        "left": "1vw"
    });
}, 2000);








// close covid warning
function closeCovid() {
    $("#covid").css({
        "margin-top": "-100%"
    });
    $("#covid").remove();
}




// social handles
var clicks = 1;
function showSocial() {
    if (clicks%2 != 0){
        $(".icon").css({
            "left": "-55px"
        });
        $("#arrow").css({
            "left": "5px"
        });
    }
    else {
        $(".icon").css({
            "left": "0px"
        });
        $("#arrow").css({
            "left": "50px"
        });
    }
    clicks++;
}






// nav bar
function openNav() {
    $(".sidenav").css("margin-right", "0%");
}
function closeNav() {
    $(".sidenav").css("margin-right", "-100%");
}









// redirect to home page
$("#site-logo").click(function(){
    window.location.href = '../homepage/index.html';
});






// message verification for contact us
$("#send").click(function(){
    if ($("#name1").val().length == 0 || $("#email1").val().length == 0 || $("#msg").val().length == 0) {
        alert("Please enter the appropriate details!");
    }
    else {
        alert("Message sent successfully!");
    }
});






// toggle between themes
var themeClicks = 1;
$("#theme-icon").click(function() {
    themeClicks++;
    console.log(themeClicks);

    if (themeClicks%2 == 0) {
        $("body").css("background-color", "#b39de7");

        // icons
        $("#chat-icon").css("background-color", "rgb(27, 66, 85)");
        $("#theme-icon").css("background-color", "rgb(27, 66, 85)");
        $("#news-icon").css("background-color", "rgb(27, 66, 85)");
        $(".fa-envelope, .fa-adjust, .fa-comments").css("color", "rgb(59, 195, 236)");

        // change logo
        setTimeout(function(){
            $("#site-logo").attr("src", "img/logo-light.PNG");
        }, 180);

        // change font and colors
        $("#covid").css("background-color", "#6f53b1");
        $("#search").css({
            "background-color": "#7c69a7",
            "color": "white"
        });
        $(".sidenav").css("background-color", "#7c69a7");
        $(".icon").css("background-color", "#513e77");
    }
    else if (themeClicks%2 != 0){
        $("body").css("background-color", "#30313b");
    
        // icons
        $("#chat-icon").css("background-color", "rgb(59, 195, 236)");
        $("#theme-icon").css("background-color", "rgb(59, 195, 236)");
        $("#news-icon").css("background-color", "rgb(59, 195, 236)");
        $(".fa-envelope, .fa-adjust, .fa-comments").css("color", "rgb(27, 66, 85)");
    
        // change logo
        setTimeout(function(){
            $("#site-logo").attr("src", "img/logo.PNG");
        }, 180);
    
        // change font and colors
        $("#covid").css("background-color", "#434452");
        $("#search").css({
            "background-color": "#40414e",
            "color": "#000"
        });
        $(".sidenav").css("background-color", "#474750");
        $(".icon").css("background-color", "rgb(75, 81, 100)");
    }
});








// accept cookies
$("#acceptCookies").click(function() {
    $(".cookie-policy").css({
        "bottom": "-250px"
    });
});



// close newsletter
function closeNewsletter() {
    $(".newsletter").css({
        "left": "-150%"
    });
    $("#mainContent").css({
        "filter": "blur(0px)"
    });

    // show newsletter icon
    setTimeout(function(){
        $("#news-icon").css({
            "left": "1vw"
        });
    }, 1000);
}


$("#news-icon").click(function() {
    $("#mainContent").css({
        "filter": "blur(10px)"
    });
    $(".newsletter").css({
        "left": "50%"
    });
});

// check newsletter content
$("#subscribe").click(function(){
    if ($("#newsletter-number").val().length==10) {
        alert("Subscribed!");
    }
    else {
        alert("Please provide a valid number!");
    }
});




// toggle feedback
function openFeedback() {
    $(".feedback").css({
        "right": "0px"
    });
    $("#mainContent").css({
        "filter": "blur(10px)"
    });
}
function closeFeedback() {
    $(".feedback").css({
        "right": "-550px"
    });
    $("#mainContent").css({
        "filter": "blur(0px)"
    });
}
$(".opt1, .opt2, .opt3, .opt4, .opt5").click(function() {
    alert("Response submitted!");
});





// open chat
$("#chat-icon").click(function(){
    $(".chat-box").css({
        "top": "490px"
    });
    $("#mainContent").css({
        "filter": "blur(10px)"
    });
});

// close chat
$("#chat-close").click(function(){
    $(".chat-box").css({
        "top": "800px"
    });
    $("#mainContent").css({
        "filter": "blur(0px)"
    });
});

// alert after sending msg
$(".chat-box button").click(function() {
    if ($('.chat-box textarea').val() == 0){
        alert("Type something..");
    }
    else {
        alert("Message sent! Will get back soon..");
    }
});
