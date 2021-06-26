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
    $(".sidenav").css("width", "230px");
}
function closeNav() {
    $(".sidenav").css("width", "0px");
}






// toggle answers for faq
var acc = document.getElementsByClassName("d2");
var i;
for (i=0; i<acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
    });
}



// redirect to home page
$("#site-logo").click(function(){
    window.location.href = '../homepage/index.html';
});





// display theme icon
setTimeout(function(){
    $("#theme-icon").css({
        "left": "1vw"
    });
}, 2000);



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
            $("#site-logo").attr("src", "../homepage/img/logo-light.PNG");
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
            $("#site-logo").attr("src", "../homepage/img/logo.PNG");
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