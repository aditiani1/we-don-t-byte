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
